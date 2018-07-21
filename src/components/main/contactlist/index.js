import React, { Component } from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AddContact from './AddContact';
import Modal from '@material-ui/core/Modal';

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

const ModalStyle = styled('div')`
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 2px 2px 10px;
  width: 50%;
  height: 60%;
  font-size: 26px;

  @media only screen and (max-width: 1024px) {
    width: 70%;
    height: 60%;
    font-size: 22px;
  }
`;

const ModalHeader = styled('div')`
  height: 3em;
  background-color: #bfbfbf;
`;

const ModalHeaderText = styled('span')`
  position: relative;
  top: 0.9em;
  left: 1.8em;
`;

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [],
      addContactModalVis: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      if (this.props.user.uid) {
        const docRef = this.props.firestoreDB.collection('users').doc(this.props.user.uid);

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

  changeContactModalVis = () => {
    this.setState({addContactModalVis: !this.state.addContactModalVis});
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
                changeContactModalVis={this.changeContactModalVis}
              />
            </AddButton>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.addContactModalVis}
              onClose={this.changeContactModalVis}
            >
              <ModalStyle>
                <ModalHeader><ModalHeaderText>Add Contact</ModalHeaderText></ModalHeader>
              </ModalStyle>
            </Modal>
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
  firestoreDB: PropTypes.object,
  user: PropTypes.object,
};
