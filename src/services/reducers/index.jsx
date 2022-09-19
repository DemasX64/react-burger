/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';
import { createOrder, getIngredients } from '../../utils/burger-api';

const initialState = {
  ingredients: [],
  getIngredientsRequest: false,
  getIngredientsFailed: false,
  getIngredientsSuccess: false,

  createOrderRequest: false,
  createOrderFailed: false,
  createOrderSuccess: false,

  bun: {},
  constructor: [],
  currentIngredient: null,
  order: null,
  currentTab: 'Булки',
  isOrderDetailsOpen: false,
  isIngredientDetailsOpen: false,
};

export const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    addIngredientToConstructor(state, action) {
      state.constructor.push(action.payload);
    },
    removeIngredientFromConstructor(state, action) {
      const index = state.constructor.findIndex((value) => value.uuid === action.payload);
      state.constructor.splice(index, 1);
    },
    setOrder(state, action) {
      state.order = action.payload;
    },
    swapItems(state, action) {
      const temp = state.constructor[action.payload.dragIndex];
      state.constructor[action.payload.dragIndex] = state.constructor[action.payload.hoverIndex];
      state.constructor[action.payload.hoverIndex] = temp;
    },
    setCurrentTab(state, action) {
      state.currentTab = action.payload;
    },
    setCurrentIngredient(state, action) {
      state.currentIngredient = action.payload;
    },
    setBun(state, action) {
      state.bun = action.payload;
    },
    toggleOrderDetails(state) {
      state.isOrderDetailsOpen = !state.isOrderDetailsOpen;
    },
    toggleIngredientDetails(state) {
      if (state.isIngredientDetailsOpen) {
        state.currentIngredient = null;
      }
      state.isIngredientDetailsOpen = !state.isIngredientDetailsOpen;
    },
  },
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
      state.bun = action.payload[0];
    });
    builder.addCase(getIngredients.rejected, (state) => {
      state.getIngredientsRequest = false;
      state.getIngredientsFailed = true;
    });

    builder.addCase(createOrder.pending, (state) => {
      state.createOrderFailed = false;
      state.createOrderSuccess = false;
      state.createOrderRequest = true;
    });
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.createOrderSuccess = true;
      state.createOrderRequest = false;
      console.log(action.payload);
      state.order = action.payload;
    });
    builder.addCase(createOrder.rejected, (state) => {
      state.createOrderRequest = false;
      state.createOrderFailed = true;
    });
  },
});

export const {
  addIngredientToConstructor,
  removeIngredientFromConstructor,
  setCurrentTab,
  setBun,
  toggleIngredientDetails,
  toggleOrderDetails,
  setCurrentIngredient,
  swapItems,
} = burgerSlice.actions;
export default burgerSlice.reducer;
