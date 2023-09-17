import template from '../handlebars/filmsGridLibrary.hbs';
import { readMovieDB } from './firebase';
import { userState } from './authUser';

const watchedButton = document.getElementById('watched');
const queueButton = document.getElementById('queue');
const moviesGridSection = document.querySelector('div.selected-films-grid');

const watchedMovies = readMovieDB(userState?.userId, 'watchedMovies');
const queueMovies = readMovieDB(userState?.userId, 'queueMovies');

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
