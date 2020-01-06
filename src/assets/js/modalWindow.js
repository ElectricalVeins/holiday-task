'use strict';

const wrapperElem = document.getElementById('modalWrapper');
const imageElem = document.getElementById('imageSrc');
const source = document.getElementById('works');


wrapperElem.onclick = () => {
  togglerStyle();
};


source.onclick = function(event) {
  let target = event.target;
  toggleStyle(target);
};


function toggleStyle(target) {

  //этот ад будет переделан

  if (target.classList.contains('bgOne')) {
    imageElem.setAttribute('src', './assets/images/work-1.jpg');
  } else if (target.classList.contains('bgTwo')) {
    imageElem.setAttribute('src', './assets/images/work-2.jpg');
  } else if (target.classList.contains('bgThree')) {
    imageElem.setAttribute('src', './assets/images/work-3.jpg');
  } else if (target.classList.contains('bgFour')) {
    imageElem.setAttribute('src', './assets/images/work-4.jpg');
  } else if (target.classList.contains('bgFive')) {
    imageElem.setAttribute('src', './assets/images/work-5.jpg');
  } else if (target.classList.contains('bgSix')) {
    imageElem.setAttribute('src', './assets/images/work-6.jpg');
  } else if (target.classList.contains('bgSeven')) {
    imageElem.setAttribute('src', './assets/images/work-7.jpg');
  } else if (target.classList.contains('bgEight')) {
    imageElem.setAttribute('src', './assets/images/work-8.jpg');
  } else {
    togglerStyle();
  }
  togglerStyle();
}

function togglerStyle() {
  wrapperElem.classList.toggle('overlayViewWrapperOpen');
}