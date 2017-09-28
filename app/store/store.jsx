import { createStore, applyMiddleware, combineReducers } from 'redux';

import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

import campuses from './Campuses';
import newCampus from './newCampus';
import students from './Students';
import newStudent from './newStudent'

const reducer = combineReducers({
  campuses,
  newCampus,
  students,
  newStudent
});

export default createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()))

export * from './Campuses';
export * from './newCampus';
export * from './Students';
export * from './newStudent'
export * from './changeCampus'

