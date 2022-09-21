/* eslint-disable no-underscore-dangle */
import { createAsyncThunk } from '@reduxjs/toolkit';

/* eslint-disable max-len */
const getIngredientsReq = 'https://norma.nomoreparties.space/api/ingredients';
const createOrderReq = 'https://norma.nomoreparties.space/api/orders';

// const checkResponse = (res) => (res.ok ? res.json() : res.json().then((err) => Promise.reject(err)));

const handleError = (err) => {
  console.log(err);
  alert('Ошибка получения данных');
};

const getIngredients = createAsyncThunk(
  'ingredients/getIngredients',
  async (data, thunkAPI) => {
    try {
      const response = await fetch(getIngredientsReq);
      if (!response.ok) {
        handleError(response.statusText);
        thunkAPI.rejectWithValue(response.statusText);
      }
      const json = await response.json();
      return json.data;
    } catch (err) {
      handleError(err);
      return thunkAPI.rejectWithValue(err);
    }
  },
);

const createOrder = createAsyncThunk(
  'orderDetails/createOrder',
  async (data, thunkAPI) => {
    try {
      const body = {
        ingredients: thunkAPI.getState().burgerConstructor.constructor.map((item) => item._id),
      };
      body.ingredients.push(thunkAPI.getState().burgerConstructor.bun._id);
      body.ingredients.unshift(thunkAPI.getState().burgerConstructor.bun._id);
      const response = await fetch(createOrderReq, {
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

export {
  createOrder, getIngredients,
};
