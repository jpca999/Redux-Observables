import {createStore, combineReducers } from 'redux';

import appReducer from './Reducers/appReducer.js';


export default function configureStore(){

  const rootReducer = combineReducers({
    app: appReducer
  })

 return createStore(appReducer);
}