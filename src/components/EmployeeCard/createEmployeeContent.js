'use strict';
import profilePicture from '../Picture';

export default function createEmployeeContent (employee) {
  const employeeInfo = document.createElement('div');
  employeeInfo.classList.add('growFixParent');

  employeeInfo.appendChild(createEmployeePicture(employee));
  employeeInfo.appendChild(createEmployeeNameElem(employee));
  employeeInfo.appendChild(createEmployeePositionElem(employee));
  employeeInfo.appendChild(createEmployeeDescriptionElem(employee));

  return employeeInfo;
}

function createEmployeePicture ({ profilePicture: profileImg }) {
  const picture = profilePicture('', profileImg, 'profile picture',
                                 '../assets/images/user.png');

 const pictureWrapper = document.createElement('div');
  pictureWrapper.classList.add('profilePictureWrapper');
  pictureWrapper.appendChild(picture);

  return pictureWrapper;
}

function createEmployeeNameElem ({ name }) {
  const employeeName = document.createElement('h4');
  employeeName.innerHTML = name || '';

  return employeeName;
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

