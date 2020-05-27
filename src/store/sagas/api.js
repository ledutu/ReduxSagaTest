import axios from 'axios';
const urlGetMovies = 'https://jsonplaceholder.typicode.com/posts';

function* getMovieFromApi(){
   const response = yield axios.get(urlGetMovies);
   const movies = yield response.status === 200? response.data: [];
   return movies;
};

export const Api = {
    getMovieFromApi
};
