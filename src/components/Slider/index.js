'use strict';

import {loadJson}                        from '../../utils';
import {SLIDER_JSON_SRC, SLIDER_TIMEOUT} from '../../constants';
import {Slider}                          from './slider';

appendSlider(document.getElementById('slider'), SLIDER_JSON_SRC)
    .then();

async function appendSlider(slideContainer, json) {
  try {
    const slides = await loadJson(json);
    const slider = new Slider(slides, SLIDER_TIMEOUT).render();

    slideContainer.appendChild(slider);

  } catch (e) {
    throw e;
  }
}

