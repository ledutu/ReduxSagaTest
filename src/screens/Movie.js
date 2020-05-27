import ScreenContainer from './Movie.container';
import { connect } from 'react-redux';
import { fetMovieAction, addMovie } from '../store/actions';

class Movie extends ScreenContainer {
    state = {
        movieName: '',
        year: '',
    };

    // async componentDidMount() {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    //     const results = res.json();
    //     console.log(results)
    // }
};

const mapStateToProps = state => {
    return {
        movies: state.movieReducers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchMovies: () => {
            dispatch(fetMovieAction());
        },
        onAddMovie: newMovie => {
            dispatch(addMovie(newMovie))
        }
    }
}

const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(Movie);

export default MovieContainer;
