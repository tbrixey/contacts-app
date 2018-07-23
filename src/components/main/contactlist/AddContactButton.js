import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const MyButton = styled('button')`
  width: 9em;
  height: 3em;
  background-color: #343826;
  color: white;
  border-radius: 40px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  border: none;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  position: relative;

  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgba(52, 56, 38, 0.8);
  }

  &:after {
    content: "";
    background: rgba(190, 190, 190, 1);
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 380%;
    margin-left: -20px!important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
  }

  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
  }

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
    <MyButton onClick={changeContactModalVis}>
      <span style={{display: 'inline-block', fontSize: 20, marginRight: '0.2em'}}>+</span>
      Add Contact
    </MyButton>
  );
};

export default AddContactButton;

AddContactButton.propTypes = {
  changeContactModalVis: PropTypes.func,
};
