
export type ShoppingCartData = {
    image: any,
    aboutItem: {
        name: string,
        description: string,
        id: number,
    },
    purchaseDetails: {
        price: number,
        size: number,
        quantity: number,
    },
}

export interface OrderInfoObj {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    cardNumber: string;
    expiry: string;
    cvc: string;
  }