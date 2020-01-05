'use strict';
fetch('./data/employees.json')
    .then(response => response.json())
    .then(teamListCreator)
    .catch(console.error);

function teamListCreator(array) {
  const teamContainer = document.getElementById('teamContainer');
  for (let i = 0; i < array.length; i++) {
    teamContainer.appendChild(EmployeeElemCreator(array[i]));
  }
}

function EmployeeElemCreator(teamItem) {
  const employeeElem = document.createElement('div');
  employeeElem.classList.add('employee');

  const employeeInfo = document.createElement('div');
  employeeInfo.classList.add('growFixParent');

  const employeePhoto = new Image;
  employeePhoto.src = teamItem.profilePicture;

  employeeInfo.appendChild(employeePhoto);
  const employeeName = document.createElement('h4');
  employeeName.innerHTML = teamItem.name;
  employeeInfo.appendChild(employeeName);

  const employeeJob = document.createElement('h5');
  employeeJob.innerHTML = teamItem.position;
  employeeInfo.appendChild(employeeJob);

  const employeeDescription = document.createElement('p');
  employeeDescription.innerHTML = teamItem.profileInfo;
  employeeInfo.appendChild(employeeDescription);

  employeeElem.appendChild(employeeInfo);

  const employeeLinks = document.createElement('div');
  employeeLinks.classList.add('growFixChild');

  employeeLinks.appendChild(linkListCreator(teamItem.contacts));
  employeeElem.appendChild(employeeLinks);
  console.log(employeeElem);
  return employeeElem;

}

function linkListCreator(contacts) {
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

  return linkList;
}