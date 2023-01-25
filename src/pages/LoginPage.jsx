import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./LoginPage.scss";
import "../assets/styles/appStyles.scss";
import loginImage from "../assets/images/login.jpg";
import SubmitButton from "../components/SubmitButton/SubmitButton";

function LoginPage() {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
  });

  const initialValues = { email: "", password: "" };

  const onSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <div className="container mt-5">
      <p className="loginPage-heading">Notify Pro Admin</p>
      <div className="row d-flex align-items-center">
        <div
          className="col-lg-7 d-none d-lg-block"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img
            src={loginImage}
            alt="loginImage"
            className="img-fluid login-image"
          />
        </div>
        <div
          className="col-md-12 col-lg-5"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <div className="container login-card">
                <Form>
                  <div>
                    <p className="loginPage-subHeading">Login</p>
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="Enter email id / username"
                      className="form-control inp_text"
                      id="email"
                    />
                  </div>
                  <p className="error">
                    {errors.email && touched.email && errors.email}
                  </p>

                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Enter password"
                    className="form-control"
                  />

                  <p className="error">
                    {errors.password && touched.password && errors.password}
                  </p>
                  <SubmitButton title="Login" />
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
