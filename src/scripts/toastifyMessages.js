export function showSuccessMessage(message) {
	Toastify({
		text: message,
		gravity: 'top',
		position: 'right',
		duration: 5000,
		backgroundColor: '#00ff00',
		style: {
			color: '#000',
		},
	}).showToast();
}

export function showErrorMessage(message) {
	Toastify({
		text: message,
		gravity: 'top',
		position: 'right',
		duration: 5000,
		backgroundColor: '#ff0000',
		style: {
			color: '#fff',
		},
	}).showToast();
}
