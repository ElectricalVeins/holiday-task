'use strict';

import {toggleClass} from '../../utils';

const headerElem = document.getElementById('headerWrapper');
const burgerElem = document.getElementById('menuBtn');
const liElems = document.querySelectorAll('body>header>div>nav>ul>li');

document.onscroll = scrollNavStyle;
document.onload = scrollNavStyle;

burgerElem.onclick = () => {
  onClickClassChange();

  liElems.forEach((li) => {
    li.onclick = () => {
      onClickClassChange();
    };
  });
};

function scrollNavStyle() {
  if (window.scrollY > 40) {
    headerElem.classList.add('pageOnScroll');
  } else {
    headerElem.classList.remove('pageOnScroll');
  }
}


function onClickClassChange() {
  toggleClass(burgerElem, 'change');
  toggleClass(document.getElementById('navigationList'), 'ulWrapper');
}