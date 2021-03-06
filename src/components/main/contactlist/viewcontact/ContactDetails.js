import React from 'react';
import PropTypes from 'prop-types';

const ContactDetails = ({contactDetail}) => (
  <div>{contactDetail.FirstName ? <div>
    <span>First Name: </span>{contactDetail.FirstName}
  </div> : null }
  {contactDetail.MiddleName ? <div>
    <span>Middle Name: </span>{contactDetail.MiddleName}
  </div> : null }
  {contactDetail.LastName ? <div>
    <span>Last Name: </span>{contactDetail.LastName}
  </div> : null }
  {contactDetail.NickName ? <div>
    <span>Nick Name: </span>{contactDetail.NickName}
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
  </div> : null }</div>
);

export default ContactDetails;

ContactDetails.propTypes = {
  contactDetail: PropTypes.object,
};
