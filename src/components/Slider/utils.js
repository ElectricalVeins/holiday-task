'use strict';

export const getImageUrl = (arr) => {
  let imgArr = [];
  for (let item of arr) {
    let img = Object.values(item)[0];
    imgArr.push(img);
  }
  return imgArr;

};

export const getComment = (arr) => {
  let infoArr = [];
  for (let item of arr) {
    let img = Object.values(item)[1];
    infoArr.push(img);
  }
  return infoArr;

};

export const getCiteObj = (arr) => {
  let citeArr = [];
  for (let item of arr) {
    let img = Object.values(item)[2];
    citeArr.push(img);
  }
  return citeArr;

};

