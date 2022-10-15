/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { resetPassword } from '../../utils/auth-api';

const initialState = {
  resetPasswordPending: false,
  resetPasswordSuccess: false,
  resetPasswordFailed: false,

  password: '',
  token: '',
};

export const resetPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState,
  reducers: {
    setPassword(state, action) {
      state.password = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetPassword.pending, (state) => {
      state.resetPasswordPending = true;
      state.resetPasswordSuccess = false;
      state.resetPasswordFailed = false;
    });
    builder.addCase(resetPassword.fulfilled, (state) => {
      state.resetPasswordPending = false;
      state.resetPasswordSuccess = true;
      state.resetPasswordFailed = false;
    });
    builder.addCase(resetPassword.rejected, (state) => {
      state.resetPasswordPending = false;
      state.resetPasswordSuccess = false;
      state.resetPasswordFailed = true;
    });
  },
});

export const { setPassword, setToken } = resetPasswordSlice.actions;
export default resetPasswordSlice.reducer;
