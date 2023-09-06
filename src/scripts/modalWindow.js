import { transformedMovie } from './showDetails';

const backDropDiv = document.querySelector('div.backdrop');
const closeBtnModal = document.querySelector('svg.modal__close-button');

export const showModal = () => {
	backDropDiv.classList.remove('visually-hidden');
	document.body.style.overflow = 'hidden';
	const addToWatchedButton = document.querySelector('button.btn-watched');
	const addToQueueButton = document.querySelector('button.btn-queue');

	const watchedMovies = JSON.parse(localStorage.getItem('watchedMovies'));
	const queueMovies = JSON.parse(localStorage.getItem('queueMovies'));

	if (watchedMovies?.find((movie) => movie.id === transformedMovie.id)) {
		addToWatchedButton.textContent = 'Remove from watched';
	}

	if (queueMovies?.find((movie) => movie.id === transformedMovie.id)) {
		addToQueueButton.textContent = 'Remove from queue';
	}

	addToQueueButton.addEventListener('click', (event) => {
		switch (event.target.textContent) {
			case 'Add to queue':
				if (queueMovies?.length) {
					localStorage.setItem('queueMovies', JSON.stringify([...queueMovies, transformedMovie]));
				} else {
					localStorage.setItem('queueMovies', JSON.stringify([transformedMovie]));
				}
				event.target.textContent = 'Remove from queue';

				break;
			case 'Remove from queue':
				localStorage.setItem(
					'queueMovies',
					JSON.stringify(queueMovies.filter((movie) => movie.id !== transformedMovie.id)),
				);
				event.target.textContent = 'Add to queue';
				break;
		}
	});

	addToWatchedButton.addEventListener('click', (event) => {
		switch (event.target.textContent) {
			case 'Add to watched':
				if (watchedMovies?.length) {
					localStorage.setItem(
						'watchedMovies',
						JSON.stringify([...watchedMovies, transformedMovie]),
					);
				} else {
					localStorage.setItem('watchedMovies', JSON.stringify([transformedMovie]));
				}
				addToWatchedButton.textContent = 'Remove from watched';
				break;

			case 'Remove from watched':
				localStorage.setItem(
					'watchedMovies',
					JSON.stringify(watchedMovies.filter((movie) => movie.id !== transformedMovie.id)),
				);
				addToWatchedButton.textContent = 'Add to watched';
				break;
		}
	});
};

export const closeModal = () => {
	backDropDiv.classList.add('visually-hidden');
	document.body.style.overflow = 'auto';
};

backDropDiv.addEventListener('click', (event) => {
	if (event.target === event.currentTarget) {
		closeModal();
	}
});

closeBtnModal.addEventListener('click', () => {
	closeModal();
});
