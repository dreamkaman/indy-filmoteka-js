import template from '../handlebars/filmsGridLibrary.hbs';
import { transformPopularMovies } from '../tools/transformPopularMovies';
import { allGenres } from '../API/api';

const watchedButton = document.querySelector('button.btn-watched');
const queueButton = document.querySelector('button.btn-queue');
const moviesGridSection = document.querySelector('section.movies-grid');

const watchedMovies = JSON.parse(localStorage.getItem('watchedMovies'));
// const queueMovies = JSON.parse(localStorage.getItem('queueMovies'));

const watchedMoviesTransformed = { films: transformPopularMovies(watchedMovies, allGenres) };

const markUp = template(watchedMoviesTransformed);

moviesGridSection.innerHTML = markUp;
