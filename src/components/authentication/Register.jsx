import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase';
import styled from 'react-emotion';

const RegisterPage = styled('div')`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 26em;
  height: 12em;
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
            <label>Email Address:
            <TextField
              autoFocus
              id='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
            </label>
          </div>
          <div style={{marginBottom: '0.5em'}}>
            <label>Password:
            <TextField
              value={this.state.pass}
              onChange={this.handleChange}
              id='pass'
              type='password'
            />
            </label>
          </div>
          <div style={{marginBottom: '0.5em'}}>
            <label>Password:
            <TextField
              value={this.state.passTwo}
              onChange={this.handleChange}
              id='passTwo'
              type='password'
            />
            </label>
          </div>

          <div>
            <button type='submit' value='submit'  style={{marginRight: '0.2em'}}>Register!</button>
            <Link to='/login'><button>Back to Login</button></Link>
          </div>
        </form>
      </RegisterPage>
    );
  }

}

export default Register;
