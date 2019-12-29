import React, { Component } from 'react';
import { connect } from 'react-redux'
import SearchForm from './searchForm';
import Spinner from './spinner';
import Movies from './movies';

class Home extends Component {
    render() {
        const { loading } = this.props;
        return (
            <div className='container'>
                <SearchForm />
                {loading ? <Spinner /> : <Movies />}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    loading: state.search.loading
})
export default connect(mapStateToProps)(Home);