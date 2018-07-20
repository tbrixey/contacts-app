import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBFSZ9zG2LOLoILA2ennm4I7lKnQM6bL00',
  authDomain: 'cremacontacts.firebaseapp.com',
  databaseURL: 'https://cremacontacts.firebaseio.com',
  storageBucket: 'cremacontacts.appspot.com',
};

class App extends Component {

  componentDidMount() {


    firebase.initializeApp(config.firebase);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
