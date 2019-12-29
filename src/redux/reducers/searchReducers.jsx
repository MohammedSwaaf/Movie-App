import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_SINGLE_MOVIE, LOADING, FETCH_MOVIES_ERROR } from '../actions/typeOfActions';

const initialState = {
    text: '',
    movies: [],
    loading: false,
    movie: [],
    error:null
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
                loading: false,
                error : null
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
        case FETCH_MOVIES_ERROR:
            return{
                ...state,
                error:action.payload,
                movies:[]

            }
        default: return state;

    }
}
export default searchReducer