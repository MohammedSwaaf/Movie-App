import React, { Component } from 'react';
// this movie container who has all the movies came from server
class MovieCard extends Component {
    render() {
        // the varibel who maps on the array 
        const movie = this.props.movie
        return (
            <div className='contain col-md-4'>
                <div className="card">
                    <div className="card-body ">
                        <img src={movie.Poster} className="card-img-top" alt="..." />
                        <h5 className=" card-title">{movie.Title} - {movie.Year}</h5>
                        <a href="#" className="btn btn-primary">Detailes</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;