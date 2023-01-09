import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "./types";

const initialState = {
  cart: [],
  serviceItems: [],
  discountItems: [],
  totalAmount: 0,
} as CartState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.serviceItems.find(
        (item) => item.name === action.payload.name
      );

      itemInCart
        ? (state.serviceItems = state.serviceItems.filter(
            (itemInCart) => itemInCart.name !== action.payload.name
          ))
        : state.serviceItems.push({ ...action.payload });
    },
    addDiscountToCart: (state, action) => {
      const discountInCart = state.discountItems.find(
        (item) => item.name === action.payload.name
      );
      discountInCart
        ? (state.discountItems = state.discountItems.filter(
            (discountInCart) => discountInCart.name !== action.payload.name
          ))
        : state.discountItems.push({ ...action.payload });
    },
    discount: (state) => {
      state.discountItems.map(
        (discountItem) => (discountItem.serviceItems = state.serviceItems)
      );
      state.discountItems.map(
        (discountItem) =>
          (discountItem.discountAmount = state.serviceItems.reduce(
            (amount, serviceItem) =>
              amount +
              serviceItem.count * serviceItem.price * discountItem.rate,
            0
          ))
      );
    },
    removeServiceItem: (state, action) => {
      const removeServiceItem = state.serviceItems.find(
        (serviceItem) => serviceItem.name === action.payload.name
      );

      if (removeServiceItem) {
        state.serviceItems = state.serviceItems.filter(
          (removeItem) => removeItem.name !== action.payload.name
        );
      }
    },
    removeDiscountItem: (state, action) => {
      const removeDiscountItem = state.discountItems.find(
        (discountItem) => discountItem.name === action.payload.name
      );

      if (removeDiscountItem) {
        state.discountItems = state.discountItems.filter(
          (removeItem) => removeItem.name !== action.payload.name
        );
      }
    },
    addQuantity: (state, action) => {
      const serviceItem = state.serviceItems.find(
        (item) => item.name === action.payload.name
      );
      if (serviceItem) {
        serviceItem.count++;

        state.discountItems.map(
          (discountItem) =>
            (discountItem.discountAmount = state.serviceItems.reduce(
              (amount, serviceItem) =>
                amount +
                serviceItem.count * serviceItem.price * discountItem.rate,
              0
            ))
        );

        return;
      }
    },
    removeQuantity: (state, action) => {
      const serviceItem = state.serviceItems.find(
        (item) => item.name === action.payload.name
      );

      if (serviceItem && serviceItem.count > 1) {
        serviceItem.count--;

        state.discountItems.map(
          (discountItem) =>
            (discountItem.discountAmount = state.serviceItems.reduce(
              (amount, serviceItem) =>
                amount +
                serviceItem.count * serviceItem.price * discountItem.rate,
              0
            ))
        );

        return;
      }
    },
    addNameToCart: (state, action) => {
      const nameItem = state.cart.find((name) => name === action.payload.name);

      nameItem
        ? (state.cart = state.cart.filter(
            (nameItem) => nameItem !== action.payload.name
          ))
        : state.cart.push(action.payload.name);
    },
    discountChange: (state, action) => {
      const selectedDiscountItem = state.discountItems.find(
        (discountItem) => discountItem.name === action.payload[0]
      );
      if (selectedDiscountItem) {
        selectedDiscountItem.serviceItems = selectedDiscountItem.serviceItems.filter(
          (serviceItem) => serviceItem.name !== action.payload[1]
        );
        selectedDiscountItem.discountAmount = selectedDiscountItem.serviceItems.reduce(
          (amount, serviceItem) =>
            amount +
            serviceItem.count * serviceItem.price * selectedDiscountItem.rate,
          0
        );
      }
    },
    calculatorTotalAmount: (state) => {
      const discountBefore = state.serviceItems.reduce(
        (amount, serviceItem) => amount + serviceItem.price * serviceItem.count,
        0
      );
      const discount = state.discountItems.reduce(
        (amount, discountItem) => amount + discountItem.discountAmount,
        0
      );
      state.totalAmount = discountBefore - discount;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  addDiscountToCart,
  discount,
  removeServiceItem,
  removeDiscountItem,
  addQuantity,
  removeQuantity,
  addNameToCart,
  discountChange,
  calculatorTotalAmount,
} = cartSlice.actions;
