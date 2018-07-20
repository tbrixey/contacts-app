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
  height: 5.75em;
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
    console.log(user);
    return (
      <Header>
        <h1>Contacts</h1>
        <Grid container spacing={24}>
          <MyGrid item xs={4}>
            <div>Contacts</div>
          </MyGrid>
          <MyGrid item xs={4}>
          </MyGrid>
          <MyGrid item xs={4}>
            {
              user.email
              ? <SignOutText onClick={signOut}>{user.email} (Sign Out)</SignOutText>
              : <MyLinks to='/login'><div>Login/Register</div></MyLinks>
            }
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
