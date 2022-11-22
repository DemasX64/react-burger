import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkResponse, handleError } from './api-service';
import { BASE_URL } from './constants';
import { getCookie } from './cookie-service';
import { IUser } from './types';

/* eslint-disable max-len */
const userReq = `${BASE_URL}auth/user`;

export const getUser = createAsyncThunk(
  'auth/getUser',
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(userReq, {
        method: 'GET',
        headers: {
          Authorization: getCookie('accessToken') || '',
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
export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (data: IUser, { rejectWithValue }) => {
    try {
      const body: any = {};
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
          authorization: data.token || '',
        },
        body: JSON.stringify(body),
      });
      const json = await checkResponse(response, rejectWithValue);
      return json;
    } catch (err) {
      handleError(err);
      return rejectWithValue(err);
    }
  },
);
