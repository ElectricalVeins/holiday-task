'use strict';
import './assets/js/navigation.js';

import './assets/css/reset.css';
import './assets/scss/styles.scss';

//не забыть про flex 1


fetch('./data/employees.json').
    then(response => response.json()).
    then(console.log)// Вызывать функцию по созданию каротчек сотрудников
    .catch(console.error);












