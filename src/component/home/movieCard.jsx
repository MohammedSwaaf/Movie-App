import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// this movie container who has all the movies came from server
class MovieCard extends Component {
    render() {
        // the varibel who maps on the array 
        const movie = this.props.movie
        return (
            <div className='contain col-md-4 mb-5'>
                <div className="card">
                    <div className="card-body ">
                        <img src={movie.Poster} className="card-img-top" alt="..." />
                        <h5 className=" card-title">{movie.Title} - {movie.Year}</h5>
                        <Link to={'/film/' + movie.imdbID} className="btn btn-dark">Detailes</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;