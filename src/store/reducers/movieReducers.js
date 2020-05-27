import { FETCH_MOVIE_SUCCESSED, FETCH_MOVIE_FAILED, ADD_MOVIE } from "../actions/actionTypes";

const movieReducers = (movies = [], action) => {
    switch (action.type) {
        case FETCH_MOVIE_SUCCESSED:
            return action.receiveMovie;
        case FETCH_MOVIE_FAILED:
            return [];
        case ADD_MOVIE:
            return [
                action.newMovie,
                ...movies
            ]
        default:
            return movies;
    }
};

export default movieReducers;