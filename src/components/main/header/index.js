import React, { Component } from 'react';
import styled from 'react-emotion';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MyGrid = styled(Grid)`
  padding: 0 !important;
`;

const MyLinks = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Header = styled('div')`
  background-color: #222;
  height: 5em;
  width: 100%;
  color: white;
  display: inline-block;
`;

const SignOutText = styled('div')`
  cursor: pointer;
`;

// This had to be a statefull vs stateless so props would update correctly
class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    const { user, signOut } = this.props;
    return (
      <Header>
        <h1 style={{ margin: '0.2em 0 0.6em' }}>Contacts</h1>
        <Grid container spacing={24}>
          <MyGrid item xs={2}>
          </MyGrid>
          <MyGrid item xs={8}>
            {
              user.email
              ? <SignOutText onClick={signOut}>{user.email} (Sign Out)</SignOutText>
              : <MyLinks to='/login'><div>Login/Register</div></MyLinks>
            }
          </MyGrid>
          <MyGrid item xs={2}>
          </MyGrid>
        </Grid>
      </Header>
    );
  }
}

export default MainHeader;

MainHeader.propTypes = {
  user: PropTypes.object,
  signOut: PropTypes.func,
};
