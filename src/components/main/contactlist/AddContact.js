import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Formik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as Yup from 'yup';

const FeedbackText = styled('div')`
  font-size: 12px;
  color: red;
`;

const ItemLabel = styled('label')`
  display: inline-block;
  margin-right: 0.5em;
`;

const ItemContainer = styled('div')`
  margin: 0.5em 1em;
`;

// Our inner form component. Will be wrapped with Formik({..})
const MyInnerForm = ({ props, closeModal }) => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <ItemContainer>
        <ItemLabel htmlFor="FirstName">
          First Name:
        </ItemLabel>
        <TextField
          id="FirstName"
          placeholder="First Name"
          type="text"
          value={values.FirstName}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.FirstName && touched.FirstName ? 'text-input error' : 'text-input'}
        />
        {errors.FirstName &&
        touched.FirstName && <FeedbackText className="input-feedback">{errors.FirstName}</FeedbackText>}
      </ItemContainer>
      <ItemContainer>
        <ItemLabel htmlFor="LastName">
          Last Name:
        </ItemLabel>
        <TextField
          id="LastName"
          placeholder="Last Name"
          type="text"
          value={values.LastName}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.LastName && touched.LastName ? 'text-input error' : 'text-input'}
        />
        {errors.LastName &&
        touched.LastName && <FeedbackText className="input-feedback">{errors.LastName}</FeedbackText>}
      </ItemContainer>

      <div style={{position: 'fixed', bottom: '1em', right: '1em'}}>
        <Button type="button"
        className="outline"
        onClick={closeModal}
        variant="contained"
        style={{marginRight: '1em'}}
        >
          Close
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={isSubmitting}
        >
          Add
        </Button>
      </div>
    </form>
  );
};

const AddContact = ({ closeModal, user, firestoreDB, reQueryContact }) => {
  return (
    <Formik
      validationSchema={Yup.object().shape({
            FirstName: Yup.string(),
            LastName: Yup.string(),
          })}
      initialValues={{ FirstName: '' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          firestoreDB.collection('users').doc(user.uid).collection('contactlist').add(values)
          .then(function(docRef) {
              console.log('Document successfully written!', docRef.id);
              reQueryContact();
              closeModal();
          })
          .catch(function(error) {
              console.error('Error writing document: ', error);
          });
          actions.setSubmitting(false);
        }, 1000);
      }}
      render={props => (
        <MyInnerForm
          props={props}
          closeModal={closeModal}
        />
      )}
    />
  );
};


export default AddContact;

AddContact.propTypes= {
  closeModal: PropTypes.func,
  user: PropTypes.object,
  firestoreDB: PropTypes.object,
  reQueryContact: PropTypes.func,
};

MyInnerForm.propTypes = {
  values: PropTypes.object,
  props: PropTypes.object,
  touched: PropTypes.object,
  errors: PropTypes.object,
  dirty: PropTypes.object,
  isSubmitting: PropTypes.bool,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  closeModal: PropTypes.func,
};
