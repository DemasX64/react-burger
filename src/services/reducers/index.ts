/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';
import { CATEGORIES } from '../../utils/constants';

interface IBurgerSliceState {
  currentTab: string,
  bunInView: boolean,
  mainInView: boolean,
  sauceInView: boolean,
}

const initialState: IBurgerSliceState = {
  currentTab: CATEGORIES.BUN.NAME,
  bunInView: false,
  mainInView: false,
  sauceInView: false,
};

const calculateTab = (state:IBurgerSliceState) => {
  if (state.bunInView) {
    state.currentTab = CATEGORIES.BUN.NAME;
  } else if (state.sauceInView) {
    state.currentTab = CATEGORIES.SAUCE.NAME;
  } else {
    state.currentTab = CATEGORIES.MAIN.NAME;
  }
};

export const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    setCurrentTab(state, action) {
      state.currentTab = action.payload;
    },
    setBunInView(state, action) {
      state.bunInView = action.payload;
      calculateTab(state);
    },
    setMainInView(state, action) {
      state.mainInView = action.payload;
      calculateTab(state);
    },
    setSauceInView(state, action) {
      state.sauceInView = action.payload;
      calculateTab(state);
    },
  },
});

export const {
  setCurrentTab,
  setBunInView,
  setMainInView,
  setSauceInView,
} = burgerSlice.actions;
export default burgerSlice.reducer;
