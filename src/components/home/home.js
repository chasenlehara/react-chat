import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../../logo.svg';
import './home.css';

class Home extends Component {
  render() {
    return (
      <chat-home>
        <h1 className="page-header text-center">
          <img src={logo} alt="DoneJS logo" style={{width: '100%'}} />
          <br />Chat
        </h1>

        <Link to="/chat" className="btn btn-primary btn-block btn-lg">
          Start chat
        </Link>
      </chat-home>
    );
  }
}

export default Home;
