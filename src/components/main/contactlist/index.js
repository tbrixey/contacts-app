import React, { Component } from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AddContact from './AddContact';

const Container = styled('div')`
  margin-top: 0.5em;
`;

const MyList = styled(List)`
  width: 50%;
  margin: 0.5em auto;
`;

const MyListItem = styled(ListItem)`
  padding-top: 0.4em;
  padding-bottom: 0.4em;
`;

const AddButton = styled('div')`
  position: fixed;
  bottom: 1em;
  right: 1em;
`;

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      if (this.props.user.uid) {
        const docRef = this.props.fireStoreDB.collection('users').doc(this.props.user.uid);

        docRef.get().then((doc) => {
          if (doc.exists) {
            const data = doc.data();
            this.setState({contactList: data.ContactList});
          }
        }).catch(function(error) {
          alert('Error getting document:', error);
        });
      }
    }
  }

  render() {
    const contactMap = this.state.contactList.map((contact, idx) => {
      return (
          <MyListItem key={idx}>
            {contact.FirstName} {contact.LastName}
          </MyListItem>
      );
    });
    return (
      <Container>
        { this.state.contactList.length > 0
          ?
          <div>
            <MyList >
              {contactMap}
            </MyList>
            <AddButton>
              <AddContact
                user={this.props.user}
              />
            </AddButton>
          </div>
          :
          <div style={{ marginTop: '10em' }}>
            Please login to see your contacts!
          </div>
        }
      </Container>
    );
  }

}

export default ContactList;

ContactList.propTypes = {
  fireStoreDB: PropTypes.object,
  user: PropTypes.object,
};
