'use strict';
import profilePicture from '../Picture';
import {createText}   from '../../utils';

export default function createEmployeeContent(employee) {
  const employeeInfo = document.createElement('div');
  employeeInfo.classList.add('growFixParent');

  employeeInfo.appendChild(createEmployeePicture(employee));
  employeeInfo.appendChild(createText('h4', employee.name));
  employeeInfo.appendChild(createText('h5', employee.position));
  employeeInfo.appendChild(createText('p', employee.profileInfo));

  return employeeInfo;
}

function createEmployeePicture({profilePicture: img}) {
  const picture = profilePicture('', img, 'profile picture',
                                 '../assets/images/user.png');

  const pictureWrapper = document.createElement('div');
  pictureWrapper.classList.add('profilePictureWrapper');
  pictureWrapper.appendChild(picture);

  return pictureWrapper;
}
