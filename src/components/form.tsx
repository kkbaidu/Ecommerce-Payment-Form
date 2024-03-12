import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues

interface TextProps {
  label: string;
  id?: string;
  name: string;
  [key: string]: any;
}

const MyTextInput = ({ label, ...props }: TextProps) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

interface Errors {
    firstName?: string;
    lastName?: string;
    email?: string;
}

const SignupForm = () => {
  return (
    <div>
      <Formik
         initialValues={{
           firstName: '',
           lastName: '',
           email: '',
         }}
         validationSchema={Yup.object({
           firstName: Yup.string()
             .max(15, 'Must be 15 characters or less')
             .required('Required'),
           lastName: Yup.string()
             .max(20, 'Must be 20 characters or less')
             .required('Required'),
           email: Yup.string()
             .email('Invalid email address')
             .required('Required'),
         })}
         onSubmit={(values, { setSubmitting }) => {
           setTimeout(() => {
             alert(JSON.stringify(values, null, 2));
             setSubmitting(false);
           }, 400);
         }}
       >
        <form>
        <MyTextInput
             label="First Name"
             name="firstName"
             type="text"
             placeholder="Jane"
           />
 
           <MyTextInput
             label="Last Name"
             name="lastName"
             type="text"
             placeholder="Doe"
           />
 
           <MyTextInput
             label="Email Address"
             name="email"
             type="email"
             placeholder="jane@formik.com"
           />
           </form>
       </Formik>
    </div>
  )
}

export default SignupForm;