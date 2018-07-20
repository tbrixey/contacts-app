import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
    };
  }

  // Once user logins the auth state should change.
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

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label>Email Address:
            <TextField
              autoFocus
              id='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
            </label>
          </div>
          <div>
            <label>Password:
            <TextField
              value={this.state.pass}
              onChange={this.handleChange}
              id='pass'
              type='password'
            />
            </label>
          </div>

          <div>
            <button type='submit' value='submit'>Log in!</button>
            <Link to='/register'><button>Register</button></Link>
          </div>
        </form>
      </div>
    );
  }

}

export default Login;
