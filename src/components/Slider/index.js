'use strict';

import {createText, loadJson}                from '../../utils';
import {getCiteObj, getComment, getImageUrl} from './utils.js';
import {SLIDER_JSON_SRC}                     from '../../Constants';

appendSlider(document.getElementById('slider'), SLIDER_JSON_SRC);

async function appendSlider(slideContainer, json) {
  try {
    const slides = await loadJson(json);
    const slider = new Slider(slides).render();
    slideContainer.appendChild(slider);

  } catch (e) {
    console.error(e);
  }
}


//refactor needed
export class Slider {

  constructor(slides) {
    if (slides.length) {
      this._slides = slides;
      this._currentIndex = 0;
      this.changeSlide = this.changeSlide.bind(this);
      this.autoSwitch = this.autoSwitch.bind(this);
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

  autoSwitch() {
    setTimeout(this.changeSlide(this.nextIndex()), 1000);

  }

  changeSlide(e) {
    if (e.target.dataset.slideid === undefined || null) {
      return;
    } else if (e.target.dataset.slideid !== this.currentIndex) {
      this.currentIndex = e.target.dataset.slideid;

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
    sliderWrapperElem.appendChild(this.renderImageContainer(this.slides));
    sliderWrapperElem.appendChild(this.renderInfoContainer(this.slides));


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
    dot.addEventListener('click', this.changeSlide);
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

}
