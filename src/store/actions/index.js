import { INCREASE, DECREASE, ADD_MOVIE, FETCH_MOVIE, FETCH_MOVIE_SUCCESSED, FETCH_MOVIE_FAILED } from './actionTypes';

export const increaseAction = step => {
    return {
        type: INCREASE,
        step,
    }
};

export const decreaseAction = step => {
    return {
        type: DECREASE,
        step,
    }
};

export const fetMovieAction = sort => {
    return {
        type: FETCH_MOVIE,
        sort,
    }
};

export const addMovie = newMovie => {
    return {
        type: ADD_MOVIE,
        newMovie,
    }
};

export const fetchSuccessAction = receiveMovie => {
    return {
        type: FETCH_MOVIE_SUCCESSED,
        receiveMovie,
    }
};

export const fetFailedAction = error => {
    return {
        type: FETCH_MOVIE_FAILED,
        error,
    }
}
