import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './movieCard';

// This is movies class who check the movies state has items or empty
class Movies extends Component {
    render() {
        const movies  = this.props.movies;
        let content = movies.length > 0 ? movies.map(
            (movie, index) => <MovieCard key={index} movie={movie} />) : null;
        return (
            <div className='row'>
                {content}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    movies: state.search.movies
})
export default connect(mapStateToProps)(Movies);