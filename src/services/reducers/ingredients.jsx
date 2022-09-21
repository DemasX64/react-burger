/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getIngredients } from '../../utils/burger-api';

const initialState = {
  ingredients: [],
  getIngredientsRequest: false,
  getIngredientsFailed: false,
  getIngredientsSuccess: false,
};

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getIngredients.pending, (state) => {
      state.getIngredientsSuccess = false;
      state.getIngredientsFailed = false;
      state.getIngredientsRequest = true;
    });
    builder.addCase(getIngredients.fulfilled, (state, action) => {
      state.getIngredientsSuccess = true;
      state.getIngredientsRequest = false;
      state.ingredients = action.payload;
    });
    builder.addCase(getIngredients.rejected, (state) => {
      state.getIngredientsRequest = false;
      state.getIngredientsFailed = true;
    });
  },
});

export default ingredientsSlice.reducer;
