'use strict';

import {getCiteObj, getComment, getImageUrl} from './utils';
import {createText}                          from '../../utils';
import {SliderLogic}                         from './sliderLogic';

export class SliderControl {
  constructor(data) {
    this._SliderLogic = null;
    this.changeSlide = this.changeSlide.bind(this);
    this.loadData = this.loadData(data).bind(this);
  }

  loadData(data) {
    this._SliderLogic = new SliderLogic(data);
  };

  changeSlide(e) {
    if (e.target.dataset.slideid === undefined || null) {
      return;
    } else if (e.target.dataset.slideid !== this._SliderLogic.currentIndex) {
      this._SliderLogic.currentIndex = e.target.dataset.slideid;

      document.querySelector('.activeSlide').classList.remove('activeSlide');

      document.getElementById(`slide${e.target.dataset.slideid}`)
              .classList
              .add('activeSlide');
      document.querySelector('.sliderInfoContainer .activeInfo')
              .classList
              .remove('activeInfo');
      document.getElementById(`slideInfo${e.target.dataset.slideid}`)
              .classList
              .add('activeInfo');

      document.querySelector('.activeDot').classList.remove('activeDot');
      e.target.classList.add('activeDot');

      document.querySelector('.dots')
              .addEventListener('click', this.changeSlide);
    }
  };

  render() {
    const sliderWrapperElem = document.createElement('div');
    sliderWrapperElem.classList.add('sliderWrapper');
    sliderWrapperElem.appendChild(
        this.renderImageContainer(this._SliderLogic.slides));
    sliderWrapperElem.appendChild(
        this.renderInfoContainer(this._SliderLogic.slides));


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
    container.classList.add('slide');
    image.alt = 'photo';
    container.setAttribute('id', `slide${id}`);
    if (id === this._SliderLogic.currentIndex) {
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
    if (this._SliderLogic.currentIndex === index) {
      dot.classList.add('activeDot');
    }
    dot.setAttribute('data-slideid', index);
    dot.addEventListener('click', this.changeSlide);
    return dot;
  }

  renderInfo(slides, id) {
    const slideInfo = document.createElement('div');
    slideInfo.setAttribute('id', `slideInfo${id}`);
    slideInfo.classList.add('hidden');

    if (id === this._SliderLogic.currentIndex) {
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


}