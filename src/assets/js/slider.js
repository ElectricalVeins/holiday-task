'use strict';
const sliderImage = document.getElementById('sliderImage');
const dots = document.getElementsByClassName('dot');
const sliderInfoMain = document.getElementById('sliderInfoMain');
const sliderInfoQuote = document.getElementById('sliderInfoQuote');


dots[0].onclick = () => {
  sliderImage.src = './assets/images/testimonial-1.jpg';  //сделать по смене класса и прикрутить анимацию
  dotStyleChanger();
  sliderInfoMain.innerText = '"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Aenean eu leo quam..."';
  sliderInfoQuote.innerText = 'SUSAN SIMS, INTERACTION DESIGNER AT XYZ';
};
dots[1].onclick = () => {
  sliderImage.src = './assets/images/testimonial-2.jpg';
  dotStyleChanger();
  sliderInfoMain.innerText = '"Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur..."';
  sliderInfoQuote.innerText = 'SUSAN SIMS, INTERACTION DESIGNER AT XYZ';

};

function dotStyleChanger() {
  dots[1].classList.toggle('activeDot');
  dots[1].classList.toggle('fade');
  dots[0].classList.toggle('activeDot');
  dots[0].classList.toggle('fade');
}

/*

 const imageSrc = [
 './assets/images/testimonial-1.jpg',
 './assets/images/testimonial-2.jpg'];

 class slider111 {
 constructor(imageSrc, currentSlide) {
 this.imageSrc = imageSrc;
 this.currentSlide = currentSlide;
 this.currentSlideIndex = 0;
 this.maxLength = 1;
 }

 get currentIndex() {
 return this.currentSlideIndex;
 }

 set currentIndex(value) {
 if (isNaN(value)) {
 throw new TypeError();
 }
 if (value < 0 || value > this.maxLength) {
 throw new RangeError();
 }
 this.currentSlideIndex = value;
 }

 getNextIndex(index, length) {
 if (index < 0 || index > length - 1) {
 throw new RangeError();
 }
 return (index + 1) % length;
 }

 goNext() {
 this.currentIndex = this.getNextIndex(this.currentIndex(), this.maxLength);
 }//currentSlideIndex

 goNextSlide = () => {

 const currentIndex = this.currentIndex;
 const nextIndex = this.getNextIndex(this.currentIndex(), this.maxLength);


 currentSlide.classList.toggle('activeSlide');
 nextSlide.classList.toggle('activeSlide');

 this.goNext();
 };
 }
 */

