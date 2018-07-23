import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
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
  font-size: 18px;
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
    <form onSubmit={handleSubmit} style={{height: '80%'}}>
      <div style={{height: '100%', overflowY: 'auto'}}>
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
          <ItemLabel htmlFor="MiddleName">
            Middle Name:
          </ItemLabel>
          <TextField
            id="MiddleName"
            placeholder="Middle Name"
            type="text"
            value={values.MiddleName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.MiddleName && touched.MiddleName ? 'text-input error' : 'text-input'}
          />
          {errors.MiddleName &&
          touched.MiddleName && <FeedbackText className="input-feedback">{errors.MiddleName}</FeedbackText>}
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
        <ItemContainer>
          <ItemLabel htmlFor="WorkPhoneNumber">
            Work Number:
          </ItemLabel>
          <TextField
            id="WorkPhoneNumber"
            placeholder="1234567890"
            type="number"
            value={(values.WorkPhoneNumber)}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.WorkPhoneNumber && touched.WorkPhoneNumber ? 'text-input error' : 'text-input'}
          />
          {errors.WorkPhoneNumber &&
          touched.WorkPhoneNumber && <FeedbackText className="input-feedback">{errors.WorkPhoneNumber}</FeedbackText>}
        </ItemContainer>
        <ItemContainer>
          <ItemLabel htmlFor="CellPhoneNumber">
            Cell Number:
          </ItemLabel>
          <TextField
            id="CellPhoneNumber"
            placeholder="1234567890"
            type="number"
            value={(values.CellPhoneNumber)}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.CellPhoneNumber && touched.CellPhoneNumber ? 'text-input error' : 'text-input'}
          />
          {errors.CellPhoneNumber &&
          touched.CellPhoneNumber && <FeedbackText className="input-feedback">{errors.CellPhoneNumber}</FeedbackText>}
        </ItemContainer>
        <ItemContainer>
          <ItemLabel htmlFor="EmailAddress">
            Email Address:
          </ItemLabel>
          <TextField
            id="EmailAddress"
            placeholder="Email Address"
            type="text"
            value={values.EmailAddress}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.EmailAddress && touched.EmailAddress ? 'text-input error' : 'text-input'}
          />
          {errors.EmailAddress &&
          touched.EmailAddress && <FeedbackText className="input-feedback">{errors.EmailAddress}</FeedbackText>}
        </ItemContainer>
        <ItemContainer>
          <ItemLabel htmlFor="Nickname">
            Nickname:
          </ItemLabel>
          <TextField
            id="Nickname"
            placeholder="Nickname"
            type="text"
            value={values.Nickname}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.Nickname && touched.Nickname ? 'text-input error' : 'text-input'}
          />
          {errors.Nickname &&
          touched.Nickname && <FeedbackText className="input-feedback">{errors.Nickname}</FeedbackText>}
        </ItemContainer>
        <ItemContainer>
          <ItemLabel htmlFor="StreetAddress">
            Street Address:
          </ItemLabel>
          <TextField
            id="StreetAddress"
            placeholder="Street Address"
            type="text"
            value={values.StreetAddress}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.StreetAddress && touched.StreetAddress ? 'text-input error' : 'text-input'}
          />
          {errors.StreetAddress &&
          touched.StreetAddress && <FeedbackText className="input-feedback">{errors.StreetAddress}</FeedbackText>}
        </ItemContainer>
        <ItemContainer>
          <ItemLabel htmlFor="StreetAddressTwo">
            Street Address line 2:
          </ItemLabel>
          <TextField
            id="StreetAddressTwo"
            placeholder="Street Address line 2"
            type="text"
            value={values.StreetAddressTwo}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.StreetAddressTwo && touched.StreetAddressTwo ? 'text-input error' : 'text-input'}
          />
          {errors.StreetAddressTwo &&
          touched.StreetAddressTwo && <FeedbackText className="input-feedback">{errors.StreetAddressTwo}</FeedbackText>}
        </ItemContainer>
        <ItemContainer>
          <ItemLabel htmlFor="City">
            City:
          </ItemLabel>
          <TextField
            id="City"
            placeholder="City"
            type="text"
            value={values.City}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.City && touched.City ? 'text-input error' : 'text-input'}
          />
          {errors.City &&
          touched.City && <FeedbackText className="input-feedback">{errors.City}</FeedbackText>}
        </ItemContainer>
        <ItemContainer>
          <ItemLabel htmlFor="State">
            State:
          </ItemLabel>
          <TextField
            id="State"
            placeholder="State"
            type="text"
            value={values.State}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.State && touched.State ? 'text-input error' : 'text-input'}
          />
          {errors.State &&
          touched.State && <FeedbackText className="input-feedback">{errors.State}</FeedbackText>}
        </ItemContainer>
        <ItemContainer>
          <ItemLabel htmlFor="ZIPCode">
            ZIP Code:
          </ItemLabel>
          <TextField
            id="ZIPCode"
            placeholder="ZIP Code"
            type="text"
            value={values.ZIPCode}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.ZIPCode && touched.ZIPCode ? 'text-input error' : 'text-input'}
          />
          {errors.ZIPCode &&
          touched.ZIPCode && <FeedbackText className="input-feedback">{errors.ZIPCode}</FeedbackText>}
        </ItemContainer>
        <ItemContainer>
          <ItemLabel htmlFor="POBox">
            PO Box:
          </ItemLabel>
          <TextField
            id="POBox"
            placeholder="PO Box"
            type="text"
            value={values.POBox}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.POBox && touched.POBox ? 'text-input error' : 'text-input'}
          />
          {errors.POBox &&
          touched.POBox && <FeedbackText className="input-feedback">{errors.POBox}</FeedbackText>}
        </ItemContainer>
        <ItemContainer>
          <ItemLabel htmlFor="Notes">
            Notes:
          </ItemLabel>
          <TextField
            id="Notes"
            placeholder="Notes"
            type="text"
            value={values.Notes}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.Notes && touched.Notes ? 'text-input error' : 'text-input'}
          />
          {errors.Notes &&
          touched.Notes && <FeedbackText className="input-feedback">{errors.Notes}</FeedbackText>}
        </ItemContainer>
      </div>
      <div style={{position: 'absolute', bottom: '0.5em', right: '0.5em'}}>
        <Button type="button"
        onClick={closeModal}
        variant="contained"
        style={{marginRight: '1em'}}
        >
          Close
        </Button>
        <Button
          variant="contained"
          className={css`
            background-color: rgba(52, 56, 38);
            color: white;
            &:hover {
              background-color: rgba(52, 56, 38, 0.8);
            }
          `}
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
      initialValues={{
        FirstName: '',
        MiddleName: '',
        LastName: '',
        WorkPhoneNumber: '',
        CellPhoneNumber: '',
        EmailAddress: '',
        Nickname: '',
        StreetAddress: '',
        StreetAddressTwo: '',
        City: '',
        State: '',
        ZIPCode: '',
        POBox: '',
        Notes: '',
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          let newWorkPhoneNumber = values.WorkPhoneNumber.toString().replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3');
          let newCellPhoneNumber = values.CellPhoneNumber.toString().replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3');
          values.WorkPhoneNumber = newWorkPhoneNumber;
          values.CellPhoneNumber = newCellPhoneNumber;
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
