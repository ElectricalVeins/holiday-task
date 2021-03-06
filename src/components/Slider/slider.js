'use strict';

import {createText}                          from '../../utils';
import {getCiteObj, getComment, getImageUrl} from './utils.js';

export class Slider {

  constructor(slides, timeConstant) {
    if (slides.length) {
      this._slides = slides;
      this._currentIndex = 0;
      this.timeConstant = timeConstant;
      this._timeouting = null;
      this.changeSlideCheck = this.changeSlideCheck.bind(this);
    } else {
      throw new Error();
    }
  }

  get timeouting() {
    return this._timeouting;
  }

  set timeouting(value) {
    return this._timeouting = value;
  }

  get slides() {
    return this._slides;
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

  autoSwitch(timeConstant) {
    clearTimeout(this.timeouting);
    this.timeouting = setTimeout(() => {

      this.nextSlide();
      clearTimeout(this.timeouting);
      this.timeouting = setTimeout(() => {
        this.autoSwitch(timeConstant);
      }, timeConstant);
    }, timeConstant);
  }

  nextSlide() {
    this.currentIndex = this.getNextIndex(this.currentIndex,
                                          this.slides.length);
    const nextDot = document.querySelectorAll('.dot')[this.currentIndex];

    this.changeSlide(this.currentIndex, nextDot);
  }

  changeSlideCheck(event) {
    const slideID = event.target.dataset.slideid;

    if (slideID === undefined || null) {
      return;
    } else if (slideID !== this.currentIndex) {
      this.changeSlide(slideID, event.target);
    }
  }


  changeSlide(slideID, clickedDot) {
    clearTimeout(this.timeouting);
    this.currentIndex = slideID;

    const activeSlide = document.querySelector('.activeSlide');
    activeSlide.classList.remove('activeSlide');

    const newActiveSlide = document.getElementById(`slide${slideID}`);
    newActiveSlide.classList.add('activeSlide');

    const activeInfo = document.querySelector(
        '.sliderInfoContainer .activeInfo');
    activeInfo.classList.remove('activeInfo');

    const newActiveInfo = document.getElementById(`slideInfo${slideID}`);
    newActiveInfo.classList.add('activeInfo');

    const dot = document.querySelector('.activeDot');
    dot.classList.remove('activeDot');

    clickedDot.classList.add('activeDot');//newActiveDot
    this.autoSwitch(this.timeConstant);
  }

  //====================================RENDER METHODS==========================
  render() {
    const sliderWrapperElem = document.createElement('div');
    sliderWrapperElem.classList.add('sliderWrapper');
    sliderWrapperElem.appendChild(this.renderImageContainer(this.slides));
    sliderWrapperElem.appendChild(this.renderInfoContainer(this.slides));

    this.autoSwitch(this.timeConstant);

    return sliderWrapperElem;
  }

  renderImageContainer(slides) {
    const sliderImageContainer = document.createElement('div');
    sliderImageContainer.classList.add('sliderImageContainer');
    const imagesList = getImageUrl(slides);
    imagesList.forEach((el, index) => {
      sliderImageContainer.appendChild(this.renderSlidePhoto(el, index));
    });


    return sliderImageContainer;
  }

  renderSlidePhoto(imageSrc, id) {
    const container = document.createElement('div');
    const image = new Image();
    image.src = imageSrc;

    image.onerror = () => {
      image.src = '/assets/images/user2.png';
      image.classList.add('onErrorImageStyle');
    };

    container.classList.add('slide');
    image.alt = 'photo';
    container.setAttribute('id', `slide${id}`);
    if (id === this.currentIndex) {
      container.classList.add('activeSlide');
    }
    container.appendChild(image);
    return container;
  }

  renderInfoContainer(slides) {
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('sliderInfoContainer');
    slides.forEach((elem, index) => {
      infoContainer.appendChild(this.renderInfo(slides, index));
    });

    const dotContainer = document.createElement('div');
    dotContainer.classList.add('dots');
    infoContainer.appendChild(dotContainer);

    slides.forEach((elem, index) => {
      dotContainer.appendChild(this.renderDotButton(index));
    });

    return infoContainer;
  }

  renderDotButton(index) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (this.currentIndex === index) {
      dot.classList.add('activeDot');
    }
    dot.setAttribute('data-slideid', index);
    dot.addEventListener('click', this.changeSlideCheck);
    return dot;
  }

  renderInfo(slides, id) {
    const slideInfo = document.createElement('div');
    slideInfo.setAttribute('id', `slideInfo${id}`);
    slideInfo.classList.add('hidden');

    if (id === this.currentIndex) {
      slideInfo.classList.add('activeInfo');
    }

    slideInfo.appendChild(this.renderComment(slides, id));
    slideInfo.appendChild(this.renderCiteAuthor(slides, id));

    return slideInfo;
  }

  renderComment(slides, id) {
    const comment = getComment(slides)[id];

    const commentElem = document.createElement('div');
    commentElem.appendChild(this.renderMainInfo(comment));
    commentElem.classList.add('textMain', 'text');

    return commentElem;
  }

  renderCiteAuthor(slides, id) {
    const AuthorObj = getCiteObj(slides)[id];

    const citeAuthorElem = document.createElement('div');
    citeAuthorElem.appendChild(this.renderQuotedInfo(AuthorObj));
    citeAuthorElem.classList.add('textQuote', 'text');

    return citeAuthorElem;
  }

  renderMainInfo(content) {
    return createText('p', `${content}`);
  }

  renderQuotedInfo({name, surname, position}) {
    return createText('p', `${name} ${surname}, ${position}`);
  }

};
