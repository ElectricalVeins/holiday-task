'use strict';

const wrapperElem = document.getElementById('modalWrapper');
const imageElem = document.getElementById('imageSrc');
const source = document.getElementsByClassName('workItem');

wrapperElem.onclick = () => {
  styleSwitch();
};


for (let elem of source) {
  elem.onclick = function(event) {
    const src = event.currentTarget.querySelector('img').src;
    imageElem.setAttribute('src', src);
    styleSwitch();
  };
}

function styleSwitch() {
  wrapperElem.classList.toggle('overlayViewWrapperOpen');
}


