import { onAuthStateChanged } from 'firebase/auth';

import template from '../handlebars/filmsGridLibrary.hbs';
import { auth, readMovieDB } from './firebase';
import { moviesCollections, userState } from './state';

const watchedButton = document.getElementById('watched');
const queueButton = document.getElementById('queue');
const moviesGridSection = document.querySelector('div.selected-films-grid');

onAuthStateChanged(auth, async (user) => {
	const watchedMovies = user?.uid ? await readMovieDB(user.uid, 'watchedMovies') : [];

	userState.userId = user?.uid;

	const markUp = user?.uid
		? template({ films: watchedMovies })
		: '<p style="color:red; padding-top:20px">Please, log in to watch the list of movies!</p>';

	moviesGridSection.innerHTML = markUp;
});

watchedButton.addEventListener('click', () => {
	const markUp = userState.userId
		? template({ films: moviesCollections.watchedMovies })
		: '<p style="color:red; padding-top:20px">Please, log in to watch the list of movies!</p>';

	moviesGridSection.innerHTML = markUp;
});

queueButton.addEventListener('click', () => {
	const markUp = userState.userId
		? template({ films: moviesCollections.queueMovies })
		: '<p style="color:red; padding-top:20px">Please, log in to watch the list of movies!</p>';

	moviesGridSection.innerHTML = markUp;
});
