/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';
import burgerReducer from './reducers/index';
import constructorReducer from './reducers/constructor';
import ingredientsReducer from './reducers/ingredients';
import ingredientDetailsReducer from './reducers/ingredient-details';
import orderDetailsReducer from './reducers/order-details';
import resetPasswordReducer from './reducers/resetPassword';
import forgotPasswordReducer from './reducers/forgotPassword';
import authReducer from './reducers/auth';
import registerReducer from './reducers/register';
import loginReducer from './reducers/login';
import ordersReducer, { ordersSlice } from './reducers/orders';
import { socketMiddleware } from '../middleware/socketMiddleware';

const store = configureStore({
  reducer: {
    burger: burgerReducer,
    ingredients: ingredientsReducer,
    ingredientDetails: ingredientDetailsReducer,
    orderDetails: orderDetailsReducer,
    burgerConstructor: constructorReducer,
    resetPassword: resetPasswordReducer,
    forgotPassword: forgotPasswordReducer,
    auth: authReducer,
    register: registerReducer,
    login: loginReducer,
    orders: ordersReducer,
  },
  // eslint-disable-next-line max-len
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(socketMiddleware(ordersSlice.actions)),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
