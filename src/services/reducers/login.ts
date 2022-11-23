/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { login } from '../../utils/auth-api';

interface ILoginSliceState {
  loginRequest: boolean,
  loginFailed: boolean,
  loginSuccess: boolean,
  emailInput: string,
  passwordInput: string
}

const initialState: ILoginSliceState = {
  loginRequest: false,
  loginFailed: false,
  loginSuccess: false,

  emailInput: '',
  passwordInput: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail(state, action) {
      state.emailInput = action.payload;
    },
    setPassword(state, action) {
      state.passwordInput = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loginRequest = true;
      state.loginSuccess = false;
      state.loginFailed = false;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.loginSuccess = true;
      state.loginFailed = false;
      state.loginRequest = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.loginRequest = false;
      state.loginSuccess = false;
      state.loginFailed = true;
    });
  },
});

export const {
  setPassword,
  setEmail,
} = loginSlice.actions;
export default loginSlice.reducer;
