import { selectedFilmsContainer } from './popularMovies';
import { transformMovies } from '../tools/transformMovies';
import { paginationOptions } from './pagination';
import template from '../handlebars/filmCardModal.hbs';
import { showModal } from './modalWindow';
import { allGenres } from '../API/api';
import { writeMovie } from './firebase';
import { userState } from './authUser';
import { showErrorMessage } from './toastifyMessages';
import { push } from 'firebase/database';

export const modalWindowForm = document.querySelector('form.modal-form');
const watchedMovies = () => JSON.parse(localStorage.getItem('watchedMovies'));
const queueMovies = () => JSON.parse(localStorage.getItem('queueMovies'));

let transformedMovie;

selectedFilmsContainer.addEventListener('click', (event) => {
	if (event.target.id) {
		const foundMovie = paginationOptions.currentSetOfMovies.filter(
			(movie) => movie.id === Number(event.target.id),
		);

		transformedMovie = transformMovies(foundMovie, allGenres)[0];

		const markUp = template({ movieInfo: transformedMovie });

		modalWindowForm.innerHTML = markUp;

		showModal();
		addEventListeners();
	}
});

function addEventListeners() {
	const addToWatchedButton = document.querySelector('button.btn-add-to-watched');
	const addToQueueButton = document.querySelector('button.btn-add-to-queue');

	if (!userState?.userId) {
		showErrorMessage('User is not logged in!');
	} //Check userId for read/write database.

	if (watchedMovies()?.find((movie) => movie.id === transformedMovie.id)) {
		addToWatchedButton.textContent = 'Remove from watched';
	}

	if (queueMovies()?.find((movie) => movie.id === transformedMovie.id)) {
		addToQueueButton.textContent = 'Remove from queue';
	}

	addToQueueButton.addEventListener('click', (event) => {
		switch (event.target.textContent) {
			case 'Add to queue':
				if (queueMovies()?.length) {
					localStorage.setItem('queueMovies', JSON.stringify([...queueMovies(), transformedMovie]));
				} else {
					localStorage.setItem('queueMovies', JSON.stringify([transformedMovie]));
				}
				event.target.textContent = 'Remove from queue';
				//Firebase test block
				writeMovie(userState?.userId, 'queueMovies', transformedMovie);
				break;
			case 'Remove from queue':
				localStorage.setItem(
					'queueMovies',
					JSON.stringify(queueMovies().filter((movie) => movie.id !== transformedMovie.id)),
				);
				event.target.textContent = 'Add to queue';
				break;
		}
	});

	addToWatchedButton.addEventListener('click', (event) => {
		switch (event.target.textContent) {
			case 'Add to watched':
				if (watchedMovies()?.length) {
					localStorage.setItem(
						'watchedMovies',
						JSON.stringify([...watchedMovies(), transformedMovie]),
					);
				} else {
					localStorage.setItem('watchedMovies', JSON.stringify([transformedMovie]));
				}
				addToWatchedButton.textContent = 'Remove from watched';
				//Firebase test block
				writeMovie(userState?.userId, 'watchedMovies', transformedMovie);
				break;

			case 'Remove from watched':
				localStorage.setItem(
					'watchedMovies',
					JSON.stringify(watchedMovies().filter((movie) => movie.id !== transformedMovie.id)),
				);
				addToWatchedButton.textContent = 'Add to watched';
				break;
		}
	});
}
