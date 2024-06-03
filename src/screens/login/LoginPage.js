
/////////////////////////////////// signle login component //////////////////////////////////////////////////////////////////
import React from 'react';

import { useFormik } from 'formik';
import { Input } from '../../components/input/Input';
import { Link, useNavigate } from 'react-router-dom';
import "./login.style.css"
import { LoginSchema } from '../../utils/loginSchema';


export const LoginPage = ({ handleActive }) => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const { values, errors, touched, handleBlur, handleSubmit, handleChange } = useFormik({
    initialValues,
    validationSchema:LoginSchema,
    onSubmit: (values) => {
      console.log('Form values:', values);
      navigate('/dashboard');
    },
  });

  return (
    <div className="form-container sign-in">
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <div className="social-icons">
          <Link className="icon"><i className="fa-brands fa-google-plus-g"></i></Link>
          <Link className="icon"><i className="fa-brands fa-github"></i></Link>
          <Link className="icon"><i className="fab fa-linkedin"></i></Link>
        </div>
        <span>or use your email for login</span>
        <Input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
        {errors.email && touched.email && <span className="errorMsg">{errors.email}</span>}
        <Input type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
        {errors.password && touched.password && <span className="errorMsg">{errors.password}</span>}
        <Link to="#">Forget Your Password?</Link>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

// export default Login;

