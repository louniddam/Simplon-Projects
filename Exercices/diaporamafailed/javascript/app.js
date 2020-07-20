/*
slider rotatif
 */

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
let activeSlide = 0;

slider.addEventListener('animationstart', () => {
	setInterval(changeSlide, 2000);
});

function changeSlide() {
	slides[activeSlide].classList.remove('visible');
	
	activeSlide++;
	
	if(activeSlide >= slides.length) {
		activeSlide = 0;
	}
	
	slides[activeSlide].classList.add('visible');
}

/*
Carousel
*/

const slider2 = document.querySelector('.slider2');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

const addButton = document.querySelector('.add')

var sectionIndex = 0;

leftArrow.addEventListener('click', function() {
	sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
	slider2.style.transform = 'translate(' + sectionIndex * -25 + '%)';
});

rightArrow.addEventListener('click', function() {
	sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
	slider2.style.transform = 'translate(' + sectionIndex * -25 + '%)';
});

addButton.addEventListener('click', function(){

});