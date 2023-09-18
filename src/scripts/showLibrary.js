import { onAuthStateChanged } from 'firebase/auth';

import template from '../handlebars/filmsGridLibrary.hbs';
import { auth, readMovieDB } from './firebase';
import { moviesCollections } from './state';

const watchedButton = document.getElementById('watched');
const queueButton = document.getElementById('queue');
const moviesGridSection = document.querySelector('div.selected-films-grid');

onAuthStateChanged(auth, async (user) => {
	console.log('onAuthStateChanged on library works!');
	const watchedMovies = user?.uid ? await readMovieDB(user.uid, 'watchedMovies') : [];

	const markUp = watchedMovies.length
		? template({ films: watchedMovies })
		: '<p style="color:red">Please, log in to watch the list of movies!</p>';

	moviesGridSection.innerHTML = markUp;
});

watchedButton.addEventListener('click', () => {
	const markUp = moviesCollections.watchedMovies.length
		? template({ films: moviesCollections.watchedMovies })
		: '<p style="color:red">Please, log in to watch the list of movies!</p>';
	moviesGridSection.innerHTML = markUp;
});

queueButton.addEventListener('click', () => {
	const markUp = moviesCollections.queueMovies.length
		? template({ films: moviesCollections.queueMovies })
		: '<p style="color:red">Please, log in to watch the list of movies!</p>';
	moviesGridSection.innerHTML = markUp;
});
