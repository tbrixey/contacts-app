import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { Collapse } from 'antd';

const Panel = Collapse.Panel;

const ContactDetailsEdit = ({contactDetail, handleChange}) => (
  <div>
    <div>
      <span>First Name: </span>
      <TextField
        id="FirstName"
        placeholder="First Name"
        type="text"
        value={contactDetail.FirstName}
        onChange={handleChange}
      />
    </div>
    <div>
      <span>Middle Name: </span>
      <TextField
        id="MiddleName"
        placeholder="Middle Name"
        type="text"
        value={contactDetail.MiddleName}
        onChange={handleChange}
      />
    </div>
    <div>
      <span>Last Name: </span>
      <TextField
        id="LastName"
        placeholder="Last Name"
        type="text"
        value={contactDetail.LastName}
        onChange={handleChange}
      />
    </div>
    <div>
      <span>Nick Name: </span>
      <TextField
        id="NickName"
        placeholder="Nickname"
        type="text"
        value={contactDetail.NickName}
        onChange={handleChange}
      />
    </div>
    <div>
      <span>Email Address: </span>
      <TextField
        id="EmailAddress"
        placeholder="Email Address"
        type="text"
        value={contactDetail.EmailAddress}
        onChange={handleChange}
      />
    </div>
    <div>
      <span>Cell Phone Number: </span>
      <TextField
        id="CellPhoneNumber"
        placeholder="1234567890"
        type="number"
        value={contactDetail.CellPhoneNumber}
        onChange={handleChange}
      />
    </div>
    <Collapse bordered={false}>
      <Panel header="More info" key="1">
        <div>
          <span>Work Phone Number: </span>
          <TextField
            id="WorkPhoneNumber"
            placeholder="1234567890"
            type="number"
            value={contactDetail.WorkPhoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <span>Street Address: </span>
          <TextField
            id="StreetAddress"
            placeholder="Street Address"
            type="text"
            value={contactDetail.StreetAddress}
            onChange={handleChange}
          />
        </div>
        <div>
          <span>Street Address Two: </span>
          <TextField
            id="StreetAddressTwo"
            placeholder="Line 2"
            type="text"
            value={contactDetail.StreetAddressTwo}
            onChange={handleChange}
          />
        </div>
        <div>
          <span>City: </span>
          <TextField
            id="City"
            placeholder="City"
            type="text"
            value={contactDetail.City}
            onChange={handleChange}
          />
        </div>
        <div>
          <span>State: </span>
          <TextField
            id="State"
            placeholder="State"
            type="text"
            value={contactDetail.State}
            onChange={handleChange}
          />
        </div>
        <div>
          <span>ZIP Code: </span>
          <TextField
            id="ZIPCode"
            placeholder="ZIP Code"
            type="text"
            value={contactDetail.ZIPCode}
            onChange={handleChange}
          />
        </div>
        <div>
          <span>PO Box: </span>
          <TextField
            id="POBox"
            placeholder="PO Box"
            type="text"
            value={contactDetail.POBox}
            onChange={handleChange}
          />
        </div>
        <div>
          <span>Notes: </span>
          <TextField
            id="Notes"
            placeholder="Notes"
            type="text"
            value={contactDetail.Notes}
            onChange={handleChange}
          />
        </div>
      </Panel>
    </Collapse>
  </div>
);

export default ContactDetailsEdit;

ContactDetailsEdit.propTypes = {
  contactDetail: PropTypes.object,
  handleChange: PropTypes.func,
};
