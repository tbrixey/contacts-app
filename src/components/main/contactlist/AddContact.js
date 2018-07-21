import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const MyButton = styled(Button)`
  width: 10em;
  height: 4em;

  @media only screen and (min-width: 1024px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1366px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 760px) {
    font-size: 14px;
  }
`;



const AddContact = () => (
  <MyButton variant='extendedFab' color="primary" aria-label="Add">
    <AddIcon />
    Add Contact
  </MyButton>
);

export default AddContact;

AddContact.propTypes = {
  user: PropTypes.object,
  firestoreDB: PropTypes.object,
};
