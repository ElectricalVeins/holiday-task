'use strict';
import profilePicture     from '../../Picture';
import {createText}       from '../../../utils';
import {BACKUP_IMAGE_SRC} from '../../../constants';

export default function createEmployeeContent(employee) {
  const employeeInfo = document.createElement('div');
  employeeInfo.classList.add('growFixParent');

  employeeInfo.appendChild(createEmployeePicture(employee));
  employeeInfo.appendChild(createName(employee));
  employeeInfo.appendChild(createText('h5', employee.position));
  employeeInfo.appendChild(createText('p', employee.profileInfo));


  return employeeInfo;
}

function createEmployeePicture({profilePicture: img}) {
  const picture = profilePicture('', img, 'profile picture', BACKUP_IMAGE_SRC);

  const pictureWrapper = document.createElement('div');
  pictureWrapper.classList.add('profilePictureWrapper');
  pictureWrapper.appendChild(picture);

  return pictureWrapper;
}

function createName({name}) {
  const nameField = document.createElement('h4');
  nameField.innerHTML = name || '';
  nameField.setAttribute('title', `${name}`);

  return nameField;
}