import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingCart from './components/shopping-cart';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextInput } from './components/inputs';
import lockImg from "./assets/lock-img.svg";
import { OrderInfoContext } from './context/context';

import './App.css';

const initValues = {
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  phone: '',
  cardNumber: '',
  expiry: '',
  cvc: '',
}

const schemaObj = {
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  address: Yup.string()
    .required('Required'),
  city: Yup.string()
    .required('Required'),
  zip: Yup.string()
  .matches(/^[A-Z]{2}/, 'Invalid input')
    .required('Required'),
  phone: Yup.string()
    .min(9, "Should have a minimum of 5 numbers")
    .max(10, "Should have a maximum of 5 numbers")
    .required("Required"),
  cardNumber: Yup.string()
    // .min(14, "Invalid card number")
    .max(16, "Invalid card number")
    .required("Required"),
  expiry: Yup.string()
    .test(
      'is-valid-date',
      'Invalid date format (MM/DD)',
      (value) => {
        if (!value) {
          return false;
        }
        const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/;
        return dateRegex.test(value);
      }
    )
    .required('Required'),
    cvc: Yup.string()
    .matches(/^\d{3,4}$/, 'Invalid CVC format')
    .required('Required'),
}


function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState(true);
  const contextValue = useContext(OrderInfoContext);

  if (!contextValue) {
    throw new Error("useOrderInfo must be used within an OrderInfoContextProvider");
  }

  const { setInfo } = contextValue;

  const navigate = useNavigate();

  return (
    <main className='grid md:grid-cols-2 lg:grid-cols-2 md:grid-row-1 lg:grid-row-1 md:px-20 lg:px-20 md:gap-6 lg:gap-6 mb-5'>
      {/* Shopping cart */}
      <div className='md:border lg:border md:border-gray-300 lg:border-gray-300 md:shadow-lg lg:shadow-lg md:rounded-[20px] lg:rounded-[20px] px-4'>
        <div className='flex items-center text-[20px] text-left font-bold w-full border-b border-gray-200 h-[50px]'>
          <span>  Shopping Cart </span>
        </div>
        <div className=' border-b border-gray-200 py-6'>
          <ShoppingCart />
        </div>
        <div className='flex flex-col justify-between h-[100px] py-4 border-b border-gray-200'>
          <span className='flex flex-row justify-between'>
            <span> Subtotal </span>
            <span className='font-bold'> $895.00 </span>
          </span>
          <span className='flex flex-row justify-between'>
            <span> Delivery </span>
            <span className='font-bold'> $0.00 </span>
          </span>
        </div>
        <div className='flex flex-row justify-between h-[80px] pt-3'>
          <span> Total </span>
          <span className='font-bold'> $895.00 </span>
        </div>
      </div>
      {/* Delivery and Payment */}
      
        <Formik
          initialValues={initValues}
          validationSchema={Yup.object(schemaObj)}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
              setInfo(values);
            navigate("/previewformdetails");
            }, 400);
          }}
        >
          <Form>
            <div className='flex flex-col gap-4'>
              <div id="Delivery" className='md:border lg:border md:border-gray-300 lg:border-gray-300 md:shadow-lg lg:shadow-lg md:rounded-[20px] lg:rounded-[20px] px-4 gap-4'>
                <div className='flex items-center text-[20px] text-left font-semibold w-full border-b border-gray-200 h-[50px]'>
                  <span>  Delivery Info </span>
                </div>
                <div className='flex flex-row justify-between'>
                  <span className='w-[45%]'>
                    <TextInput
                      label="First Name*"
                      name="firstName"
                      type="text"
                      placeholder="Kingsley"
                    />
                  </span>
                  <span className='w-[45%]'>
                    <TextInput
                      label="Last Name*"
                      name="lastName"
                      type="text"
                      placeholder="Baidu"
                    />
                  </span>
                </div>
                <div>
                  <TextInput
                    label="Address*"
                    name="address"
                    type="text"
                    placeholder="8729 Bay Ave Brooklyn"
                  />
                </div>
                <div className='flex flex-row justify-between'>
                  <span className='w-[45%]'>
                    <TextInput
                      label="City*"
                      name="city"
                      type="text"
                      placeholder="New York"
                    />
                  </span>
                  <span className='w-[45%]'>
                    <TextInput
                      label="State"
                      name="state"
                      type="text"
                      placeholder="Queens"
                    />
                  </span>
                </div>
                <div className='flex flex-row justify-between mb-10'>
                  <span className='w-[45%]'>
                    <TextInput
                      label="Zip*"
                      name="zip"
                      type="text"
                      placeholder="NY11218"
                    />
                  </span>
                  <span className='w-[45%]'>
                    <TextInput
                      label="Phone*"
                      name="phone"
                      type="text"
                      placeholder="+1 234-567-890"
                    />
                  </span>
                </div>
              </div>
              <div id='pay' className='md:border lg:border md:border-gray-300 lg:border-gray-300 md:shadow-lg lg:shadow-lg md:rounded-[20px] lg:rounded-[20px] px-4'>
                <div className='flex justify-between items-center text-left font-semibold w-full border-b border-gray-200 h-[50px] py-1'>
                  <span className='text-[20px]'>  Payment </span>
                  <span className='flex justify-between bg-[#f3f3f3] w-[240px] h-full px-3 py-[3px]'>
                    <button 
                    onClick={()=> { setPaymentMethod(true) }}
                    className={`${paymentMethod=== true? "text-[#396aff] shadow-sm bg-white rounded-md": "bg-inherit"} w-[100px]`}> Credit Card </button>
                    <button 
                    onClick={()=> { setPaymentMethod(false) }}
                    className={`${paymentMethod=== false? "text-[#396aff] shadow-sm bg-white rounded-md": "bg-inherit"} w-[100px]`}> Paypal </button>
                  </span>
                </div>
                <div>
                  <TextInput
                    label="Card Number*"
                    name="cardNumber"
                    type="text"
                    placeholder="4114 5768 20304 2123"
                  />
                </div>
                <div className='flex flex-row justify-between'>
                  <span className='w-[45%]'>
                    <TextInput
                      label="Expiry*"
                      name="expiry"
                      type="text"
                      placeholder="02/30"
                    />
                  </span>
                  <span className='w-[45%]'>
                    <TextInput
                      label="CVC*"
                      name="cvc"
                      type="text"
                      placeholder="885"
                    />
                  </span>
                </div>
                <button type='submit' className='w-full bg-[#396aff] my-5 flex flex-row justify-center items-center rounded-md h-[40px]'>
                <img src={lockImg} alt='' className='mr-1'/>
                <span className='text-white'> Pay Now $895 </span>
                </button>
              </div>
            </div>
          </Form>
        </Formik>
    </main>
  )
}

export default PaymentForm;
