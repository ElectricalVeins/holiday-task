'use strict';
import { loadJson } from '../../utils';

loadJson('/data/slider.json')
  .then(createSlider);


function createSlider (slides) {

  return;
}














const sliderImage = document.getElementById('sliderImage');
// const dots = document.getElementsByClassName('dot');
const dots = document.querySelectorAll('#slider>div>div>div');
const sliderInfoMain = document.getElementById('sliderInfoMain');
const sliderInfoQuote = document.getElementById('sliderInfoQuote');
let currentIndex = 0;
let previousIndex;

//adds eventListeners to the Child Nodes
for (let dot of dots) {
  dot.addEventListener('click', onClickDot);
}

setTimeout(() => {
  onClickDot();
  setTimeout(onClickDot, 5000);
}, 5000);


function onClickDot() {

  currentIndex = (currentIndex + 1) % imageSrc.length;
  previousIndex = (currentIndex - 1 + imageSrc.length) % imageSrc.length;
  dots[currentIndex].classList.add('activeDot');
  dots[previousIndex].classList.remove('activeDot');
  updateImage();
  updateInfo(currentIndex);

}

sliderImage.onload = () => {
  sliderImage.style.opacity = '1';
  sliderInfoMain.style.opacity = '1';
  sliderInfoQuote.style.opacity = '1';

};

function updateImage() {
  sliderImage.style.opacity = '0';
  setTimeout(() => {
    sliderImage.src = imageSrc[currentIndex];
  }, 250);
  sliderImage.onload = () => {
    sliderImage.style.opacity = '1';
  };

}

function updateInfo(currentIndex) {
  sliderInfoMain.style.opacity = '0';
  sliderInfoQuote.style.opacity = '0';
  setTimeout(() => {
    sliderInfoMain.innerText = infoMain[currentIndex];
    sliderInfoQuote.innerText = infoQuote[currentIndex];
  }, 250);
  sliderInfoMain.style.opacity = '1';
  sliderInfoQuote.style.opacity = '1';
}
