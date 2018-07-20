import React from 'react';
import firebase from 'firebase';
import styled, { css } from 'react-emotion';

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

const Header = styled('div')`
  background-color: #222;
  height: 5.75em;
  color: white;
`;

const MainHeader = styled('h1')`
  display: inline-block;
`;

const config = {
  apiKey: 'AIzaSyBFSZ9zG2LOLoILA2ennm4I7lKnQM6bL00',
  authDomain: 'cremacontacts.firebaseapp.com',
  databaseURL: 'https://cremacontacts.firebaseio.com',
  storageBucket: 'cremacontacts.appspot.com',
};

firebase.initializeApp(config.firebase);

const App = () => {
  return (
    <AppContainer className="App">
      <Header>
        <MainHeader>Contacts</MainHeader>
      </Header>
      <p className="App-intro">
        rest of the stuff is going to go here probably
      </p>
    </AppContainer>
  );
};

export default App;
