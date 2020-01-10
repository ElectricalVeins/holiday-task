'use strict';
import createEmployeeLinks from './teamLinksCreator';
import loadJson            from './utilities';

loadJson('./data/employees.json')
    .then(teamListCreator);

function teamListCreator(array) {
  const teamContainer = document.getElementById('teamContainer');
  for (let item of array) {
    teamContainer.appendChild(EmployeeElemCreator(item));
  }
}

function EmployeeElemCreator(teamItem) {
  const employeeElem = document.createElement('div');
  employeeElem.classList.add('employee');

  employeeElem.appendChild(createEmployeeContent(teamItem));
  employeeElem.appendChild(createEmployeeLinks(teamItem));

  return employeeElem;
}

function createEmployeeContent(teamItem) {
  const employeeInfo = document.createElement('div');
  employeeInfo.classList.add('growFixParent');
  employeeInfo.appendChild(createImageElem(teamItem));
  employeeInfo.appendChild(createEmployeeNameElem(teamItem));
  employeeInfo.appendChild(createEmployeePositionElem(teamItem));
  employeeInfo.appendChild(createEmployeeDescriptionElem(teamItem));

  return employeeInfo;
}

function createEmployeePositionElem({position}) {
  const employeeJob = document.createElement('h5');
  employeeJob.innerHTML = position || '';

  return employeeJob;
}

function createEmployeeDescriptionElem({profileInfo}) {
  const employeeDescription = document.createElement('p');
  employeeDescription.innerHTML = profileInfo || '';

  return employeeDescription;
}

function createEmployeeNameElem({name}) {
  const employeeName = document.createElement('h4');
  employeeName.innerHTML = name || '';

  return employeeName;
}

function createImageElem({profilePicture}) {
  const employeePhoto = new Image;
  employeePhoto.src = profilePicture;

  return employeePhoto;
}

/*
 createImageElem.onerror = imageErrorHandler();
 function imageErrorHandler() {
 const employeePhoto = new Image;
 employeePhoto.src = './assets/images/user.png';
 return employeePhoto;
 }*/
