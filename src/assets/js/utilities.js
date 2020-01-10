'use strict';

export default async function loadJson(url, options) {
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (e) {
    console.error(e);
  }
}