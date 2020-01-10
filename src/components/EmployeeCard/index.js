'use strict';
import createEmployeeLinks from './createEmployeeLinks.js';
import createEmployeeContent from './createEmployeeContent.js';

export default function employeeElemCreator (employee) {
  const employeeElem = document.createElement('div');
  employeeElem.classList.add('employee');

  employeeElem.appendChild(createEmployeeContent(employee));
  employeeElem.appendChild(createEmployeeLinks(employee));

  return employeeElem;
}

