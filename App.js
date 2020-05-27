import React, { Component } from 'react';
import CounterContainer from './src/screens/Counter';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './src/store/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/store/sagas/rootSaga';
import MovieContainer from './src/screens/Movie';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        {/* <CounterContainer /> */}
        <MovieContainer />

      </Provider>
    );
  }
}

sagaMiddleware.run(rootSaga);
