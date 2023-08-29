import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface OrderState {
  [key: string]: any;
}

// Define the initial state using that type
const initialState: OrderState = {
  id: "",
  firstName: "",
  lastName: "",
  phone: "",
  deliveryDate: "2023-09-02",
  special: "",
  paymentMethod: {
    type: "credit-card",
    cardNumber: "",
    cvvCode: "",
  },
  deliveryMethod: {
    type: "ukrposhta",
  },
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addCustomerInfo: (state, action: PayloadAction<any>) => {
      return { ...state, ...action.payload };
    },
    addPaymentMethod: (state, action: PayloadAction<any>) => {
      state.paymentMethod = { ...state.paymentMethod, ...action.payload };
      return state;
    },
    addDeliveryMethod: (state, action: PayloadAction<any>) => {
      state.deliveryMethod = { ...state.paymentMethod, ...action.payload };
      return state;
    },
    dropOrder: (state) => {
      return initialState;
    },
  },
});

export const { addCustomerInfo, addDeliveryMethod, addPaymentMethod } =
  orderSlice.actions;

export default orderSlice.reducer;
