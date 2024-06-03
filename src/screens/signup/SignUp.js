import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { Input } from '../../components/input/Input';
import { SignupSchema } from '../../utils/signupSchema/SignupSchema';
import "./sign.style.css";
import { handleSignup } from '../../firebase';

const SignUp = ({ handleActive }) => {
  const [uid, setUid] = useState(null);

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const { values, errors, touched, handleBlur, handleSubmit, handleChange, resetForm } = useFormik({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      console.log('Form values:', values);
      localStorage.setItem('items', JSON.stringify(values));
      try {
        const Uid = await handleSignup(values.email, values.password);
        setUid(Uid);
        console.log("User ID:", Uid);
      } catch (error) {
        console.error("Signup error:", error);
      }
     
      console.log("Form reset");
    },
  });

  return (
    <div className="form-container sign-up">
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <div className="social-icons">
          <Link className="icon"><i className="fa-brands fa-google-plus-g"></i></Link>
          <Link className="icon"><i className="fa-brands fa-github"></i></Link>
          <Link className="icon"><i className="fab fa-linkedin"></i></Link>
        </div>
        <span>or use your email for registration</span>
        <Input type="text" name="name" placeholder="Enter Name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
        {errors.name && touched.name && <span className="errorMsg">{errors.name}</span>}
        <Input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
        {errors.email && touched.email && <span className="errorMsg">{errors.email}</span>}
        <Input type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
        {errors.password && touched.password && <span className="errorMsg">{errors.password}</span>}
        <Input type="password" name="confirmPassword" placeholder="Confirm Password" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />
        {errors.confirmPassword && touched.confirmPassword && <span className="errorMsg">{errors.confirmPassword}</span>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

