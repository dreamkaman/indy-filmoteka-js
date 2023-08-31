import Pagination from 'tui-pagination';

import { getPopularMovies, allGenres } from '../API/api';

import { transformPopularMovies } from '../tools/transformMovies';

import template from '../handlebars/filmsGrid.hbs';

export const paginationOptions = {
  usageStatistics: false,
  totalItems: 500,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const container = document.getElementById('tui-pagination-container');

const selectedFilmsContainer = document.querySelector('div.selected-films-grid');

const pagination = new Pagination(container, paginationOptions);

pagination.on('afterMove', async function (eventData) {
  buildMovieSection(eventData);
});

export async function buildMovieSection(eventData) {
  const data = await getPopularMovies(eventData?.page ?? 1);
  if (data.total_pages > 500) {
    paginationOptions.totalItems = 1000;
  } else {
    paginationOptions.totalItems = 20 * data.total_pages;
  }

  console.log(data);

  const popularMovies = data.results;

  const popularMoviesTransformed = { films: transformPopularMovies(popularMovies, allGenres) };

  const markUp = template(popularMoviesTransformed);

  selectedFilmsContainer.innerHTML = markUp;
}
