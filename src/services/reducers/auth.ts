/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  login, logout, updateToken,
} from '../../utils/auth-api';
import { setCookie } from '../../utils/cookie-service';
import { getUser } from '../../utils/user-api';

// interface IAuthSliceState {
//   user:
// }

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  isLogged: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isLogged = true;
    },
    deleteUser(state) {
      state.user = {
        name: '',
        email: '',
        password: '',
      };
      state.isLogged = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {

    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLogged = true;
      state.user = action.payload.user;
      setCookie('accessToken', action.payload.accessToken, { expires: 1200 });
      setCookie('refreshToken', action.payload.refreshToken, null);
    });
    builder.addCase(login.rejected, (state) => {
    });

    builder.addCase(logout.pending, (state) => {

    });
    builder.addCase(logout.fulfilled, (state) => {
      setCookie('accessToken', '', {});
      setCookie('refreshToken', '', {});
      state.user = {
        name: '',
        email: '',
        password: '',
      };
      state.isLogged = false;
    });
    builder.addCase(logout.rejected, (state) => {

    });

    builder.addCase(updateToken.pending, (state) => {

    });
    builder.addCase(updateToken.fulfilled, (state, action) => {
      // setCookie('accessToken', action.payload.accessToken);
      // setCookie('refreshToken', action.payload.refreshToken);
      setCookie('accessToken', action.payload.accessToken, { expires: 1200 });
      setCookie('refreshToken', action.payload.refreshToken, null);
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
