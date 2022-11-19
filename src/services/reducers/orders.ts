/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { IOrder } from '../../utils/types';

interface IFeedSliceState {
  isConnected: boolean,
  orders:IOrder[],
  total: number,
  totalToday: number,
}
const initialState:IFeedSliceState = {
  isConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    connect(state, action) {
    },
    disconnect() {
    },
    setIsConnected(state, action) {
      state.isConnected = action.payload;
    },
    setData(state, action) {
      state.orders = action.payload.orders;
      state.total = action.payload.total;
      state.totalToday = action.payload.totalToday;
    },
  },
});

export const {
  connect, setIsConnected, setData, disconnect,
} = ordersSlice.actions;
export default ordersSlice.reducer;
