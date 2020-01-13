'use strict';

//add download button section animation
addEventListener('load', () => {
  if (window.scrollY > document.getElementById('downloadBttn').offsetTop -
      document.documentElement.clientHeight / 2) {
    document.getElementById('downloadBttn').classList.add('downloadButtonAnim');
  }
});
