import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import companyLogo from './assets/logo.png';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='flex flex-row justify-start items-center pl-4 md:pl-20 lg:pl-20 py-[20px] text-[25px] font-extrabold'> 
      <img src={companyLogo} alt="" className='w-[70px]' />
      <span> KING'S STORE </span> 
    </div>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
