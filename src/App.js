import React, { Component } from 'react';
import Home from './components/home/home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <Home />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
