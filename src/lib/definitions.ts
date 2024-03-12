
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