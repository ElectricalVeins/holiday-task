'use strict';

export const getImageUrl = (arr) => {
  let imgArr = [];
  for (let item of arr) {
    let img = item.imageUrl;
    imgArr.push(img);
  }
  return imgArr;

};

export const getComment = (arr) => {
  let infoArr = [];
  for (let item of arr) {
    let comment = item.comment;
    infoArr.push(comment);
  }
  return infoArr;

};

export const getCiteObj = (arr) => {
  let citeArr = [];
  for (let item of arr) {
    let citeObj = item.author;
    citeArr.push(citeObj);
  }
  return citeArr;

};

