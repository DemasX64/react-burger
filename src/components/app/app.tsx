import React, { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch } from 'react-redux';
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

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  useEffect(async () => {
    const accessToken = getCookie('accessToken');
    const refreshToken = getCookie('refreshToken');

    if (accessToken) {
      const isUserGet = await dispatch(getUser(accessToken)).unwrap();
      if (!isUserGet) {
        const updateTokens = await dispatch(updateToken(refreshToken));
        if (updateTokens) {
          dispatch(getUser(updateTokens.accessToken));
        }
      }
    }
  }, []);
  
  const location = useLocation<any>();

  const background = location.state && location.state.background;

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
        <ProtectedRoute path="/ingredients/:id">
          <p className={`text text_type_main-large mt-45 ${styles.ingredientDetailsTitle}`}>Детали ингредиента</p>
          <IngredientsDetails />
        </ProtectedRoute>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
      { background && <Route path="/ingredients/:id"><ModalOverlay title="Детали ингредиента" onClick={() => history.goBack()}><IngredientsDetails /></ModalOverlay></Route>}
    </>
  );
}

export default App;
