import React, { Component } from 'react';
import SearchForm from './searchForm';
 
class Home extends Component {
    render() { 
        return (
            <div className='container'>
                <SearchForm/>
            </div>
        );
    }
}
 
export default Home;