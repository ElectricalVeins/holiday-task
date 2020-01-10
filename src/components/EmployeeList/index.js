'use strict';
import {loadJson} from '../../utils';
import EmployeeElemCreator from '../EmployeeCard';

//?
const state={
  isFetching:false,
  employees:[],
  error:null,
};

loadJson('/data/employees.json')
  .then(teamListCreator);

function teamListCreator(array) {
  const teamContainer = document.getElementById('teamContainer');
  for (let item of array) {
    teamContainer.appendChild(EmployeeElemCreator(item));
  }
}
