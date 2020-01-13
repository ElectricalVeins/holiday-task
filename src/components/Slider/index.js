'use strict';

import {SLIDER_JSON_SRC} from '../../Constants';
import {loadJson}        from '../../utils';
import {SliderControl}   from './sliderView';


loadJson(SLIDER_JSON_SRC)
    .then(f);

function f(data) {
  console.log(data);
  const viewerID = 'viewerID';
  const Viewer = new SliderControl(data);

  let ViewerElem = Viewer.render();
  ViewerElem.setAttribute('id', viewerID);
  document.getElementById('slider').appendChild(ViewerElem);

}

