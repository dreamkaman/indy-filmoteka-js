import Pagination from 'tui-pagination';

import { buildMovieSection } from './popularMovies';

export const paginationOptions = {
	searchText: '',
	currentSetOfMovies: [],
	usageStatistics: false,
	totalItems: 500 * 20,
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

export const pagination = new Pagination(container, paginationOptions);

pagination.on('afterMove', (eventData) => {
	buildMovieSection(eventData);
});
