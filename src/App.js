import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './component/home/home';
import Film from './component/home/film';
import store from './redux/store';




function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path='/' component={Home} />
          <Route exact path='/film/:id' component={Film} />
        </div>
      </Router>
    </Provider>

  );
}

export default App;
