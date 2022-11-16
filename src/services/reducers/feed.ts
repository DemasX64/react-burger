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

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    setIsConnected(state, action) {
      state.isConnected = action.payload;
    },
    setData(state, action) {
      state.orders = action.payload.orders;
      state.total = action.payload.total;
      state.totalToday = action.payload.totalToday;
    },
  },
  extraReducers: (builder) => {

  },
});

export const { setIsConnected, setData } = feedSlice.actions;
export default feedSlice.reducer;
