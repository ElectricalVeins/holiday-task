'use strict';
fetch('./data/employees.json').then(response => response.json()).then(
  teamListCreator).catch(console.error);

function teamListCreator (array) {
  const teamContainer = document.getElementById('teamContainer');
  for (let item of array) {
    teamContainer.appendChild(EmployeeElemCreator(item));
  }
}

function EmployeeElemCreator (teamItem) {
  const employeeElem = document.createElement('div');
  employeeElem.classList.add('employee');

  employeeElem.appendChild(createEmployeeContent(teamItem));
  employeeElem.appendChild(linkListCreator(teamItem));

  return employeeElem;
}

function createEmployeeContent (teamItem) {
  const employeeInfo = document.createElement('div');
  employeeInfo.classList.add('growFixParent');
  employeeInfo.appendChild(createImageElem(teamItem));
  employeeInfo.appendChild(createEmployeeNameElem(teamItem));
  employeeInfo.appendChild(createEmployeePositionElem(teamItem));
  employeeInfo.appendChild(createEmployeeDescriptionElem(teamItem));

  return employeeInfo;
}

function createEmployeePositionElem ({ position }) {
  const employeeJob = document.createElement('h5');
  employeeJob.innerHTML = position || '';

  return employeeJob;
}

function createEmployeeDescriptionElem ({ profileInfo }) {
  const employeeDescription = document.createElement('p');
  employeeDescription.innerHTML = profileInfo || '';

  return employeeDescription;
}

function createEmployeeNameElem ({ name }) {
  const employeeName = document.createElement('h4');
  employeeName.innerHTML = name || '';

  return employeeName;
}

function createImageElem ({ profilePicture }) {
  const employeePhoto = new Image;
  employeePhoto.src = profilePicture;
  //проверка IMG!

  return employeePhoto;
}










//использовать MAP и URL
function linkListCreator ({ contacts }) {
  const employeeLinks = document.createElement('div');
  employeeLinks.classList.add('growFixChild');

  const linkList = document.createElement('ul');
  linkList.classList.add('shareLinks');
  for (let contact of contacts) {
    const liElement = document.createElement('li');
    const aElement = document.createElement('a');
    const iElement = document.createElement('i');
    iElement.classList.add('fab');
    switch (contact) {
      case 'facebook':
        iElement.classList.add('fa-facebook-f');
        aElement.setAttribute('href', 'https://facebook.com');
        break;
      case 'twitter':
        iElement.classList.add('fa-twitter');
        aElement.setAttribute('href', 'https://twitter.com');
        break;
      case 'linkedIn':
        iElement.classList.add('fa-linkedin-in');
        aElement.setAttribute('href', 'https://linkedin.com');
        break;
      case 'google+':
        iElement.classList.add('fa-google-plus-g');
        aElement.setAttribute('href', 'https://google.com');
        break;
      case 'dribble':
        iElement.classList.add('fa-dribbble');
        aElement.setAttribute('href', 'https://dribble.com');
        break;

    }
    aElement.appendChild(iElement);
    liElement.appendChild(aElement);
    linkList.appendChild(liElement);
  }
  employeeLinks.appendChild(linkList);

  return employeeLinks;
}
