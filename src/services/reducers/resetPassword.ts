/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { resetPassword } from '../../utils/auth-api';

interface IResetPasswordSliceState {
  resetPasswordPending: boolean,
  resetPasswordSuccess: boolean,
  resetPasswordFailed: boolean,
  password: string,
  token: string
}

const initialState: IResetPasswordSliceState = {
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
