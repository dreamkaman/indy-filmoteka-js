import template from '../handlebars/filmsGridLibrary.hbs';

const watchedButton = document.getElementById('watched');
const queueButton = document.getElementById('queue');
const moviesGridSection = document.querySelector('div.selected-films-grid');

const watchedMovies = JSON.parse(localStorage.getItem('watchedMovies'));
const queueMovies = JSON.parse(localStorage.getItem('queueMovies'));

const markUp = template({ films: watchedMovies });

moviesGridSection.innerHTML = markUp;

watchedButton.addEventListener('click', () => {
	const markUp = template({ films: watchedMovies });
	moviesGridSection.innerHTML = markUp;
});

queueButton.addEventListener('click', () => {
	const markUp = template({ films: queueMovies });
	moviesGridSection.innerHTML = markUp;
});
