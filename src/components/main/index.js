import React, { Component } from 'react';
import ContactList from './contactlist';
import Header from './header';
import firebase from '../helpers/FirebaseInit';

var fireStoreDB = firebase.firestore();
const settings = {timestampsInSnapshots: true};
fireStoreDB.settings(settings);

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  // This function signs the user out when clicked
  signOut = () => {
    firebase.auth().signOut().then(() => {
      window.location.href = '/';
    }).catch((error) => {
      alert(error);
    });
  }

  componentDidMount() {
    // On initial page load see if user has authed
    var user = {};
    firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in.
        user.email = authUser.email;
        user.emailVerified = authUser.emailVerified;
        user.uid = authUser.uid;
        this.setState({ user });
        // ...
      } else {
        this.setState({ user });
      }
    });
  }

  render() {
    return (
      <div>
        <Header
          user={this.state.user}
          signOut={this.signOut}
        />
        <ContactList
          fireStoreDB={fireStoreDB}
          user={this.state.user}
        />
      </div>
    );

  }

}

export default MainApp;
