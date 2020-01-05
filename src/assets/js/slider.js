'use strict';
const sliderImage = document.getElementById('sliderImage');
const dots = document.getElementsByClassName('dot');
const sliderInfoMain = document.getElementById('sliderInfoMain');
const sliderInfoQuote = document.getElementById('sliderInfoQuote');


dots[0].onclick = () => {
  sliderImage.src = './assets/images/testimonial-1.jpg';  //сделать по смене класса и прикрутить анимацию
  dots[0].classList.add('activeDot');
  dots[0].classList.add('fade');
  dots[1].classList.remove('activeDot');
  dots[1].classList.remove('fade');
  sliderInfoMain.innerText = '"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Aenean eu leo quam..."';
  sliderInfoQuote.innerText = 'SUSAN SIMS, INTERACTION DESIGNER AT XYZ';
};
dots[1].onclick = () => {
  sliderImage.src = './assets/images/testimonial-2.jpg';
  dots[1].classList.add('activeDot');
  dots[1].classList.add('fade');
  dots[0].classList.remove('activeDot');
  dots[0].classList.remove('fade');
  sliderInfoMain.innerText = '"Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur..."';
  sliderInfoQuote.innerText = 'SUSAN SIMS, INTERACTION DESIGNER AT XYZ';

};
