import { paginationOptions } from './pagination';

import { buildMovieSection } from './popularMovies';

export const errorParagraph = document.querySelector('p.film-search__error');

const filmSearchForm = document.querySelector('form.film-search');

export const inputSearch = document.querySelector('input.film-search__input');

const svgSearchLens = document.querySelector('svg.film-search__lens');

inputSearch.addEventListener('input', (event) => {
	event.preventDefault();

	if (event.target.value) {
		svgSearchLens.classList.add('visually-hidden');
	} else {
		svgSearchLens.classList.remove('visually-hidden');
	}
	paginationOptions.searchText = event.target.value;

	errorParagraph.classList.add('visually-hidden');

	//active search block start===========================
	let controller = new AbortController();

	if (timeoutId) {
		clearTimeout(timeoutId);
	}

	var timeoutId = setTimeout(() => {
		if (event.target.value === searchValue) {
			return;
		}
		controller.abort();
		controller = new AbortController();

		var searchValue = event.target.value;

		buildMovieSection();
	}, 2000);
	//active search block end================================
});

filmSearchForm.addEventListener('submit', (event) => {
	event.preventDefault();

	buildMovieSection();
});
