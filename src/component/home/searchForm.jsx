import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovies,fetchMovies } from '../../redux/actions/searchAction';
class SearchForm extends Component {
    // taken values 
    onChange = (e) => {
        this.props.searchMovies(e.target.value)
    }
    // submit function to get the movies
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.fetchMovies(this.props.text)
    }
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4 mb-3">
                            <i className='fa fa-search' /> Search for a movie or TV Series
                        </h1>
                    </div>
                    <form id='searchForm' onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" id="formGroupExampleInput"
                                placeholder="Search Movies, TV Series ..." onChange={this.onChange} />
                        </div>
                        <button type="button" className="btn btn-dark btn-bg mt-3">Search</button>

                    </form>
                </div>
            </div>
        );
    }
}
// to fet the redux state 
const mapStateToProps = state => ({
    text: state.search.text
})
// coonect react and redux togther
export default connect(mapStateToProps, {searchMovies,fetchMovies})(SearchForm);