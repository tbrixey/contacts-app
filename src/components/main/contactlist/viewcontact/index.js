import React, { Component } from 'react';
import { Modal, Icon, Popconfirm } from 'antd';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import ContactDetails from './ContactDetails';
import ContactDetailsEdit from './ContactDetailsEdit';

const MyCloseButton = styled('button')`
  width: auto;
  height: 2.4em;
  background-color: #e0e0e0;
  color: black;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  border: none;
  text-align: center;
  display: inline-block;
  border-radius: 6px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  margin-right: 0.6em;

  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;

  &:hover {
    background-color: #d5d5d5;
  }
`;

const MyEditButton = styled('button')`
  width: auto;
  height: 2.4em;
  background-color: #343826;
  color: white;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  border: none;
  text-align: center;
  display: inline-block;
  border-radius: 6px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;

  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgba(85, 92, 62, 1);
  }
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

const Details = styled('div')`
  height: 100%;
  overflowY: auto;
  whiteSpace: nowrap;

  @media only screen and (min-width: 1024px) {
    font-size: 18px;
  }

  @media only screen and (min-width: 1366px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 760px) {
    font-size: 14px;
  }
`;

class ViewContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      contactDetail: {},
      newDetail: {},
    };
  }

  changeEditMode = () => {
    if (this.state.isEdit) {
      // save edit
      console.log(this.state.contactDetail);
    }
    this.setState({isEdit: !this.state.isEdit});
  }

  componentDidMount() {
    this.setState({contactDetail: this.props.contactDetail});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({contactDetail: this.props.contactDetail});
    }
  }

  handleChange = (e) => {
    let editDetail = this.state.contactDetail;
    editDetail[e.target.id] = e.target.value;
    this.setState({contactDetail: editDetail});
  }

  render() {
    const {viewContactModal, changeContactDetailModalVis, contactDetail, removeContact} = this.props;
    return (
      <Modal
        closable={false}
        visible={viewContactModal}
        onCancel={changeContactDetailModalVis}
        footer={null}
        destroyOnClose={true}
        style={{
          maxWidth: '90%',
          overflow: 'auto',
          position: 'relative',
          margin: 'auto',
        }}
        bodyStyle={{
          padding: 8,
        }}
      >
        <Details>
          <div>
            <Popconfirm title="Are you sure delete this contact?"
              onConfirm={() => removeContact(contactDetail)} okText="Yes" cancelText="No">
              <TrashCan type="delete"/>
            </Popconfirm>
          </div>
          {this.state.isEdit ?
            <ContactDetailsEdit
              contactDetail={this.state.contactDetail}
              handleChange={(e) => this.handleChange(e)}
            />
          : <ContactDetails contactDetail={contactDetail}/> }
          <div style={{position: 'relative', textAlign: 'right', marginTop: '0.6em', fontSize: 14}}>
            <MyCloseButton type="button"
              onClick={changeContactDetailModalVis}
            >
              Close
            </MyCloseButton>
            <MyEditButton type="button" onClick={this.changeEditMode}>
              {this.state.isEdit ? 'Confirm Edit'
              : 'Edit Contact'}
            </MyEditButton>
          </div>
        </Details>
      </Modal>
    );
  }
}

export default ViewContact;

ViewContact.propTypes = {
  viewContactModal: PropTypes.bool,
  changeContactDetailModalVis: PropTypes.func,
  contactDetail: PropTypes.object,
  removeContact: PropTypes.func,
};
