import React from 'react';
import styled from 'react-emotion';
import MainApp from './main';
import { Login, Register } from './authentication';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
