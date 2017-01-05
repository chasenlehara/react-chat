import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from './components/home/home';
import Messages from './components/messages/messages';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <Router history={browserHistory}>
              <Route path="/" component={Home} />
              <Route path="chat" component={Messages} />
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
