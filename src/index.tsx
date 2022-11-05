import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import AppHeader from './components/app-header/app-header';
import store from './services/store';

render(
  <Provider store={store}>
    <BrowserRouter>
      <AppHeader />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
