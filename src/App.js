import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Home from './component/home/home';
import store from './redux/store'




function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>

  );
}

export default App;
