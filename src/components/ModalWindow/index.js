'use strict';

const wrapperElem = document.getElementById('modalWrapper');
const imageElem = document.getElementById('imageSrc');
const source = document.getElementById('works');

wrapperElem.onclick = () => {
  styleSwitch();
};

source.onclick = function(event) {
  let target = event.target;
  setSrcAttr(target);
};

function styleSwitch() {
  wrapperElem.classList.toggle('overlayViewWrapperOpen');
}

function setSrcAttr(target) {
  imageElem.setAttribute('src', `${getSrcAttr(target)}`);
  styleSwitch();
}

function getSrcAttr(target) {
  //сделать обход childNodes на поиск элемента img
  // for..of ??
  return target.childNodes[3].getAttribute('src');
}

