'use strict';

export class SliderLogic {

  constructor(slides) {
    if (slides.length) {
      this._slides = slides;
      this._currentIndex = 0;
    } else {
      throw new Error();
    }
  }

  get slides() {
    return this._slides;
  }

  get nextIndex() {
    return this.getNextIndex(this.currentIndex, this.slides.length);
  }

  get currentIndex() {
    return this._currentIndex;
  }

  set currentIndex(value) {
    this._currentIndex = value;
  }

  getNextIndex(index, length) {
    return (index + 1) % length;
  }

}