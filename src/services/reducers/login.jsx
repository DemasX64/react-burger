/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { login } from '../../utils/auth-api';

const initialState = {
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
      state.registerRequest = false;
      state.registerSuccess = false;
      state.registerFailed = false;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.registerSuccess = true;
      state.registerFailed = false;
      state.registerRequest = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.createOrderRequest = false;
      state.registerSuccess = false;
      state.registerFailed = true;
    });
  },
});

export const {
  setPassword,
  setEmail,
} = loginSlice.actions;
export default loginSlice.reducer;
