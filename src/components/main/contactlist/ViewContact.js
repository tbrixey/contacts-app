import React from 'react';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

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

const ViewContact = ({viewContactModal, changeContactDetailModalVis, contactDetail}) => {

  return (
    <Modal
      open={viewContactModal}
      onClose={changeContactDetailModalVis}
    >
      <ModalStyle>
        <div style={{height: '100%', overflowY: 'auto'}}>
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
        </div>
      </ModalStyle>
    </Modal>
  );
};

export default ViewContact;

ViewContact.propTypes = {
  viewContactModal: PropTypes.bool,
  changeContactDetailModalVis: PropTypes.func,
  contactDetail: PropTypes.object,
};
