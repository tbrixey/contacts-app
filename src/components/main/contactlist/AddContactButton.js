import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import styled, {css} from 'react-emotion';
import PropTypes from 'prop-types';

const MyButton = styled(Button)`
  width: 10em;
  height: 3.5em;
  background-color: #343826;
  color: white;

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

const AddContactButton = ({changeContactModalVis}) => {

  return (
    <MyButton variant='extendedFab' className={css`
      &:hover {
        background-color: rgba(52, 56, 38, 0.8);
      }
    `} onClick={changeContactModalVis}>
      <AddIcon />
      Add Contact
    </MyButton>
  );
};

export default AddContactButton;

AddContactButton.propTypes = {
  changeContactModalVis: PropTypes.func,
};
