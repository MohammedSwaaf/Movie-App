import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_SINGLE_MOVIE, LOADING } from '../actions/typeOfActions';

const initialState = {
    text: '',
    movies: [],
    loading: false,
    movie: []
}
const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false
            }
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false
            }
        case FETCH_SINGLE_MOVIE:
            return {
                ...state,
                movie: action.payload,
                loading: false
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        default: return state;

    }
}
export default searchReducer