import React from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import validator from 'validator';
import { Link } from 'react-router-dom';
import { startFacebookLogin, startGoogleLogin, startLoginEmailPassword } from '../actions/authActions';
const Basic = () => {
  
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Requerido';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Correo electrónico inválido';
    }

    if (!values.password || values.password < 5) {
      errors.password = 'La contraseña es incorecta';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="login slide-up">
      <div className="center">
      <h2 className="form-title" id="login">
			<span>or</span>
			Log in</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-holder">
          <input
            id="email"
            name="email"
            type="email"
            className="input"
            placeholder="Correo electrónico"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />

          <input
            id="password"
            name="password"
            type="password"
            className="input"
            placeholder="Contraseña"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </div>
        <button type="submit" className="submit-btn">
          Continuar
        </button>
      </form>
      </div>
    </div>
  );
};

export default Basic;
