/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentIngredient: null,
  isIngredientDetailsOpen: false,
};

export const ingredientDetailsSlice = createSlice({
  name: 'ingredientDetails',
  initialState,
  reducers: {
    setCurrentIngredient(state, action) {
      state.currentIngredient = action.payload;
    },
    toggleIngredientDetails(state) {
      if (state.isIngredientDetailsOpen) {
        state.currentIngredient = null;
      }
      state.isIngredientDetailsOpen = !state.isIngredientDetailsOpen;
    },
  },
});

export const {
  toggleIngredientDetails,
  setCurrentIngredient,
} = ingredientDetailsSlice.actions;
export default ingredientDetailsSlice.reducer;
