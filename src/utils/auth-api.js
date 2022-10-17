import { createAsyncThunk } from '@reduxjs/toolkit';

const loginReq = 'https://norma.nomoreparties.space/api/auth/login';
const logoutReq = 'https://norma.nomoreparties.space/api/auth/logout';
const tokenReq = 'https://norma.nomoreparties.space/api/auth/token';
const registerReq = 'https://norma.nomoreparties.space/api/auth/register';
const forgotPasswordReq = 'https://norma.nomoreparties.space/api/password-reset';
const resetPasswordReq = 'https://norma.nomoreparties.space/api/password-reset/reset';

const handleError = (err) => {
  console.log(err);
  alert('Ошибка получения данных');
};

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (data, thunkAPI) => {
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
      if (!response.ok) {
        handleError(response.statusText);
        thunkAPI.rejectWithValue(response.statusText);
      }
      const json = await response.json();
      return json;
    } catch (err) {
      handleError(err);
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const resetPassword = createAsyncThunk(
  'resetPassword/resetPassword',
  async (data, thunkAPI) => {
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
      if (!response.ok) {
        handleError(response.statusText);
        thunkAPI.rejectWithValue(response.statusText);
      }
      const json = await response.json();
      return json;
    } catch (err) {
      handleError(err);
      return thunkAPI.rejectWithValue(err);
    }
  },
);
export const login = createAsyncThunk(
  'auth/login',
  async (data, thunkAPI) => {
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
      if (!response.ok) {
        handleError(response.statusText);
        thunkAPI.rejectWithValue(response.statusText);
      }
      const json = await response.json();
      json.user.password = body.password;
      return json;
    } catch (err) {
      handleError(err);
      return thunkAPI.rejectWithValue(err);
    }
  },
);
export const register = createAsyncThunk(
  'auth/register',
  async (data, thunkAPI) => {
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
      if (!response.ok) {
        handleError(response.statusText);
        thunkAPI.rejectWithValue(response.statusText);
      }
      const json = await response.json();
      return json;
    } catch (err) {
      handleError(err);
      return thunkAPI.rejectWithValue(err);
    }
  },
);
export const logout = createAsyncThunk(
  'auth/logout',
  async (data, thunkAPI) => {
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
      if (!response.ok) {
        handleError(response.statusText);
        thunkAPI.rejectWithValue(response.statusText);
      }
      const json = await response.json();
      return json;
    } catch (err) {
      handleError(err);
      return thunkAPI.rejectWithValue(err);
    }
  },
);
export const updateToken = createAsyncThunk(
  'auth/updateToken',
  async (data, thunkAPI) => {
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
      if (!response.ok) {
        handleError(response.statusText);
        thunkAPI.rejectWithValue(response.statusText);
      }
      const json = await response.json();
      console.log(json);
      return json;
    } catch (err) {
      handleError(err);
      return thunkAPI.rejectWithValue(err);
    }
  },
);
