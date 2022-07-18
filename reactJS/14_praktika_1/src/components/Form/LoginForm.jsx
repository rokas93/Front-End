// ------------- //
// -- IMPORTS -- //
// ------------- //
import React from 'react';
import { useFormik } from 'formik';
import { loginSchema } from '../../schemas';
// Styles
import { FormStyled, FormErrorMsgStyled } from './Form.styled';

// --------------- //
// -- COMPONENT -- //
// --------------- //
const LoginForm = () => {
  // Functions
  const onSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();
  };

  const { handleChange, handleBlur, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: loginSchema,
      onSubmit,
    });

  return (
    <FormStyled onSubmit={handleSubmit}>
      <label>
        <input
          name='email'
          type='email'
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
          name='password'
          type='password'
          placeholder='Password'
          onChange={handleChange}
          value={values.password}
          onBlur={handleBlur}
        />
        {errors.password && touched.password ? (
          <FormErrorMsgStyled>{errors.password}</FormErrorMsgStyled>
        ) : null}
      </label>

      <button type='submit'>Login In</button>
    </FormStyled>
  );
};

export default LoginForm;
