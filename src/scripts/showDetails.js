import { selectedFilmsContainer } from './popularMovies';
import { transformMovies } from '../tools/transformMovies';
import { paginationOptions } from './pagination';
import template from '../handlebars/filmCardModal.hbs';
import { showModal } from './modalWindow';
import { allGenres } from '../API/api';

const modalWindowForm = document.querySelector('form.movie-card');

export let transformedMovie;

selectedFilmsContainer.addEventListener('click', (event) => {
	if (event.target.id) {
		const foundMovie = paginationOptions.currentSetOfMovies.filter(
			(movie) => movie.id === Number(event.target.id),
		);

		transformedMovie = transformMovies(foundMovie, allGenres)[0];

		const markUp = template({ movieInfo: transformedMovie });

		modalWindowForm.innerHTML = markUp;

		showModal();
	}
});
