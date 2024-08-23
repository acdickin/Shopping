import { create } from "zustand";
import { CartItems, Item } from "@/types/CartTypes";

interface CartState {
    cartItems: CartItems;
    addCartItem: (item: Item) => void;
    removeCartItem: (uuid: number) => void;
    decrementItem: (uuid: number) => void;
    incrementItem: (uuid: number) => void;
}

const useCart = create((set) => ({

    cartItems: [],
    addCartItem: (item: Item) => {
        set({
            cartItems: {
            ..cartItems,
                item
            }
        })
    },
    removeCartItem: (item: Item) => {
        set(state)
    },
}));

export default useCart;