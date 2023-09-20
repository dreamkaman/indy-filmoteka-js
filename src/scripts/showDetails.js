import { selectedFilmsContainer } from './popularMovies';
import { transformMovies } from '../tools/transformMovies';
import { paginationOptions } from './pagination';
import template from '../handlebars/filmCardModal.hbs';
import { showModal } from './modalWindow';
import { allGenres } from '../API/api';
import { writeMovieDB } from './firebase';
import { userState } from './state';
import { showErrorMessage, showSuccessMessage } from './toastifyMessages';
import { moviesCollections } from './state';

export const modalWindowForm = document.querySelector('form.modal-form');

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
		showErrorMessage('User is not authorized!');
		addToWatchedButton.classList.add('visually-hidden');
		addToQueueButton.classList.add('visually-hidden');
		return;
	} else {
		addToWatchedButton.classList.remove('visually-hidden');
		addToQueueButton.classList.remove('visually-hidden');
	} //Check userId for read/write database.

	if (moviesCollections.watchedMovies.find((movie) => movie.id === transformedMovie.id)) {
		addToWatchedButton.textContent = 'Remove from watched';
	}

	if (moviesCollections.queueMovies.find((movie) => movie.id === transformedMovie.id)) {
		addToQueueButton.textContent = 'Remove from queue';
	}

	addToQueueButton.addEventListener('click', (event) => {
		switch (event.target.textContent) {
			case 'Add to queue':
				moviesCollections.queueMovies.push(transformedMovie);

				event.target.textContent = 'Remove from queue';

				showSuccessMessage('The movie was added to queue movies!');

				break;
			case 'Remove from queue':
				moviesCollections.queueMovies = moviesCollections.queueMovies.filter(
					(movie) => movie.id !== transformedMovie.id,
				);

				event.target.textContent = 'Add to queue';

				showSuccessMessage('The movie was removed from queue movies!');
				break;
		}
		writeMovieDB(userState.userId, 'queueMovies', moviesCollections.queueMovies);
	});

	addToWatchedButton.addEventListener('click', (event) => {
		switch (event.target.textContent) {
			case 'Add to watched':
				moviesCollections.watchedMovies.push(transformedMovie);

				event.target.textContent = 'Remove from watched';

				showSuccessMessage('The movie was added to watched movies!');

				break;
			case 'Remove from watched':
				moviesCollections.watchedMovies = moviesCollections.watchedMovies.filter(
					(movie) => movie.id !== transformedMovie.id,
				);

				event.target.textContent = 'Add to watched';

				showSuccessMessage('The movie was removed from watched movies!');
				break;
		}
		writeMovieDB(userState.userId, 'watchedMovies', moviesCollections.watchedMovies);
	});
}
