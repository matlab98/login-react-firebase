import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import validator from "validator";

const RegisterScreen = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      dpassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Debe tener 15 carácteres o menos")
        .required("Requerido"),
      lastName: Yup.string()
        .max(20, "Debe tener 20 carácteres o menos")
        .required("Requerido"),
      email: Yup.string()
        .email("Correo electrónico inválido")
        .required("Requerido"),
      password: Yup.string()
        .min(5, "Debe tener al menos 5 carácteres")
        .max(20, "Debe tener máximo 20 carácteres")
        .required("Requerido"),
      dpassword: Yup.string()
        .min(5, "Debe tener al menos 5 carácteres")
        .max(20, "Debe tener máximo 20 carácteres")
        .oneOf([Yup.ref("password"), null], "No coinciden")
        .required("Requerido"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="signup">
      <h2 className="form-title" id="signup">
        <span>o </span>Registrarse
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-holder">
          <input
          
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Nombre(s)"
            className="input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}

          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Apellidos"
            className="input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Correo electrónico"
            className="input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Contraseña"
            className="input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}

          <input
            id="dpassword"
            name="dpassword"
            type="password"
            placeholder="Repetir contraseña"
            className="input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dpassword}
          />
          {formik.touched.dpassword && formik.errors.dpassword ? (
            <div>{formik.errors.dpassword}</div>
          ) : null}
</div>
        <button type="submit" className="submit-btn">
          Continuar
        </button>
      </form>
    </div>
  );
};

export default RegisterScreen;
