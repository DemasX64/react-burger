/* eslint-disable import/no-cycle */
/* eslint-disable no-underscore-dangle */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../services/store';
import { checkResponse, handleError } from './api-service';
import { BASE_URL } from './constants';
import { getCookie } from './cookie-service';

/* eslint-disable max-len */
const getIngredientsReq = `${BASE_URL}ingredients`;
const createOrderReq = `${BASE_URL}orders`;

const getIngredients = createAsyncThunk(
  'ingredients/getIngredients',
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(getIngredientsReq);
      const json = await checkResponse(response, rejectWithValue);
      return json.data;
    } catch (err) {
      handleError(err);
      return rejectWithValue(err);
    }
  },
);

const createOrder = createAsyncThunk(
  'orderDetails/createOrder',
  async (data, { getState, rejectWithValue }) => {
    try {
      const body = {
        ingredients: (getState() as RootState).burgerConstructor.constructor.map((item) => item._id),
      };
      body.ingredients.push((getState() as RootState).burgerConstructor.bun._id);
      body.ingredients.unshift((getState() as RootState).burgerConstructor.bun._id);
      const response = await fetch(createOrderReq, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          Authorization: getCookie('accessToken') || '',
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

export {
  createOrder, getIngredients,
};
