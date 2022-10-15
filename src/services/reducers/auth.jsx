/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  login, logout, updateToken,
} from '../../utils/auth-api';
import { setCookie } from '../../utils/cookie-service';
import { getUser } from '../../utils/user-api';

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    deleteUser(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {

    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action);
      state.user = action.payload.user;
      setCookie('token', action.payload.refreshToken, null);
    });
    builder.addCase(login.rejected, (state) => {
    });

    builder.addCase(logout.pending, (state) => {

    });
    builder.addCase(logout.fulfilled, (state) => {
      setCookie('token', null);
      state.user = null;
    });
    builder.addCase(logout.rejected, (state) => {

    });

    builder.addCase(updateToken.pending, (state) => {

    });
    builder.addCase(updateToken.fulfilled, (state, action) => {
    });
    builder.addCase(updateToken.rejected, (state) => {

    });
    builder.addCase(getUser.pending, (state) => {

    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });
    builder.addCase(getUser.rejected, (state) => {

    });
  },
});

export const { setUser, deleteUser } = authSlice.actions;
export default authSlice.reducer;
