import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './components/app/app';
import burgerReducer from './services/reducers/index';

const root = ReactDOM.createRoot(
  document.getElementById('root'),
);

const store = configureStore({
  reducer: {
    burger: burgerReducer,
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
