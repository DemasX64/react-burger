/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { IOrder } from '../../utils/types';

interface IProfileFeedSliceState {
  isConnected: boolean,
  orders:IOrder[],
}
const initialState:IProfileFeedSliceState = {
  isConnected: false,
  orders: [],
};

export const profileFeedSlice = createSlice({
  name: 'profileFeed',
  initialState,
  reducers: {
    setIsConnected(state, action) {
      state.isConnected = action.payload;
    },
    setData(state, action) {
      state.orders = action.payload.orders;
    },
  },
});

export const { setIsConnected, setData } = profileFeedSlice.actions;
export default profileFeedSlice.reducer;
