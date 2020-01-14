'use strict';

/**
 *
 * @param {string} url
 * @param options
 * @returns {Promise<any>}
 */
export const loadJson = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (e) {
    throw e;
  }
};

/**
 *
 * @param {string} src
 * @param {string} backupSrc
 * @returns {HTMLImageElement}
 */
export const createImage = (src, backupSrc) => {
  const img = new Image();
  img.src = src;

  img.onerror = () => {
    img.src = backupSrc;
  };

  return img;
};

/**
 *
 * @param {string} tagName
 * @param {string} content
 * @returns {HTMLElement}
 */
export const createText = (tagName, content) => {
  const textField = document.createElement(tagName);
  textField.innerHTML = content || '';

  return textField;
};

/**
 *
 * @param {Element}element
 * @param {string}className
 */
export const toggleClass = (element, className) => {
  element.classList.toggle(className);
};

