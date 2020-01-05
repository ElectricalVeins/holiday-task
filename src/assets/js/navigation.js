'use strict';

const anchors = document.querySelectorAll('a[href*="#"]');
const burgerButton = document.getElementById('menuBtn');
const headerElem = document.getElementById('headerWrapper');
const ulElem = document.getElementById('navigationList');
const liElem = document.querySelectorAll('body>header>nav>ul>li');
const scrollButton = document.querySelectorAll('li');

burgerButton.onclick = () => {
  burgerButtonStyleChange();
  buttonFunction();
};

scrollButton.onclick = smoothScroll();

//For the header onscroll style change
document.onscroll = () => {

  if (window.scrollY > 51) {
    headerElem.classList.add('pageOnScroll');
  } else {
    headerElem.classList.remove('pageOnScroll');
  }
};

//For the navigation smooth scrolling
function smoothScroll() {

  for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const blockID = anchor.getAttribute('href').substr(1);
      document.getElementById(blockID).scrollIntoView({
                                                        behavior: 'smooth',
                                                        block: 'start',
                                                      });
    });
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