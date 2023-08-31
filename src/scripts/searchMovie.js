import { paginationOptions } from './pagination';

import { buildMovieSection } from './popularMovies';

const filmSearchForm = document.querySelector('form.film-search');

const inputSearch = document.querySelector('input.film-search__input');

const svgSearchLens = document.querySelector('svg.film-search__lens');

inputSearch.addEventListener('input', (event) => {
	if (event.target.value) {
		svgSearchLens.classList.add('visually-hidden');
	} else {
		svgSearchLens.classList.remove('visually-hidden');
	}
	paginationOptions.searchText = event.target.value;
});

filmSearchForm.addEventListener('submit', (event) => {
	event.preventDefault();
	console.log(event.target.value);
	buildMovieSection();
});
