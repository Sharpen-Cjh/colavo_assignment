import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface Item {
  count: number;
  name: string;
  price: number;
}

const initialState = {
  cart: [{ count: 1, name: "", price: 1 }],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.name === action.payload.name
      );
      itemInCart
        ? (state.cart = state.cart.filter(
            (itemInCart) => itemInCart.name !== action.payload.name
          ))
        : state.cart.push({ ...action.payload });
    },
  },
  //   incrementCount: (state, action) => {
  //     const item = state.cart.find((item) => item.name === action.payload);
  //     item.count++;
  //   },
  //   decrementCount: (state, action) => {
  //     const item = state.cart.find((item) => item.id === action.payload);
  //     if (item.count === 1) {
  //       item.count = 1;
  //     } else {
  //       item.count--;
  //     }
  //   },
  //   removeItem: (state, action) => {
  //     const removeItem = state.cart.filter(
  //       (item) => item.name !== action.payload
  //     );
  //     state.cart = removeItem;
  //   },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  // incrementCount,
  // decrementCount,
  // removeItem,
} = cartSlice.actions;
