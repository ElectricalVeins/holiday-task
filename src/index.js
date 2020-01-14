'use strict';
import './assets/css/reset.css';
import './assets/scss/styles.scss';

import './components/DownloadButton';
import './components/Employees/EmployeesList';
import './components/Slider';
import './components/ModalWindow';
import './components/Navigation';

document.getElementById(
    'banner').style.backgroundImage = 'url(./assets/images/banner.jpg)';
document.getElementById(
    'modalWindowCloseButton').style.backgroundImage = 'url(./assets/images/fancybox_sprite.png)';