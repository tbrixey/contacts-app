import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase';

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
            <button type='submit' value='submit'>Register!</button>
            <Link to='/login'><button>Back to Login</button></Link>
          </div>
        </form>
      </div>
    );
  }

}

export default Register;
