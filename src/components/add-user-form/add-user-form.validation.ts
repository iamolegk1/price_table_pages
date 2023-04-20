import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const name = yup
  .string()
  .min(2, 'Name should have at least 2 characters')
  .required('Name is required');

const email = yup
  .string()
  .matches(
    new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    'Email invalid'
  )
  .required();

const age = yup
  .number()
  .typeError('Age must be a number')
  .positive()
  .min(0)
  .max(120)
  .required();

const loginFormValidationSchema = yup
  .object({
    name,
    email,
    age,
  })
  .required();

export const AddUserFormResolver = yupResolver(loginFormValidationSchema);
