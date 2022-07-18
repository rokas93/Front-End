// ------------- //
// -- IMPORTS -- //
// ------------- //
import React from 'react';
import { useFormik } from 'formik';
import { registrationSchema } from '../../schemas';
// Styles
import { FormStyled, FormErrorMsgStyled } from './Form.styled';

// --------------- //
// -- COMPONENT -- //
// --------------- //
const RegisterForm = () => {
  // Functions
  const onSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();
  };

  const { handleChange, handleBlur, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        password: '',
        repassword: '',
      },
      validationSchema: registrationSchema,
      onSubmit,
    });

  return (
    <FormStyled onSubmit={handleSubmit}>
      <label>
        <input
          type='text'
          name='name'
          placeholder='Your Name'
          onChange={handleChange}
          value={values.name}
          onBlur={handleBlur}
        />
        {errors.name && touched.name ? (
          <FormErrorMsgStyled>{errors.name}</FormErrorMsgStyled>
        ) : null}
      </label>

      <label>
        <input
          type='email'
          name='email'
          placeholder='Your Email'
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ? (
          <FormErrorMsgStyled>{errors.email}</FormErrorMsgStyled>
        ) : null}
      </label>

      <label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={handleChange}
          value={values.password}
          onBlur={handleBlur}
        />
        {errors.password && touched.password ? (
          <FormErrorMsgStyled>{errors.password}</FormErrorMsgStyled>
        ) : null}
      </label>

      <label>
        <input
          type='password'
          name='repassword'
          placeholder='Repeat your password'
          onChange={handleChange}
          value={values.repassword}
          onBlur={handleBlur}
        />
        {errors.repassword && touched.repassword ? (
          <FormErrorMsgStyled>{errors.repassword}</FormErrorMsgStyled>
        ) : null}
      </label>

      <button type='submit'>Sign Up</button>
    </FormStyled>
  );
};

export default RegisterForm;
