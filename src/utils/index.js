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
    console.error(e);
    throw e;
  }
};

//загрузка с картинками
/**
 *
 * @param {string} src
 * @param {string} backupSrc
 * @returns {HTMLImageElement}
 */
export const createImage = (src, backupSrc) => {
  const img = new Image();
  img.src = src;

  img.onerror = () => { //можно вынести отдельно функцию
    img.src = backupSrc;
  };

  return img;
};


//в месте вызова
const myImage = createImage('sdf', 'user_icon');
myImage.classList.add('class')
myImage.setAttribute('alt','value')