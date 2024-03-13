import { useState, useContext } from "react";
import cashImg from "./assets/cash-img.svg";
import successImg from "./assets/successlogo.svg";
import { OrderInfoContext } from "./context/context";
import { useNavigate } from "react-router-dom";


const PreviewFormDetails = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const infoContext = useContext(OrderInfoContext);

    const navigate = useNavigate();

    return (
        <div className="mx-auto md:w-[40%] lg:w-[40%] md:border lg:border md:border-gray-300 lg:border-gray-300 md:shadow-lg lg:shadow-lg md:rounded-[20px] lg:rounded-[20px] py-5 px-4">
            <span className="font-bold"> Preview Info </span>
            <div className='flex flex-col justify-between py-4 border-b border-gray-200'>
                <span className="underline"> Amount </span>
                <span className='flex flex-row justify-between'>
                    <span> Subtotal </span>
                    <span className='font-bold'> $895.00 </span>
                </span>
                <span className='flex flex-row justify-between'>
                    <span> Delivery </span>
                    <span className='font-bold'> $0.00 </span>
                </span>
                <span className='flex flex-row justify-between'>
                    <span> Total </span>
                    <span className='font-bold'> $895.00 </span>
                </span>
            </div>
            <div className='flex flex-col justify-between py-4 border-b border-gray-200'>
                <span className="underline"> Delivery Info </span>
                <span className='flex flex-row justify-between'>
                    <span> First Name </span>
                    <span className='font-bold'> {infoContext?.info.firstName} </span>
                </span>
                <span className='flex flex-row justify-between'>
                    <span> Last Name </span>
                    <span className='font-bold'> {infoContext?.info.lastName} </span>
                </span>
                <span className='flex flex-row justify-between'>
                    <span> Address </span>
                    <span className='font-bold'> {infoContext?.info.address} </span>
                </span>
                <span className='flex flex-row justify-between'>
                    <span> City </span>
                    <span className='font-bold'> {infoContext?.info.city} </span>
                </span>
                <span className='flex flex-row justify-between'>
                    <span> State </span>
                    <span className='font-bold'> {infoContext?.info.state} </span>
                </span>
                <span className='flex flex-row justify-between'>
                    <span> Zip </span>
                    <span className='font-bold'> {infoContext?.info.zip} </span>
                </span>
                <span className='flex flex-row justify-between'>
                    <span> Phone </span>
                    <span className='font-bold'> {infoContext?.info.phone} </span>
                </span>
            </div>
            <div className='flex flex-col justify-between py-4 border-b border-gray-200'>
                <span className="underline"> Payment </span>
                <span className='flex flex-row justify-between'>
                    <span> Card Number </span>
                    <span className='font-bold'> {infoContext?.info.cardNumber} </span>
                </span>
                <span className='flex flex-row justify-between'>
                    <span> Expiry </span>
                    <span className='font-bold'> {infoContext?.info.expiry} </span>
                </span>
                <span className='flex flex-row justify-between'>
                    <span> CVC </span>
                    <span className='font-bold'> {infoContext?.info.cvc} </span>
                </span>
            </div>
            <button type='submit' 
            onClick={()=> setIsModalOpen(true)}
            className='w-full bg-[#396aff] mt-5 flex flex-row justify-center items-center rounded-md h-[40px]'>
                <img src={cashImg} alt='' className='mr-1'/>
                <span className='text-white'> Confirm Payment </span>
            </button>
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
                    <div className="flex flex-col justify-center items-center w-[90%] md:w-[30%] lg:w-[30%] bg-white py-4 md:p-8 lg:p-8 rounded-lg shadow-md">
                        <img 
                        className="w-[100px] pb-4"
                        src={successImg} alt="success" />
                        <span className="text-[#46257A] text-[18px] md:text-[30px] lg:text-[30px] text-center leading-8 w-[23rem] pb-4 px-8"> Payment Successful! </span>
                        <span className="text-center text-[13px]"> Your Order #123456 has been confirmed.  </span>
                        <button className=" mt-4 bg-[#396aff] hover:bg-blue-600 text-black px-4 py-2 rounded-md" 
                        onClick={() => {
                            setIsModalOpen(false)
                            setTimeout(() => navigate("/"), 1000)
                        }}
                        >Done</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PreviewFormDetails;