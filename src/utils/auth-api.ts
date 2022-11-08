import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkResponse, handleError } from './api-service';
import { BASE_URL } from './constants';

const loginReq = `${BASE_URL}auth/login`;
const logoutReq = `${BASE_URL}auth/logout`;
const tokenReq = `${BASE_URL}auth/token`;
const registerReq = `${BASE_URL}auth/register`;
const forgotPasswordReq = `${BASE_URL}password-reset`;
const resetPasswordReq = `${BASE_URL}password-reset/reset`;

export const forgotPassword = createAsyncThunk<{email: string}, {}, {}>(
  'auth/forgotPassword',
  async (data, { rejectWithValue }) => {
    try {
      const body = {
        email: data,
      };
      const response = await fetch(forgotPasswordReq, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const json = await checkResponse(response, rejectWithValue);
      return json;
    } catch (err: unknown) {
      handleError(err);
      return rejectWithValue(err);
    }
  },
);

export const resetPassword = createAsyncThunk<any, any, any>(
  'resetPassword/resetPassword',
  async (data:{ password:string, code:string}, { rejectWithValue }) => {
    try {
      const body = {
        password: data.password,
        token: data.code,
      };
      const response = await fetch(resetPasswordReq, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const json = await checkResponse(response, rejectWithValue);
      return json;
    } catch (err) {
      handleError(err);
      return rejectWithValue(err);
    }
  },
);
export const login = createAsyncThunk<any, any, any>(
  'auth/login',
  async (data:{email:string, password:string}, { rejectWithValue }) => {
    try {
      const body = {
        email: data.email,
        password: data.password,
      };
      const response = await fetch(loginReq, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const json = await checkResponse(response, rejectWithValue);
      json.user.password = body.password;
      return json;
    } catch (err) {
      handleError(err);
      return rejectWithValue(err);
    }
  },
);
export const register = createAsyncThunk<any, any, any>(
  'auth/register',
  async (data:{email:string, password:string, name:string}, { rejectWithValue }) => {
    try {
      const body = {
        email: data.email,
        password: data.password,
        name: data.name,
      };
      const response = await fetch(registerReq, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const json = await checkResponse(response, rejectWithValue);
      return json;
    } catch (err) {
      handleError(err);
      return rejectWithValue(err);
    }
  },
);
export const logout = createAsyncThunk<any, any, any>(
  'auth/logout',
  async (data, { rejectWithValue }) => {
    try {
      const body = {
        token: data,
      };
      const response = await fetch(logoutReq, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const json = await checkResponse(response, rejectWithValue);
      return json;
    } catch (err) {
      handleError(err);
      return rejectWithValue(err);
    }
  },
);
export const updateToken = createAsyncThunk<any, any, any>(
  'auth/updateToken',
  async (data, { rejectWithValue }) => {
    try {
      const body = {
        token: data,
      };
      const response = await fetch(tokenReq, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const json = await checkResponse(response, rejectWithValue);
      return json;
    } catch (err) {
      handleError(err);
      return rejectWithValue(err);
    }
  },
);
