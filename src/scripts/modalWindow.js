const backDropDiv = document.querySelector('div.backdrop');

export const showModal = () => {
	backDropDiv.classList.remove('visually-hidden');
};

export const closeModal = () => {
	backDropDiv.classList.add('visually-hidden');
};

backDropDiv.addEventListener('click', (event) => {
	if (event.target === event.currentTarget) {
		closeModal();
	}
});
