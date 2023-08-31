const HOME_PATH = '/index.html';
const LIBRARY_PATH = '/library.html';

const menu = document.querySelectorAll('li.page-header__menu-item');

console.log(menu[0].classList.remove('active-menu'));

const location = document.location;

switch (location?.pathname) {
  case HOME_PATH:
    menu[1].classList.remove('active-menu');
    menu[0].classList.add('active-menu');
    break;

  case LIBRARY_PATH:
    menu[0].classList.remove('active-menu');
    menu[1].classList.add('active-menu');
    break;

  default:
    menu[1].classList.remove('active-menu');
    menu[0].classList.add('active-menu');
    break;
}
