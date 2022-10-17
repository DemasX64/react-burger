/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { forgotPassword } from '../../utils/auth-api';

const initialState = {
  forgotPasswordPending: false,
  forgotPasswordSuccess: false,
  forgotPasswordFailed: false,

  email: '',
};

export const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(forgotPassword.pending, (state) => {
      state.forgotPasswordPending = true;
      state.forgotPasswordSuccess = false;
      state.forgotPasswordFailed = false;
    });
    builder.addCase(forgotPassword.fulfilled, (state) => {
      state.forgotPasswordPending = false;
      state.forgotPasswordSuccess = true;
      state.forgotPasswordFailed = false;
    });
    builder.addCase(forgotPassword.rejected, (state) => {
      state.forgotPasswordPending = false;
      state.forgotPasswordSuccess = false;
      state.forgotPasswordFailed = true;
    });
  },
});

export const { setEmail } = forgotPasswordSlice.actions;
export default forgotPasswordSlice.reducer;
