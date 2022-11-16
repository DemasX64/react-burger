import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
  Route, Switch, useLocation, useHistory,
} from 'react-router-dom';
import ForgotPassword from '../../pages/auth/reset-password/reset-password';
import Login from '../../pages/auth/login/login';
import Register from '../../pages/auth/register/register';
import ResetPassword from '../../pages/auth/forgot-password/forgot-password';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Profile from '../../pages/profile/profile';
import { getIngredients } from '../../utils/burger-api';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import IngredientsDetails from '../ingredients-details/ingredients-details';
import styles from './app.module.css';
import ProtectedRoute from '../protected-route/protected-route';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { updateToken } from '../../utils/auth-api';
import { getCookie } from '../../utils/cookie-service';
import { getUser } from '../../utils/user-api';
import useAppDispatch from '../../hooks/useAppDispatch';
import FeedPage from '../../pages/feed-page/feed-page';
import { setData, setIsConnected } from '../../services/reducers/feed';
import OrderPage from '../order-page/order-page';

const App = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  useEffect(() => {
    const accessToken = getCookie('accessToken');
    const refreshToken = getCookie('refreshToken');

    (async () => {
      if (accessToken) {
        const isUserGet = await dispatch(getUser(accessToken)).unwrap();
        if (!isUserGet) {
          const updateTokens: any = await dispatch(updateToken(refreshToken));
          if (updateTokens) {
            dispatch(getUser(updateTokens.accessToken));
          }
        }
      }
    })();
  }, []);

  useEffect(() => {
    const ws = new WebSocket('wss://norma.nomoreparties.space/orders/all');
    ws.onopen = () => {
      dispatch(setIsConnected(true));
    };
    ws.onmessage = (event: MessageEvent) => {
      console.log(`Получены данные: ${JSON.parse(event.data)}`);
      dispatch(setData(JSON.parse(event.data)));
    };
    ws.onclose = () => {
      dispatch(setIsConnected(false));
    };
    ws.onerror = () => {
      dispatch(setIsConnected(false));
    };
  }, []);

  const location = useLocation<any>();

  const background = location.state && location.state.background;

  const [orderNumber, setOrderNumber] = useState(0);

  return (
    <>
      <Switch location={background || location}>
        <Route path="/" exact>
          <main className={styles.main}>
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor />
            </DndProvider>
          </main>
        </Route>
        <Route path="/feed" exact>
          <FeedPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
        <ProtectedRoute path="/profile">
          <Profile />
        </ProtectedRoute>
        <Route path="/ingredients/:id">
          <p className={`text text_type_main-large mt-45 ${styles.ingredientDetailsTitle}`}>Детали ингредиента</p>
          <IngredientsDetails />
        </Route>
        <Route path="/feed/:id">
          <OrderPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
      { background && <Route path="/ingredients/:id"><ModalOverlay type="string" title="Детали ингредиента" onClick={() => history.goBack()}><IngredientsDetails /></ModalOverlay></Route>}
      { background && <Route path="/feed/:id"><ModalOverlay type="number" title={`#${orderNumber}`} onClick={() => history.goBack()}><OrderPage setOrderNumber={setOrderNumber} /></ModalOverlay></Route>}

    </>
  );
};

export default App;
