'use strict';

import {toggleClass} from '../../utils';

const headerElem = document.getElementById('headerWrapper');
const burgerElem = document.getElementById('menuBtn');
const liElems = document.querySelectorAll('body>header>div>nav>ul>li');

document.onscroll = scrollNavStyle;
document.onload = scrollNavStyle;

function scrollNavStyle() {
  if (window.scrollY > 51) {
    headerElem.classList.add('pageOnScroll');
  } else {
    headerElem.classList.remove('pageOnScroll');
  }
}


burgerElem.onclick = () => {
  onClickClassChange();

  liElems.forEach((li) => {
    li.onclick = () => {
      onClickClassChange();
    };
  });
};

function onClickClassChange() {
  toggleClass(burgerElem, 'change');
  toggleClass(document.getElementById('navigationList'), 'ulWrapper');
}