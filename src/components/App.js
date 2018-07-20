import React from 'react';
import firebase from 'firebase';
import styled, { css } from 'react-emotion';
import MainHeader from './header';
import ContactList from './contactlist';

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

const config = {
  apiKey: 'AIzaSyBFSZ9zG2LOLoILA2ennm4I7lKnQM6bL00',
  authDomain: 'cremacontacts.firebaseapp.com',
  databaseURL: 'https://cremacontacts.firebaseio.com',
  storageBucket: 'cremacontacts.appspot.com',
};

firebase.initializeApp(config);

const App = () => {
  return (
    <AppContainer className="App">
      <MainHeader />
      <ContactList />
    </AppContainer>
  );
};

export default App;
