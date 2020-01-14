'use strict';
import {loadJson}           from '../../../utils';
import EmployeeElemCreator  from '../EmployeeCard';
import {EMPLOYEES_JSON_SRC} from '../../../constants';

//?
const state = {
  isFetching: false, employees: [], error: null,
};

loadJson(EMPLOYEES_JSON_SRC)
    .then(teamListCreator);

function teamListCreator(array) {

  const teamContainer = document.getElementById('teamContainer');
  for (let item of array) {
    teamContainer.appendChild(EmployeeElemCreator(item));
  }
}

