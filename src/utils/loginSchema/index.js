import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
    email: yup.string().email().required("Please enter email"),
    password: yup.string().required("Please enter your password").min(6),
  });