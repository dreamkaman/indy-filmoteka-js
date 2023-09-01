import { selectedFilmsContainer } from './popularMovies';

import { showModal } from './modalWindow';

selectedFilmsContainer.addEventListener('click', (event) => {
	console.log(event.target.id);
	if (event.target.id) {
		showModal();
	}
});
