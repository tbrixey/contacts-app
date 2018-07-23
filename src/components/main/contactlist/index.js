import React, { Component } from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Delete from '@material-ui/icons/Delete';
import AddContactButton from './AddContactButton';
import Modal from '@material-ui/core/Modal';
import AddContact from './AddContact';
import ViewContact from './ViewContact';

const Container = styled('div')`
  margin-top: 0.5em;
`;

const MyList = styled(List)`
  width: 50%;
  margin: 0.5em auto !important;
`;

const MyListItem = styled(ListItem)`
  padding: 0;
  height: 2em;
  &:hover {
    background-color: rgba(125, 125, 125, 0.1)
  }
`;

const AddButton = styled('div')`
  position: fixed;
  bottom: 1em;
  right: 1em;
`;

const TrashCan = styled(Delete)`
  position: absolute;
  right: 0.7em;
  color: red;
  transition: transform .1s;

  &:hover {
    transform: scale(1.1);
  }

`;

const ModalStyle = styled('div')`
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 2px 2px 10px;
  width: 50%;
  height: 70%;
  font-size: 26px;

  @media only screen and (max-width: 1024px) {
    width: 70%;
    height: 80%;
    font-size: 22px;
  }
`;

const ModalHeader = styled('div')`
  height: 3em;
  background-color: #97C34D;
  color: #343826;
`;

const ModalHeaderText = styled('span')`
  position: relative;
  top: 0.9em;
  left: 1.8em;
`;

const sortFirstName = (a,b) => {
  if (a.FirstName > b.FirstName)
    return 1;
  if (a.FirstName < b.FirstName)
    return -1;
  return 0;
};

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [],
      contactDetail: {},
      addContactModalVis: false,
      viewContactModal: false,
    };
  }

  reQueryContacts = () => {
    const docRef = this.props.firestoreDB.collection('users').doc(this.props.user.uid).collection('contactlist');
    let dataArr = [];
    docRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          if (doc.exists) {
            let dataObj = doc.data();
            dataObj.docId = doc.id;
            dataArr.push(dataObj);
          }
      });
      dataArr = dataArr.sort(sortFirstName);
      this.setState({contactList: dataArr});
    }).catch(function(error) {
      console.error('Error getting document:', error);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      if (this.props.user.uid) {
        this.reQueryContacts();
      }
    }
  }

  removeContact = (contact) => {
    console.log(contact);
    const docRef = this.props.firestoreDB.collection('users').doc(this.props.user.uid).collection('contactlist').doc(contact.docId);
    docRef.delete().then(() => {
      console.log('Gone forever!');
      this.reQueryContacts();
    }).catch((error) => {
      console.error('error removing document: ', error);
    });
  }

  changeContactModalVis = () => {
    this.setState({addContactModalVis: !this.state.addContactModalVis});
  }

  changeContactDetailModalVis = () => {
    this.setState({viewContactModal: !this.state.viewContactModal});
  }

  setContactDetail = (contact) => {
    this.setState({contactDetail: contact});
    this.changeContactDetailModalVis();
  }

  render() {
    const { user, firestoreDB } = this.props;
    const contactMap = this.state.contactList.map((contact, idx) => {
      return (
        <MyListItem key={idx}>
          <div
            onClick={() => this.setContactDetail(contact)}
            style={{width: '100%', height: '100%'}}
            >
              <span style={{position: 'relative', top: '0.4em', left: '0.4em'}}>{contact.FirstName} {contact.LastName}</span>
          </div>
          <TrashCan onClick={() => this.removeContact(contact)}/>
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
              <AddContactButton
                changeContactModalVis={this.changeContactModalVis}
              />
            </AddButton>
            <Modal
              open={this.state.addContactModalVis}
              onClose={this.changeContactModalVis}
            >
              <ModalStyle>
                <ModalHeader>
                  <ModalHeaderText>Add Contact</ModalHeaderText>
                </ModalHeader>
                <AddContact
                  closeModal={this.changeContactModalVis}
                  user={user}
                  firestoreDB={firestoreDB}
                  reQueryContact={this.reQueryContacts}
                />
              </ModalStyle>
            </Modal>
            <ViewContact
              contactDetail={this.state.contactDetail}
              viewContactModal={this.state.viewContactModal}
              changeContactDetailModalVis={this.changeContactDetailModalVis}
            />
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
