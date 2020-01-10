import { createImage } from '../../utils';

/**
 *
 * @param {(!Array<string>|!string)} className
 * @param {string} src
 * @param {string} alt
 * @param {string} backupSrc
 * @returns {HTMLImageElement}
 */
export default function (className, src, alt, backupSrc) {
  const img = createImage(src, backupSrc);

  if (Array.isArray(className)) {
    img.classList.add(...className);
  }else{
  img.setAttribute('class', className);
  }
  img.setAttribute('alt', alt);

  return img;
}