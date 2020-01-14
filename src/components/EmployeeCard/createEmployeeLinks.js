'use strict';
import {LINKS_MAP} from '../../constants';


export default function createEmployeeLinks({contacts}) {
  const employeeLinks = document.createElement('div');
  employeeLinks.classList.add('growFixChild');
  employeeLinks.appendChild(createContactsLinkList(contacts));

  return employeeLinks;
}

function createContactsLinkList(contacts) {
  const linkList = document.createElement('ul');
  linkList.classList.add('shareLinks');

  for (let contact of contacts) {
    console.log(contact);
    const liElement = document.createElement('li');
    const aElement = document.createElement('a');
    const iElement = document.createElement('i');

    iElement.classList.add('fab');
    iElement.classList.add(LINKS_MAP.get(getLinkHostname(contact)));

    aElement.setAttribute('href', contact);

    aElement.appendChild(iElement);
    liElement.appendChild(aElement);
    linkList.appendChild(liElement);

  }

  return linkList;
}

function getLinkHostname(contact) {
  return new URL(`${contact}`).hostname;
}