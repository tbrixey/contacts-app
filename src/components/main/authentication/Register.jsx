import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const RegisterButton = styled('button')`
  width: 5.5em;
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

const RegisterPage = styled('div')`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 26em;
  height: 16em;
  margin-top: -9em;
  margin-left: -13em;
  border: 1px solid #ccc;
  background-color: #f3f3f3;
`;

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
      passTwo: '',
    };
  }

  // Once user registers the auth state should change.
  // This ensures that they get redirected.
  componentDidMount() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        window.location.href = '/';
      }
    });
  }

  handleChange = e => {
    this.setState({[e.target.id]: e.target.value});
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const { email, pass, passTwo } = this.state;

    // check that passwords match. If they do then create the user.
    if (pass !== passTwo) {
      alert('passwords don\'t match');
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode) {
          alert(errorMessage);
        }
      });
    }
  }

  render() {
    return (
      <RegisterPage>
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
              value={this.state.email}
              onChange={this.handleChange}
              placeholder='Email Address'
            />
          </div>
          <div style={{marginBottom: '0.5em'}}>
            <TextField
              value={this.state.pass}
              onChange={this.handleChange}
              id='pass'
              type='password'
              placeholder='Password'
            />
          </div>
          <div style={{marginBottom: '0.5em'}}>
            <TextField
              value={this.state.passTwo}
              onChange={this.handleChange}
              id='passTwo'
              type='password'
              placeholder='Re-Type Password'
            />
          </div>

          <div>
            <RegisterButton type='submit' value='submit'  style={{marginRight: '0.2em'}}>Register</RegisterButton>
            <ClickDiv style={{marginTop: '0.5em'}}>
              Have an account? Click <ClickHere onClick={this.props.changeIsRegister}>here</ClickHere> to go back to sign in.
            </ClickDiv>
          </div>
        </form>
      </RegisterPage>
    );
  }

}

export default Register;

Register.propTypes = {
  changeIsRegister: PropTypes.func,
};
