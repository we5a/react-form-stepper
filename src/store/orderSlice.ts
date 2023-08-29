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
  deliveryDate: "",
  special: "",
  paymentMethod: {
    type: "",
    cardNumber: "",
    cvvCode: "",
  },
  deliveryMethod: {
    type: "",
  },
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addCustomerInfo: (state, action: PayloadAction<any>) => {
      state = { ...state, ...action.payload };
    },
    addPaymentMethod: (state, action: PayloadAction<any>) => {
      state.paymentMethod = { ...state.paymentMethod, ...action.payload };
    },
    addDeliveryMethod: (state, action: PayloadAction<any>) => {
      state.deliveryMethod = { ...state.paymentMethod, ...action.payload };
    },
    dropOrder: (state) => {
      state = initialState;
    },
  },
});

export const { addCustomerInfo, addDeliveryMethod, addPaymentMethod } =
  orderSlice.actions;

export default orderSlice.reducer;
