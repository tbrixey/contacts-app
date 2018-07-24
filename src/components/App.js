import React from 'react';
import styled from 'react-emotion';
import MainApp from './main';
import 'antd/dist/antd.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Color scheme taken from here https://pigment.shapefactory.co/?a=343826&b=97C34D

const AppContainer = styled('div')`
  text-align: center;

  @media only screen and (min-width: 1024px) {
    font-size: 20px;
  }

  @media only screen and (min-width: 1366px) {
    font-size: 22px;
  }

  @media only screen and (max-width: 760px) {
    font-size: 14px;
  }
`;

const App = () => {
  return (
    <AppContainer style={{ height: '100vh', overflowX: 'hidden' }}>
      <Router>
        <Switch>
          <Route path="/" exact component={MainApp} />
        </Switch>
      </Router>
    </AppContainer>
  );
};

export default App;
