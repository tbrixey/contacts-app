import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const MyCloseButton = styled('button')`
  width: 5.5em;
  height: 2.8em;
  background-color: #e0e0e0;
  color: black;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  border: none;
  text-align: center;
  display: inline-block;
  border-radius: 6px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  margin-right: 0.6em;

  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;

  &:hover {
    background-color: #d5d5d5;
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

const ViewContact = ({viewContactModal, changeContactDetailModalVis, contactDetail}) => {
  return (
    <Modal
      visible={viewContactModal}
      onCancel={changeContactDetailModalVis}
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
      <Details>
        {contactDetail.NickName ? <div>
          <span>Nick Name: </span>{contactDetail.NickName}
        </div> : null }
        {contactDetail.FirstName ? <div>
          <span>First Name: </span>{contactDetail.FirstName}
        </div> : null }
        {contactDetail.MiddleName ? <div>
          <span>Middle Name: </span>{contactDetail.MiddleName}
        </div> : null }
        {contactDetail.LastName ? <div>
          <span>Last Name: </span>{contactDetail.LastName}
        </div> : null }
        {contactDetail.EmailAddress ? <div>
          <span>Email Address: </span>{contactDetail.EmailAddress}
        </div> : null }
        {contactDetail.CellPhoneNumber ? <div>
          <span>Cell Phone Number: </span>{contactDetail.CellPhoneNumber}
        </div> : null }
        {contactDetail.WorkPhoneNumber ? <div>
          <span>Work Phone Number: </span>{contactDetail.WorkPhoneNumber}
        </div> : null }
        {contactDetail.StreetAddress ? <div>
          <span>Street Address: </span>{contactDetail.StreetAddress}
        </div> : null }
        {contactDetail.StreetAddressTwo ? <div>
          <span>Street Address Two: </span>{contactDetail.StreetAddressTwo}
        </div> : null }
        {contactDetail.City ? <div>
          <span>City: </span>{contactDetail.City}
        </div> : null }
        {contactDetail.State ? <div>
          <span>State: </span>{contactDetail.State}
        </div> : null }
        {contactDetail.ZIPCode ? <div>
          <span>ZIP Code: </span>{contactDetail.ZIPCode}
        </div> : null }
        {contactDetail.POBox ? <div>
          <span>PO Box: </span>{contactDetail.POBox}
        </div> : null }
        {contactDetail.Notes ? <div>
          <span>Notes: </span>{contactDetail.Notes}
        </div> : null }
        <div style={{position: 'relative', textAlign: 'right', marginTop: '0.6em', fontSize: 14}}>
          <MyCloseButton type="button"
          onClick={changeContactDetailModalVis}
          >
            Close
          </MyCloseButton>
        </div>
      </Details>
    </Modal>
  );
};

export default ViewContact;

ViewContact.propTypes = {
  viewContactModal: PropTypes.bool,
  changeContactDetailModalVis: PropTypes.func,
  contactDetail: PropTypes.object,
};
