import React from 'react';
import firebase from 'firebase';
import styled from 'react-emotion';
import MainApp from './main';
import { Login, Register } from './authentication';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

var config = {
  apiKey: 'AIzaSyBFSZ9zG2LOLoILA2ennm4I7lKnQM6bL00',
  authDomain: 'cremacontacts.firebaseapp.com',
  databaseURL: 'https://cremacontacts.firebaseio.com',
  projectId: 'cremacontacts',
  storageBucket: 'cremacontacts.appspot.com',
  messagingSenderId: '94202641228',
};

firebase.initializeApp(config);

const AppContainer = styled('div')`
  text-align: center;

  @media only screen and (min-width: 1024px) {
    font-size: 18px;
  }

  @media only screen and (min-width: 1366px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const App = () => {
  return (
    <AppContainer className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={MainApp} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </AppContainer>
  );
};

export default App;
