"use strict"

const burgerBTN = document.querySelector('.header__burger');
const closeBTN = document.querySelector('.header__close');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.modal__overlay');
const header = document.querySelector('.header');
const headerNav = document.querySelector('.header__nav');

function burgerOpen() {
	modal.classList.add('active');
	headerNav.classList.add('active');
	overlay.appendChild(headerNav);
	burgerBTN.classList.remove('active');
	closeBTN.classList.add('active');
	document.body.style.overflow = 'hidden';
}
function burgerClose() {
	modal.classList.remove('active');
	headerNav.classList.remove('active');
	header.appendChild(headerNav)
	burgerBTN.classList.add('active');
	closeBTN.classList.remove('active');
	document.body.style.overflow = '';
}

burgerBTN.addEventListener('click', function() {
	burgerOpen();
});
closeBTN.addEventListener('click', function() {
	burgerClose();
});

window.addEventListener('resize', function() {
	if (window.matchMedia('screen and (min-width: 562px)').matches) {
		burgerClose();
		console.log('Yes');
	}
});