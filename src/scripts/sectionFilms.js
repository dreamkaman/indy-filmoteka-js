import Pagination from 'tui-pagination';

import template from '../handlebars/filmsGrid.hbs';

import { getMoviesGenres, getTVGenres, getPopularMovies } from '../API/api';

import { transformPopularMovies } from '../tools/transformMovies';

import { paginationOptions } from './pagination';

const selectedFilmsContainer = document.querySelector('section.selected-films div.container');

const data = await getPopularMovies();

const popularMovies = data.results;

const moviesGenres = await getMoviesGenres();

const tvGenres = await getTVGenres();

const allGenres = [...moviesGenres, ...tvGenres];

const popularMoviesTransformed = { films: transformPopularMovies(popularMovies, allGenres) };

const markUp = template(popularMoviesTransformed);

selectedFilmsContainer.innerHTML = markUp;

//Pagination

const container = document.getElementById('tui-pagination-container');

const pagination = new Pagination(container, paginationOptions);

console.log(pagination);
