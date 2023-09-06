import { transformedMovie } from './showDetails';

const backDropDiv = document.querySelector('div.backdrop');
const closeBtnModal = document.querySelector('svg.modal__close-button');

export const showModal = () => {
	backDropDiv.classList.remove('visually-hidden');
	document.body.style.overflow = 'hidden';
	const addToWatchedButton = document.querySelector('button.btn-watched');
	const addToQueueButton = document.querySelector('button.btn-queue');

	const watchedMovies = JSON.parse(localStorage.getItem('watchedMovies'));

	if (watchedMovies?.find((movie) => movie.id === transformedMovie.id)) {
		addToWatchedButton.textContent = 'Remove from watched';
	}

	addToWatchedButton.addEventListener('click', (event) => {
		switch (event.target.textContent) {
			case 'Add to watched':
				if (watchedMovies) {
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

	addToQueueButton.addEventListener('click', () => {
		console.log('Add to queue is clicked!');
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
