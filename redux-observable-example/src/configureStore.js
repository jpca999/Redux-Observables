import {createStore, combineReducers, applyMiddleware } from 'redux';

import { appReducer } from './Reducers/appReducer';

import { of } from 'rxjs';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
// epic just provide the stream of observables.

const epic1 = () => of({ type: "SET_NAME", payload: "Sally"});

export default function configureStore(){

  const rootEpic = combineEpics(epic1);

  const epicMiddleware = createEpicMiddleware();

  const rootReducer = combineReducers({
    app: appReducer
  })

  // since we need to initialzie this root epic.
  const store =  createStore(rootReducer, applyMiddleware(epicMiddleware));

    epicMiddleware.run(rootEpic);

    return store;
}