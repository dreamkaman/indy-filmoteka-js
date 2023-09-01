import { getPopularMovies, getMovieByName, allGenres } from '../API/api';

import { transformPopularMovies } from '../tools/transformMovies';

import template from '../handlebars/filmsGrid.hbs';

import { paginationOptions, pagination } from './pagination';

const selectedFilmsContainer = document.querySelector('div.selected-films-grid');

export const buildMovieSection = async (eventData) => {
	let data;

	if (!paginationOptions.searchText) {
		data = await getPopularMovies(eventData?.page ?? 1);
	} else {
		data = await getMovieByName(paginationOptions.searchText, eventData?.page ?? 1);
	}

	if (data.total_pages > 500) {
		pagination.setTotalItems(1000);
	} else {
		pagination.setTotalItems(20 * data.total_pages);
	}

	if (!eventData) {
		pagination.movePageTo(1);
	}

	const popularMovies = data.results;

	const popularMoviesTransformed = { films: transformPopularMovies(popularMovies, allGenres) };

	const markUp = template(popularMoviesTransformed);

	selectedFilmsContainer.innerHTML = markUp;
};

buildMovieSection();

// export async function buildMovieSection(eventData) {
// 	let data;

// 	if (!paginationOptions.searchText) {
// 		data = await getPopularMovies(eventData?.page ?? 1);
// 	} else {
// 		data = await getMovieByName(paginationOptions.searchText, eventData?.page ?? 1);
// 	}

// 	if (data.total_pages > 500) {
// 		pagination.setTotalItems(1000);
// 	} else {
// 		pagination.setTotalItems(20 * data.total_pages);
// 	}

// 	if (!eventData) {
// 		pagination.movePageTo(1);
// 	}

// 	const popularMovies = data.results;

// 	const popularMoviesTransformed = { films: transformPopularMovies(popularMovies, allGenres) };

// 	const markUp = template(popularMoviesTransformed);

// 	selectedFilmsContainer.innerHTML = markUp;
// }
