import './assets/css/reset.css';
import './assets/scss/styles.scss';

//не забыть про flex 1

const scrollButton = document.querySelectorAll('li');
scrollButton.onclick = smoothScroll();

//For the header onscroll style change
document.onscroll = () => {
  const headerElem = document.getElementById('headerWrapper');
  if (window.scrollY > 51) {
    headerElem.classList.add('pageOnScroll');
  } else {
    headerElem.classList.remove('pageOnScroll');
  }
};

//For the navigation smooth scrolling
function smoothScroll() {
  const anchors = document.querySelectorAll('a[href*="#"]');
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
const burgerButton = document.getElementById('menuBtn');
burgerButton.onclick = () => {
  burgerButton.classList.toggle('change');
  buttonFunction();
};
const navElem = document.createElement('div');
const ulElem = document.getElementById('navigationList');
const liElem = document.querySelectorAll('body>header>nav>ul>li');

function wrapperStyleFunction() {
  navElem.classList.toggle('popUpNavigationWrapper');
  ulElem.classList.toggle('navigation');
  ulElem.classList.toggle('popUpNavigation');
  liElem.forEach((li) => {
    li.classList.toggle('popUpNavItem');
  });

}


function buttonFunction() {
  liElem.forEach((li) => {
    ulElem.appendChild(li);
  });
  liElem.onclick = wrapperStyleFunction();
  navElem.appendChild(ulElem);
  document.body.appendChild(navElem);

  return navElem;
}


fetch('./data/employees.json').
    then(response => response.json()).
    then(console.log)// Вызывать функцию по созданию каротчек сотрудников
    .catch(console.error);












