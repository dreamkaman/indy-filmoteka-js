import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from './firebase';

import { showModal, closeModal } from './modalWindow';
import templateLoginForm from '../handlebars/loginForm.hbs';
import templateRegistrationForm from '../handlebars/registrationForm.hbs';
import { showErrorMessage, showSuccessMessage } from './toastifyMessages';

const svgUserIcon = document.querySelector('.user-icon');
const modalWindowForm = document.querySelector('form.modal-form');
const loginFormMarkUp = templateLoginForm();
const registrationFormMarkUp = templateRegistrationForm();

modalWindowForm.addEventListener('submit', async (event) => {
	event.preventDefault();
	const formData = new FormData(event.currentTarget);
	const email = formData.get('email');
	const password = formData.get('password');
	const repeatedPassword = formData.get('repeatedPassword');

	if (!repeatedPassword) {
		//Login logic
		try {
			const response = await signInWithEmailAndPassword(auth, email, password);
			showSuccessMessage('User logged in successfully!');
			closeModal();
		} catch (error) {
			showErrorMessage(error.message);
		}

		return;
	}

	if (repeatedPassword && password !== repeatedPassword) {
		showErrorMessage('Passwords are different!');
		return;
	}

	//Registration logic
	try {
		const response = await createUserWithEmailAndPassword(auth, email, password);
		showSuccessMessage('User registered successfully!');
		modalWindowForm.reset();
	} catch (error) {
		showErrorMessage(error.message);
	}
});

svgUserIcon.addEventListener('click', () => {
	modalWindowForm.innerHTML = loginFormMarkUp;
	showModal();
	addEventListeners();
});

function addEventListeners() {
	const button = document.querySelector('input[type="button"]');

	button.addEventListener('click', (event) => {
		switch (event.target.value) {
			case 'Login':
				modalWindowForm.innerHTML = loginFormMarkUp;
				addEventListeners();
				break;

			case 'Register':
				modalWindowForm.innerHTML = registrationFormMarkUp;
				addEventListeners();
				break;
		}
	});
}
