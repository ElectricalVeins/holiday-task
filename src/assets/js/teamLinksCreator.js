'use strict';

const linksMap = new Map()
    .set('facebook.com', 'fa-facebook-f')
    .set('twitter.com', 'fa-twitter')
    .set('linkedin.com', 'fa-linkedin-in')
    .set('instagram.com', 'fa-instagram')
    .set('dribbble.com', 'fa-dribbble');


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
    const liElement = document.createElement('li');
    const aElement = document.createElement('a');
    const iElement = document.createElement('i');

    iElement.classList.add('fab');
    iElement.classList.add(linksMap.get(getLinkHostname(contact)));

    aElement.appendChild(iElement);
    liElement.appendChild(aElement);
    linkList.appendChild(liElement);

  }

  return linkList;
}

function getLinkHostname(contact) {
  return new URL(`${contact}`).hostname;
}