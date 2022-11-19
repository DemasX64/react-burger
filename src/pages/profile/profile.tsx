/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, Route, Switch } from 'react-router-dom';
import styles from './profile.module.css';
import { logout, updateToken } from '../../utils/auth-api';
import { getCookie } from '../../utils/cookie-service';
import { updateUser } from '../../utils/user-api';
import useAppDispatch from '../../hooks/useAppDispatch';
import Order from '../../components/order/order';
import useAppSelector from '../../hooks/useAppSelector';
import { connect, disconnect } from '../../services/reducers/orders';

const Profile = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.auth.user);

  const [isNameEditable, setIsNameEditable] = useState(false);
  const [isEmailEditable, setIsEmailEditable] = useState(false);
  const [isPasswordEditable, setIsPasswordEditable] = useState(false);

  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [password, setPassword] = useState(user.password || '');

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickLogoutHandler = () => {
    dispatch(logout(getCookie('refreshToken') || ''));
  };

  const onClickSave = async () => {
    const data = {
      name: isNameEditable ? name : '',
      email: isEmailEditable ? email : '',
      password: isPasswordEditable ? password : '',
      token: getCookie('accessToken'),
    };
    if (data.token) {
      const isUpdated = await dispatch(updateUser(data)).unwrap();
      if (isUpdated) {
        setIsEmailEditable(false);
        setIsNameEditable(false);
        setIsPasswordEditable(false);
      }
    } else {
      const updateTokens: any = await dispatch(updateToken(getCookie('refreshToken') || ''));
      data.token = updateTokens.accessToken;
      if (updateTokens) {
        dispatch(updateUser(data)).unwrap().then(() => {
          setIsEmailEditable(false);
          setIsNameEditable(false);
          setIsPasswordEditable(false);
        });
      }
    }
  };

  useEffect(() => {
    dispatch(connect(`wss://norma.nomoreparties.space/orders?token=${getCookie('accessToken')?.split(' ')[1]}`));
    return () => { dispatch(disconnect()); };
  }, []);

  const orders = useAppSelector((state) => state.orders.orders);

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.navigation}>
          <NavLink
            exact
            to="/profile"
            className="text text_type_main-medium text_color_inactive"
            activeClassName={styles.activeLink}
          >
            Профиль
          </NavLink>
          <NavLink
            exact
            to="/profile/orders"
            className="text text_type_main-medium text_color_inactive"
            activeClassName={styles.activeLink}
          >
            История заказов
          </NavLink>
          <p onClick={onClickLogoutHandler} className={`text text_type_main-medium text_color_inactive ${styles.exit}`}>Выход</p>
        </div>
        <p className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы можете изменить свои персональные данные</p>
      </div>
      <Switch>
        <Route path="/profile" exact>
          <div className={styles.fields}>
            <Input
              onChange={onNameChange}
              disabled={!isNameEditable}
              onIconClick={() => setIsNameEditable(true)}
              placeholder="Имя"
              value={name}
              icon="EditIcon"
            />
            <Input
              onChange={onEmailChange}
              disabled={!isEmailEditable}
              onIconClick={() => setIsEmailEditable(true)}
              placeholder="Логин"
              value={email}
              icon="EditIcon"
            />
            <Input
              onChange={onPasswordChange}
              disabled={!isPasswordEditable}
              onIconClick={() => setIsPasswordEditable(true)}
              placeholder="Пароль"
              value={password}
              icon="EditIcon"
            />
            {(isNameEditable || isEmailEditable || isPasswordEditable) && (
            <Button htmlType="submit" type="primary" size="medium" onClick={onClickSave}>
              Сохранить
            </Button>
            )}
          </div>
        </Route>
        <Route path="/profile/orders" exact>
          <div className={styles.ordersContainer}>
            {orders?.length ? orders.map((order) => {
              const {
                createdAt, number, _id, ingredients, status,
              } = order;
              return (
                <Order
                  _id={_id}
                  status={status}
                  key={_id}
                  number={number}
                  date={createdAt}
                  title={order.name}
                  ingredients={ingredients}
                />
              );
            }) : <p className="text text_type_main-default">Список заказов пуст</p>}
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default Profile;
