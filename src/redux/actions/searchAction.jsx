import { SEARCH_MOVIE, FETCH_MOVIES } from './typeOfActions';
import axios from 'axios';
import {APIKey} from '../../apiKey'
// Action to get the value from the user
export const searchMovies = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
}
// Action to fetch movies from the server
export const fetchMovies = text => dispatch => {
    axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then(res =>dispatch({
        type:FETCH_MOVIES,
        payload: res.data.Search
    }))
    .catch(err => console.log(err))
}