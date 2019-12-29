import { SEARCH_MOVIE, FETCH_MOVIES,FETCH_SINGLE_MOVIE, LOADING } from './typeOfActions';
import axios from 'axios';
import { APIKey } from '../../apiKey'
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
        .then(res => dispatch({
            type: FETCH_MOVIES,
            payload: res.data.Search
        }))
        .catch(err => console.log(err))
}
export const fetchSingleMovie = id => dispatch => {
    axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
        .then(res => dispatch({
            type: FETCH_SINGLE_MOVIE,
            payload: res.data
        }))
        .catch(err =>console.log(err))
}
export const setLoading =()=>{
    return{
        type: LOADING
    }
}