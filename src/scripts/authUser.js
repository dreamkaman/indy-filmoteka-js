import { showModal } from './modalWindow';

const svgUser = document.querySelector('.user-icon');

svgUser.addEventListener('click', () => showModal('auth'));
