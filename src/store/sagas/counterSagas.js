import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import { INCREASE, DECREASE } from '../actions/actionTypes';

export function* sayHello(){
    console.log('Hello world!');
};

function* increase(){
    console.log("this is increase saga");
}

export function* watchIncrease(){
    yield takeEvery(INCREASE, increase);
}


function* decrease(){
    console.log("this is decrease saga");
}

export function* watchDecrease(){
    yield takeEvery(DECREASE, decrease);
}