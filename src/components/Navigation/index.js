
'use strict';


const headerElem = document.getElementById('headerWrapper');
const ulElem = document.getElementById('navigationList');
const liElem = document.querySelectorAll('body>header>nav>ul>li');

const downloadBttnElem = document.getElementById('downloadBttn');
const burgerButton = document.getElementById('menuBtn');

burgerButton.onclick = () => {
  burgerButtonStyleChange();
  buttonFunction();
};

//For the header onscroll style change
document.onscroll = eventListeners;
document.onload = eventListeners;

function eventListeners() {
  scrollNavStyle();
  downloadButtonAnimation();
}

function scrollNavStyle() {
  if (window.scrollY > 51) {
    headerElem.classList.add('pageOnScroll');
  } else {
    headerElem.classList.remove('pageOnScroll');
  }
}

//Button Animation
function burgerButtonStyleChange() {
  burgerButton.classList.toggle('change');
}

function extNavStyleToggler() {
  ulElem.classList.toggle('navigation');
  ulElem.classList.toggle('popUpNavigation');

}

function onclickNavigationToggle() {
  extNavStyleToggler();

  liElem.forEach((li) => {
    li.classList.toggle('popUpNavItem');
  });
}

function buttonFunction() {

  extNavStyleToggler();

  liElem.forEach((li) => {
    li.classList.toggle('popUpNavItem');
    li.onclick = () => {
      burgerButtonStyleChange();
      onclickNavigationToggle();
    };
  });
}

function downloadButtonAnimation() {
  if (window.scrollY > downloadBttnElem.offsetTop -
      document.documentElement.clientHeight / 2) {
    downloadBttnElem.classList.add('downloadButtonAnim');
  }
}


