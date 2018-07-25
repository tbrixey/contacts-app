import React, { Component } from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import AddContactButton from './AddContactButton';
import { Modal, Select } from 'antd';
import AddContact from './AddContact';
import ViewContact from './viewcontact';
import { Login, Register } from '../authentication';

const Option = Select.Option;

const Container = styled('div')`
  margin-top: 0.5em;
`;

const MyList = styled('div')`
  margin-top: 0.5em;
`;

const MyListItem = styled('div')`
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

const sortFirstName = (a,b) => {
  if (a.FirstName.toLowerCase() > b.FirstName.toLowerCase())
    return 1;
  if (a.FirstName.toLowerCase() < b.FirstName.toLowerCase())
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
      userAuthed: false,
      isRegister: false,
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
        this.setState({userAuthed: true});
        this.reQueryContacts();
      }
    }
  }

  removeContact = (contact) => {
    console.log(contact);
    const docRef = this.props.firestoreDB.collection('users').doc(this.props.user.uid).collection('contactlist').doc(contact.docId);
    docRef.delete().then(() => {
      console.log('Gone forever!');
      this.changeContactDetailModalVis();
      this.reQueryContacts();
    }).catch((error) => {
      console.error('error removing document: ', error);
    });
  }

  selectContact = (value) => {
    let contactDetail;
    this.state.contactList.forEach((contact) => {
      if (contact.docId === value) {
        contactDetail = contact;
      }
    });

    this.setState({contactDetail});
    this.changeContactDetailModalVis();
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

  changeIsRegister = () => {
    this.setState({isRegister: !this.state.isRegister});
  }

  render() {
    const { user, firestoreDB } = this.props;
    const contactMap = this.state.contactList.map((contact, idx) => {
      return (
        <MyListItem key={idx}>
          <div
            onClick={() => this.setContactDetail(contact)}
            style={{height: '2em', width: '100%', cursor: 'context-menu'}}
            >
              <span style={{float: 'left', marginLeft: '2em', marginTop: '0.2em'}}>{contact.FirstName} {contact.LastName}</span>
          </div>
        </MyListItem>
      );
    });

    const searchMap = this.state.contactList.map((contact, idx) => {
      const fullName = contact.FirstName + ' ' + contact.LastName;
      return (
        <Option key={idx} value={contact.docId}>{fullName}</Option>
      );
    });
    return (
      <Container>
        { this.state.userAuthed
          ?
          <div style={{height: '100%'}}>
            <label>Search for contact:
            <Select
              showSearch
              value={null}
              defaultActiveFirstOption={false}
              showArrow={false}
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              notFoundContent={null}
              style={{width: '65%', marginLeft: '0.5em'}}
              onChange={this.selectContact}
            >
              {searchMap}
            </Select>
            </label>
            <MyList >
              {contactMap}
            </MyList>
            <AddButton>
              <AddContactButton
                changeContactModalVis={this.changeContactModalVis}
              />
            </AddButton>
            <Modal
              title='Add Contact'
              visible={this.state.addContactModalVis}
              onCancel={this.changeContactModalVis}
              footer={null}
              destroyOnClose={true}
              style={{
                maxWidth: '80%',
                overflow: 'auto',
                position: 'relative',
                margin: 'auto',
              }}
              bodyStyle={{
                padding: 8,
              }}
            >
              <AddContact
                closeModal={this.changeContactModalVis}
                user={user}
                firestoreDB={firestoreDB}
                reQueryContact={this.reQueryContacts}
              />
            </Modal>
            <ViewContact
              contactDetail={this.state.contactDetail}
              viewContactModal={this.state.viewContactModal}
              changeContactDetailModalVis={this.changeContactDetailModalVis}
              removeContact={(contact) => this.removeContact(contact)}
              firestoreDB={firestoreDB}
              user={user}
              reQueryContacts={this.reQueryContacts}
            />
          </div>
          :
          <div style={{ marginTop: '10em' }}>
            { this.state.isRegister ?
              <Register changeIsRegister={this.changeIsRegister} />
            : <Login changeIsRegister={this.changeIsRegister} />}
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
