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
        <div>
          {contactDetail.NickName}
        </div>
        <div>
          {contactDetail.FirstName}
        </div>
        <div>
          {contactDetail.MiddleName}
        </div>
        <div>
          {contactDetail.LastName}
        </div>
        <div>
          {contactDetail.EmailAddress}
        </div>
        <div>
          {contactDetail.CellPhoneNumber}
        </div>
        <div>
          {contactDetail.WorkPhoneNumber}
        </div>
        <div>
          {contactDetail.StreetAddress}
        </div>
        <div>
          {contactDetail.StreetAddressTwo}
        </div>
        <div>
          {contactDetail.City}
        </div>
        <div>
          {contactDetail.State}
        </div>
        <div>
          {contactDetail.ZIPCode}
        </div>
        <div>
          {contactDetail.POBox}
        </div>
        <div>
          {contactDetail.Notes}
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
