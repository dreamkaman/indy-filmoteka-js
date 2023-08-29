import template from '../handlebars/filmCard.hbs';

import { getMoviesGenres, getTVGenres, getPopularMovies } from '../API/api';

import { transformPopularMovies } from '../tools/transformMovies';

const selectedFilmsContainer = document.querySelector('section.selected-films div.container');

const popularMovies = await getPopularMovies();

console.log(popularMovies);

const moviesGenres = await getMoviesGenres();

const tvGenres = await getTVGenres();

const allGenres = [...moviesGenres, ...tvGenres];

console.log(allGenres);

const popularMoviesTransformed = { films: transformPopularMovies(popularMovies, allGenres) };

console.log(popularMoviesTransformed);

const testData = {
  films: [
    {
      adult: false,
      backdrop_path: '/2Icjry0xdRSNxrtsBR1F47b9r3u.jpg',
      genre_ids: (3)[(28, 878, 27)],
      id: 615656,
      media_type: 'movie',
      original_language: 'en',
      original_title: 'Meg 2: The Trench',
      overview:
        'An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.',
      popularity: 4546.63,
      poster_path: '/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg',
      release_date: '2023-08-02',
      title: 'Meg 2: The Trench',
      video: false,
      vote_average: 6.949,
      vote_count: 915,
    },
  ],
};

const markUp = template(popularMoviesTransformed);

selectedFilmsContainer.innerHTML = markUp;
