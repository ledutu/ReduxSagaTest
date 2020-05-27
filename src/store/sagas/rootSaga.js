import { delay } from 'redux-saga';
import { all, call } from 'redux-saga/effects';

import {sayHello, watchIncrease, watchDecrease} from './counterSagas';
import { watchFetchMovies } from './movieSagas';

export default function* rootSaga(){
    // yield all([
    //     // sayHello,
    //     // watchIncrease(),
    //     // watchDecrease(),
    // ])
    yield call(watchFetchMovies);
}