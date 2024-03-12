import React, { useState, createContext, ReactNode } from "react";
import { OrderInfoObj } from "../lib/definitions";

interface ContextType {
    info: OrderInfoObj;
    setInfo: React.Dispatch<React.SetStateAction<OrderInfoObj>>;
}

export const OrderInfoContext = createContext<ContextType | undefined>(undefined);

type Props = {
    children: ReactNode;
}

export const OrderInfoContextProvider = ({ children } : Props) => {
    const [info, setInfo] = useState<OrderInfoObj>({
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
      });

  
    return (
      <OrderInfoContext.Provider value={{ info, setInfo }}>
        {children}
      </OrderInfoContext.Provider>
    );
  };