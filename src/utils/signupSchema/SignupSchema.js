import * as yup from 'yup';

export const SignupSchema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup.string().email().required("Please enter email"),
  password: yup.string().required("Please enter your password").min(6),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required("Please enter confirm password"),
});