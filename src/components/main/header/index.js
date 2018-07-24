import React, { Component } from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const SignIn = styled('div')`
  text-decoration: none;
  color: #343826;
`;

const Header = styled('div')`
  background-color: #97C34D;
  height: 5em;
  width: 100%;
  color: #343826;
  display: inline-block;
`;

const SignOutText = styled('div')`
  cursor: pointer;
  color: #343826;
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
        <h1 style={{ margin: '0.2em 0 0' }}>Contacts</h1>
        <div>
          <div>
            {
              user.email
              ? <SignOutText onClick={signOut}>{user.email} (Sign Out)</SignOutText>
              : <SignIn>Please Sign In or Register to continue</SignIn>
            }
          </div>
        </div>
      </Header>
    );
  }
}

export default MainHeader;

MainHeader.propTypes = {
  user: PropTypes.object,
  signOut: PropTypes.func,
};
