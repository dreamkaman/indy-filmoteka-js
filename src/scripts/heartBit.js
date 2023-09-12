const heart = document.querySelector('.page-footer__hart');

setInterval(() => {
	if (heart.classList.contains('heart_bit')) {
		heart.classList.remove('heart_bit');
	} else {
		heart.classList.add('heart_bit');
	}
}, 1000);
