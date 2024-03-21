import { inputSearch } from './searchMovie';
import { getMovieByName } from '../API/api';

let controller = new AbortController();

const inputCb = (e) => {
	if (timeoutId) {
		clearTimeout(timeoutId);
	}

	timeoutId = setTimeout(() => {
		if (e.target.value === searchValue) {
			return;
		}
		controller.abort();
		controller = new AbortController();

		searchValue = e.target.value;

		getMovieByName(searchValue);
	});
};
