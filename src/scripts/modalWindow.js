const backDropDiv = document.querySelector('div.backdrop');
const closeBtnModal = document.querySelector('svg.modal__close-button');

export const showModal = () => {
	backDropDiv.classList.remove('visually-hidden');
	document.body.style.overflow = 'hidden';
};

export const closeModal = () => {
	backDropDiv.classList.add('visually-hidden');
	document.body.style.overflow = 'auto';
};

backDropDiv.addEventListener('click', (event) => {
	if (event.target === event.currentTarget) {
		closeModal();
	}
});

closeBtnModal.addEventListener('click', () => {
	closeModal();
});
