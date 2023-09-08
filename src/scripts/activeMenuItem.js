const HOME_PATH = '/index.html';
const LIBRARY_PATH = '/library.html';

const menu = document.querySelectorAll('li.page-header__menu-item');
const headerBtnWrapper = document.querySelector('div.header-buttons-wrapper');
const formSearch = document.querySelector('form.film-search');
const pageHeader = document.querySelector('header');

const location = document.location;

switch (location?.pathname) {
	case HOME_PATH:
		menu[1].classList.remove('active-menu');
		menu[0].classList.add('active-menu');
		headerBtnWrapper.classList.add('visually-hidden');
		formSearch.classList.remove('visually-hidden');
		pageHeader.classList.remove('header-library');
		break;

	case LIBRARY_PATH:
		menu[0].classList.remove('active-menu');
		menu[1].classList.add('active-menu');
		headerBtnWrapper.classList.remove('visually-hidden');
		formSearch.classList.add('visually-hidden');
		pageHeader.classList.add('header-library');
		break;

	default:
		menu[1].classList.remove('active-menu');
		menu[0].classList.add('active-menu');
		headerBtnWrapper.classList.add('visually-hidden');
		formSearch.classList.remove('visually-hidden');
		break;
}
