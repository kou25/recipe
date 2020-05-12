import React from 'react';
import { reduxForm, Field } from 'redux-form';

const newField = ({
  input,
  type,
  placeholder,
  id,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <div>
      <input {...input} placeholder={placeholder} type={type} id={id} />
      {touched && error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

const Feedback = ({ handleSubmit, reset, submitting, valid }) => {
  return (
    <div className="container">
    <form onSubmit={handleSubmit(val => alert("The feedback is " + val.text + " given by "+val.firstName))}>
      <label htmlFor="first-name">Your first name:</label>
      <Field
        name="firstName"
        type="text"
        component={newField}
        id="first-name"
        placeholder="name"
      />
      <label htmlFor="email">Email:</label>
      <Field
        name="email"
        type="email"
        component={newField}
        id="email"
        placeholder="abc@abc.io"
      />
      <label htmlFor="text">Feedback:</label>
      <Field 
        name="text"
        type="text"
        component={newField}
        id="text"
      />
      <div style={{marginTop:"15px"}}>
      <button type="submit" disabled={!valid  || submitting}>
        Submit
      </button>
      <button type="button" onClick={reset}>
        reset
      </button>
      </div>
    </form>
    </div>
  );
};

const myValidator = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'First name is required';
  } else if (values.firstName.length < 3) {
    errors.firstName = "Your name can't be that short!";
  }
  if (!values.email) {
    errors.email = 'Hold on a minute, we need an email!';
  } else if (!/(.+)@(.+){2,}\.(.+){2,}/i.test(values.email)) {
    errors.email = 'Valid email please!';
  }
  return errors;
};

export default reduxForm({
  form: 'Feedback',
  validate: myValidator
})(Feedback);