/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { IIngredientProp } from '../../utils/types';

interface IConstructorSliceState {
  bun: IIngredientProp,
  constructor: Array<IIngredientProp>
}

const initialState:IConstructorSliceState = {
  bun: {
    _id: '',
    name: '',
    type: '',
    proteins: 0,
    fat: 0,
    carbohydrates: 0,
    calories: 0,
    price: 0,
    _v: 0,
    image: '',
    image_large: '',
    image_mobile: '',
  },
  constructor: [],
};

export const constructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState,
  reducers: {
    addIngredientToConstructor(state, action) {
      state.constructor.push(action.payload);
    },
    removeIngredientFromConstructor(state, action) {
      const index = state.constructor.findIndex((value) => value.uuid === action.payload);
      state.constructor.splice(index, 1);
    },
    swapItems(state, action) {
      const temp = state.constructor[action.payload.dragIndex];
      state.constructor[action.payload.dragIndex] = state.constructor[action.payload.hoverIndex];
      state.constructor[action.payload.hoverIndex] = temp;
    },
    setBun(state, action) {
      state.bun = action.payload;
    },
  },
});

export const {
  addIngredientToConstructor,
  removeIngredientFromConstructor,
  setBun,
  swapItems,
} = constructorSlice.actions;
export default constructorSlice.reducer;
