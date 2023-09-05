import { selectedFilmsContainer } from './popularMovies';
import { transformSelectedMovie } from '../tools/transformSelectedMovie';
import { paginationOptions } from './pagination';
import template from '../handlebars/filmCardModal.hbs';
import { showModal } from './modalWindow';
import { allGenres } from '../API/api';

const modalWindowForm = document.querySelector('form.movie-card');

selectedFilmsContainer.addEventListener('click', (event) => {
	if (event.target.id) {
		const foundMovie = paginationOptions.currentSetOfMovies.find(
			(movie) => movie.id === Number(event.target.id),
		);
		console.log(foundMovie);

		const transformedMovie = transformSelectedMovie(foundMovie, allGenres);

		const markUp = template({ movieInfo: transformedMovie });

		modalWindowForm.innerHTML = markUp;

		showModal();
	}
});
