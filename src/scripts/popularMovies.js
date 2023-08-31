import { getPopularMovies, getMovieByName, allGenres } from '../API/api';

import { transformPopularMovies } from '../tools/transformMovies';

import template from '../handlebars/filmsGrid.hbs';

import { paginationOptions } from './pagination';

const selectedFilmsContainer = document.querySelector('div.selected-films-grid');

buildMovieSection();

export async function buildMovieSection(eventData) {
	let data;

	if (!paginationOptions.searchText) {
		data = await getPopularMovies(eventData?.page ?? 1);
	} else {
		data = await getMovieByName(paginationOptions.searchText, eventData?.page ?? 1);
	}

	if (data.total_pages > 500) {
		paginationOptions.totalItems = 1000;
	} else {
		paginationOptions.totalItems = 20 * data.total_pages;
	}

	const popularMovies = data.results;

	const popularMoviesTransformed = { films: transformPopularMovies(popularMovies, allGenres) };

	const markUp = template(popularMoviesTransformed);

	selectedFilmsContainer.innerHTML = markUp;
}
