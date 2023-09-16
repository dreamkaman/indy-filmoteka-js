import template from '../handlebars/filmsGridLibrary.hbs';
import { userState } from './authUser';
import { readMovie } from './firebase';

const watchedButton = document.getElementById('watched');
const queueButton = document.getElementById('queue');
const moviesGridSection = document.querySelector('div.selected-films-grid');

const watchedMovies = readMovie(userState?.userId, 'watchedMovies');
const queueMovies = readMovie(userState?.userId, 'queueMovies');
console.log(queueMovies);
console.log('Show library ran!');
console.log(userState.userId);

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
