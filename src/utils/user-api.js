import { createAsyncThunk } from '@reduxjs/toolkit';

/* eslint-disable max-len */
const userReq = 'https://norma.nomoreparties.space/api/auth/user';

// const checkResponse = (res) => (res.ok ? res.json() : res.json().then((err) => Promise.reject(err)));

const handleError = (err) => {
  console.log(err);
  alert('Ошибка получения данных');
};

export const getUser = createAsyncThunk(
  'auth/getUser',
  async (data, thunkAPI) => {
    console.log(data);
    try {
      const response = await fetch(userReq, {
        method: 'GET',
        headers: {
          authorization: data,
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
export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (data, thunkAPI) => {
    try {
      const body = {};
      if (data.email) {
        body.email = data.email;
      }
      if (data.name) {
        body.name = data.name;
      }
      if (data.password) {
        body.password = data.password;
      }
      const response = await fetch(userReq, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          authorization: data.token,
        },
        body: JSON.stringify(body),
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
