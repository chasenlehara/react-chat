import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          <h1 className="page-header text-center">
            <img src={logo} alt="DoneJS logo" style={{width: '100%'}} />
            <br />
            Chat
          </h1>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
