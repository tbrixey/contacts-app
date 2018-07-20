import React from 'react';
import styled, { css } from 'react-emotion';
import Grid from '@material-ui/core/Grid';

const MyGrid = styled(Grid)`
  padding: 0 !important;
`;


const Header = styled('div')`
  background-color: #222;
  height: 5.75em;
  width: 100%;
  color: white;
  display: inline-block;
`;

const MainHeader = () => (
  <Header>
    <h1>Contacts</h1>
    <Grid container spacing={24}>
      <MyGrid item xs={4}>
        <div>Contacts</div>
      </MyGrid>
      <MyGrid item xs={4}>
      </MyGrid>
      <MyGrid item xs={4}>
        <div>Login/Register</div>
      </MyGrid>
    </Grid>
  </Header>
);

export default MainHeader;
