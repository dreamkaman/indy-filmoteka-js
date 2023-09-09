import { getPopularMovies, getMovieByName, allGenres } from '../API/api';

import { transformPopularMovies } from '../tools/transformPopularMovies';

import template from '../handlebars/filmsGrid.hbs';

import { paginationOptions, pagination } from './pagination';

import { errorParagraph } from './searchMovie';

export const selectedFilmsContainer = document.querySelector('div.selected-films-grid');

const paginationContainer = document.getElementById('tui-pagination-container');

buildMovieSection();

export async function buildMovieSection(eventData) {
	let data;

	if (!paginationOptions.searchText) {
		data = await getPopularMovies(eventData?.page ?? 1);
	} else {
		data = await getMovieByName(paginationOptions.searchText, eventData?.page ?? 1);
	}

	if (data.results.length) {
		paginationContainer.classList.remove('visually-hidden');

		if (data.total_pages > 500) {
			pagination.setTotalItems(1000);
		} else {
			pagination.setTotalItems(20 * data.total_pages);
		}

		if (!eventData && pagination.getCurrentPage() !== 1) {
			pagination.movePageTo(1);
		}

		const popularMovies = data.results;

		paginationOptions.currentSetOfMovies = popularMovies;

		const popularMoviesTransformed = { films: transformPopularMovies(popularMovies, allGenres) };

		const markUp = template(popularMoviesTransformed);

		selectedFilmsContainer.innerHTML = markUp;
	} else {
		errorParagraph.classList.remove('visually-hidden');

		paginationContainer.classList.add('visually-hidden');

		selectedFilmsContainer.innerHTML = '';
	}
}
