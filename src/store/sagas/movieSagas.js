import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './api';
import { FETCH_MOVIE_SUCCESSED, FETCH_MOVIE_FAILED, FETCH_MOVIE } from '../actions/actionTypes';

function* fetchMovie() {
    try {
        const receiveMovie = yield Api.getMovieFromApi();
        yield put({ type: FETCH_MOVIE_SUCCESSED, receiveMovie })
    }
    catch (error) {
        yield put({ type: FETCH_MOVIE_FAILED, error });
    }
};

export function* watchFetchMovies() {
    yield takeLatest(FETCH_MOVIE, fetchMovie);
}