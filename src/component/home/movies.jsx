import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './movieCard';

// This is movies class who check the movies state has items or empty
class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            internet: ''
        }
    }
    render() {
        const { movies } = this.props;
        let content = movies.Response === 'True' ? movies.Search.map(
            (movie, index) => <MovieCard key={index} movie={movie} />) :
            <p className='lead text-center'>{movies.Error}</p>;
        
        // movies.length === 0 && movies.Error.length === 0 ? alert(`hi`) : null;
        return (
            <div className='row'>
                {content}

            </div>
        );
    }
}
const mapStateToProps = state => ({
    movies: state.search.movies,
})
export default connect(mapStateToProps)(Movies);