import { showModal } from './modalWindow';

const svgUser = document.querySelector('svg.user');
// const svgUseUser = document.querySelector('svg.user>use');
console.log(svgUser);

svgUser.addEventListener('click', () => {
	showModal('auth');
});
