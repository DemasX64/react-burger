import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './components/app/app';
import burgerReducer from './services/reducers/index';
import constructorReducer from './services/reducers/constructor';
import ingredientsReducer from './services/reducers/ingredients';
import ingredientDetailsReducer from './services/reducers/ingredient-details';
import orderDetailsReducer from './services/reducers/order-details';

const root = ReactDOM.createRoot(
  document.getElementById('root'),
);

const store = configureStore({
  reducer: {
    burger: burgerReducer,
    ingredients: ingredientsReducer,
    ingredientDetails: ingredientDetailsReducer,
    orderDetails: orderDetailsReducer,
    burgerConstructor: constructorReducer,
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
