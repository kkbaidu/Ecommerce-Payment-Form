import { ShoppingCartData } from "./definitions";
import sneakerOne from "../assets/sneaker-1.png";
import sneakerTwo from "../assets/sneaker-2.png";
import sneakerThree from "../assets/sneaker-3.png";
import sneakerFour from "../assets/sneaker-4.png";

export const shoppingCartData: ShoppingCartData[] = [
    {
        image: sneakerOne,
        aboutItem: {
            name: "Basketball Sneakers",
            description: "Off-Court 3.0 Sneakers",
            id: 2441310,
        },
        purchaseDetails: {
            price: 270,
            size: 43,
            quantity: 1,
        },
    },
    {
        image: sneakerTwo,
        aboutItem: {
            name: "Black Running Shoe",
            description: "Arch Fit 2.0",
            id: 1445781,
        },
        purchaseDetails: {
            price: 120,
            size: 40,
            quantity: 1,
        },
    },
    {
        image: sneakerThree,
        aboutItem: {
            name: "Record 2.0 - Kieran",
            description: "45781014",
            id: 0,
        },
        purchaseDetails: {
            price: 95,
            size: 40,
            quantity: 4,
        },
    },
    {
        image: sneakerFour,
        aboutItem: {
            name: "Red Fit Casual",
            description: "Arch Fit Dermitt",
            id: 14287441,
        },
        purchaseDetails: {
            price: 410,
            size: 42,
            quantity: 1,
        },
    }
]