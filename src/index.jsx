import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import burgerReducer from './services/reducers/index';
import constructorReducer from './services/reducers/constructor';
import ingredientsReducer from './services/reducers/ingredients';
import ingredientDetailsReducer from './services/reducers/ingredient-details';
import orderDetailsReducer from './services/reducers/order-details';
import resetPasswordReducer from './services/reducers/resetPassword';
import forgotPasswordReducer from './services/reducers/forgotPassword';
import authReducer from './services/reducers/auth';
import AppHeader from './components/app-header/app-header';
import registerReducer from './services/reducers/register';
import loginReducer from './services/reducers/login';

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
  },
});

render(
  <Provider store={store}>
    <BrowserRouter>
      <AppHeader />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
