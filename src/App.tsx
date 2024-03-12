import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentForm from './payment-form';
import PreviewFormDetails from './preview-form-details';
import { OrderInfoContextProvider } from './context/context';

import './App.css';



function App() {
  return (
    <>
    <OrderInfoContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<PaymentForm />} />
            <Route path="/previewformdetails" element={<PreviewFormDetails />} />
          </Routes>
        </Router>
    </OrderInfoContextProvider>
    </>
  )
}

export default App
