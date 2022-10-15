/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { register } from '../../utils/auth-api';

const initialState = {
  registerRequest: false,
  registerFailed: false,
  registerSuccess: false,

  nameInput: '',
  emailInput: '',
  passwordInput: '',
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setName(state, action) {
      state.nameInput = action.payload;
    },
    setEmail(state, action) {
      state.emailInput = action.payload;
    },
    setPassword(state, action) {
      state.passwordInput = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.registerRequest = false;
      state.registerSuccess = false;
      state.registerFailed = false;
    });
    builder.addCase(register.fulfilled, (state) => {
      state.registerSuccess = true;
      state.registerFailed = false;
      state.registerRequest = false;
    });
    builder.addCase(register.rejected, (state) => {
      state.createOrderRequest = false;
      state.registerSuccess = false;
      state.registerFailed = true;
    });
  },
});

export const {
  setName,
  setPassword,
  setEmail,
} = registerSlice.actions;
export default registerSlice.reducer;
