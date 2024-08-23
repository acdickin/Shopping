import { create } from "zustand";
import { CartItems, Item } from "@/types/CartTypes";

interface CartState {
    cartItems: CartItems;
    addCartItem: (item: Item) => void;
    removeCartItem: (uuid: number) => void;
    decrementItem: (uuid: number) => void;
    incrementItem: (uuid: number) => void;
}

const useCart = create<CartState>((set) => ({
    // inital state
    cartItems: [],

    //functions
    addCartItem: (item: Item) => {
        set((state) => ({
            cartItems: {
                ...state.cartItems,
                item
            }
        }))
    },
    removeCartItem: (uuid: number) => {
        set((state) => ({
            cartItems: state.cartItems.filter((item) => item.uuid !== uuid)
        }))
    },
    decrementItem: (uuid: number) => {
        set((state) => decrement(state, uuid))
    },
    incrementItem: (uuid: number) => {

        set((state) => increament(state, uuid))
    },
}));

const decrement = (state: CartState, uuid: Number) => {
    const updateItem: Item | undefined = state.cartItems.find((item) => item.uuid !== uuid);
    if (updateItem) {
        updateItem.count = updateItem.count + 1
        return ({
            cartItems: {
                ...state.cartItems,
                updateItem
            }
        })
    } else {
        return ({
            cartItems: { ...state.cartItems }
        })
    }
}

const increament = (state: CartState, uuid: Number) => {
    const updateItem: Item | undefined = state.cartItems.find((item) => item.uuid !== uuid);
    if (updateItem) {
        updateItem.count = updateItem.count + 1
        return ({
            cartItems: {
                ...state.cartItems,
                updateItem
            }
        })
    } else {
        return ({
            cartItems: { ...state.cartItems }
        })
    }

}

export default useCart;