/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { createOrder } from '../../utils/burger-api';

const initialState = {
  createOrderRequest: false,
  createOrderFailed: false,
  createOrderSuccess: false,

  order: null,
  isOrderDetailsOpen: false,
};

export const orderDetailsSlice = createSlice({
  name: 'orderDetails',
  initialState,
  reducers: {
    setOrder(state, action) {
      state.order = action.payload;
    },
    toggleOrderDetails(state) {
      state.isOrderDetailsOpen = !state.isOrderDetailsOpen;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createOrder.pending, (state) => {
      state.createOrderFailed = false;
      state.createOrderSuccess = false;
      state.createOrderRequest = true;
    });
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.createOrderSuccess = true;
      state.createOrderRequest = false;
      state.order = action.payload;
    });
    builder.addCase(createOrder.rejected, (state) => {
      state.createOrderRequest = false;
      state.createOrderFailed = true;
    });
  },
});

export const {
  setOrder,
  toggleOrderDetails,
} = orderDetailsSlice.actions;
export default orderDetailsSlice.reducer;
