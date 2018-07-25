import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import firebase from 'firebase';

const SignInButton = styled('button')`
  width: 5.0em;
  height: 2.5em;
  background-color: #343826;
  color: white;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  border: none;
  text-align: center;
  display: inline-block;
  border-radius: 6px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  position: relative;

  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgba(85, 92, 62, 1);
  }
`;

const LoginPage = styled('div')`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 26em;
  height: 14em;
  margin-top: -8em;
  margin-left: -13em;
  border: 1px solid #ccc;
  background-color: #f3f3f3;
`;

const ClickDiv = styled('div')`
  @media only screen and (min-width: 1024px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1366px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 760px) {
    font-size: 12px;
  }
`;

const ClickHere = styled('span')`
  text-decoration: underline;
  color: #97C34D;
  cursor: pointer;
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
    };
  }

  handleChange = e => {
    this.setState({[e.target.id]: e.target.value});
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const { email, pass } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode) {
        alert(errorMessage);
      }
    });
  }

  resetPassword = () => {
    let email = prompt('Enter your email to send password reset link');
    firebase.auth().sendPasswordResetEmail(email).then(function() {
      // Email sent.
      alert('Email sent');
    }).catch(function(error) {
      // An error happened.
      alert(error);
    });

  }

  render() {
    return (
      <LoginPage>
        <form
          onSubmit={this.onFormSubmit}
          style={{
            position: 'relative',
            top: '2em',
          }}
        >
          <div style={{marginBottom: '0.5em'}}>
            <TextField
              autoFocus
              id='email'
              placeholder='Email Address'
              value={this.state.email}
              onChange={this.handleChange}
              style={{marginLeft: '0.5em'}}
            />
          </div>
          <div style={{marginBottom: '0.5em'}}>
            <TextField
              value={this.state.pass}
              onChange={this.handleChange}
              placeholder='Password'
              id='pass'
              type='password'
              style={{marginLeft: '0.5em'}}
            />
          </div>

          <div>
            <SignInButton type='submit' value='submit' style={{marginRight: '0.2em'}}>Sign in</SignInButton>
          </div>
          <ClickDiv style={{marginTop: '0.25em'}}>
            If you don&apos;t have an account click <ClickHere onClick={this.props.changeIsRegister}>here</ClickHere> to register
          </ClickDiv>
          <ClickDiv style={{marginTop: '0.25em'}}>
            <ClickHere onClick={this.resetPassword}>Forgot password?</ClickHere>
          </ClickDiv>
        </form>
      </LoginPage>
    );
  }

}

export default Login;

Login.propTypes = {
  changeIsRegister: PropTypes.func,
};
