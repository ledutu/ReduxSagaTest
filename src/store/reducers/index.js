import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import movieReducers from './movieReducers';

const allReducers = combineReducers({
    // counterReducer,
    movieReducers,
});

export default allReducers;