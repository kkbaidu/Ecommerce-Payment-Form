import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

interface TextProps {
  label: string;
  id?: string;
  name: string;
  [key: string]: any;
}

export const TextInput = ({ label, ...props }: TextProps) => {
  const [field, meta] = useField(props);
  return (
    <div className={`w-full flex flex-col mt-4 ${props.style}`}>
      <label htmlFor={props.id || props.name} className=' text-gray-600 mb-1'>{label}</label>
      <input className="text-input outline-none border border-gray-200 rounded px-2 h-[40px]" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error text-red-500 italic text-[13px]">{meta.error}</div>
      ) : null}
    </div>
  );
};