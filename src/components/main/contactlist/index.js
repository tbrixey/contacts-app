import React, { Component } from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import AddContactButton from './AddContactButton';
import { Modal, Icon, Popconfirm, Select } from 'antd';
import AddContact from './AddContact';
import ViewContact from './ViewContact';
import { Login, Register } from '../authentication'

const Option = Select.Option;

const Container = styled('div')`
  margin-top: 0.5em;
`;

const MyList = styled('div')`
  width: 75%;
  margin: 0.5em auto !important;
`;

const MyListItem = styled('div')`
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

const TrashCan = styled(Icon)`
  position: relative;
  right: 0.7em;
  top: 0.45em;
  float: right;
  color: red;
  transition: transform .1s;

  &:hover {
    transform: scale(1.1);
  }

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
            style={{width: '72em', height: '2em', position: 'fixed'}}
            >
              <span style={{position: 'relative', top: '0.2em', left: '0.4em', float: 'left'}}>{contact.FirstName} {contact.LastName}</span>
          </div>
          <Popconfirm title="Are you sure delete this contact?" onConfirm={() => this.removeContact(contact)} okText="Yes" cancelText="No">
            <TrashCan type="delete"/>
          </Popconfirm>
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
          <div>
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
