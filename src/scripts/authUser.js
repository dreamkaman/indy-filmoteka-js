import { showModal } from './modalWindow';
import template from '../handlebars/loginRegistration.hbs';

const svgUser = document.querySelector('.user-icon');
const modalWindowForm = document.querySelector('form.modal-form');
const loginRegisterMarkUp = template();

svgUser.addEventListener('click', () => {
	showModal('auth');
	modalWindowForm.innerHTML = loginRegisterMarkUp;
});
