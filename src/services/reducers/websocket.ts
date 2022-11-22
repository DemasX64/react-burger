/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const wsSlice = createSlice({
  name: 'ws',
  initialState,
  reducers: {
    connect(state, action) {},
    disconnect(state, action) {},
    setIsConnected(state, action) {},
    setData(state, action) {},
  },
});

export type wsActions = typeof wsSlice.actions;
