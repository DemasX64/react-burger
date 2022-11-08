/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ChangeEvent, useState } from 'react';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';
import { useStore } from 'react-redux';
import styles from './profile.module.css';
import { logout, updateToken } from '../../utils/auth-api';
import { getCookie } from '../../utils/cookie-service';
import { updateUser } from '../../utils/user-api';
import { RootState } from '../../services/store';
import useAppDispatch from '../../hooks/useAppDispatch';

const Profile = () => {
  const dispatch = useAppDispatch();
  const store = useStore<RootState>();

  const [isNameEditable, setIsNameEditable] = useState(false);
  const [isEmailEditable, setIsEmailEditable] = useState(false);
  const [isPasswordEditable, setIsPasswordEditable] = useState(false);

  const [name, setName] = useState(store.getState().auth.user.name);
  const [email, setEmail] = useState(store.getState().auth.user.email);
  const [password, setPassword] = useState(store.getState().auth.user.password);

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
    dispatch(logout(getCookie('refreshToken')));
  };

  const onClickSave = async () => {
    const data = {
      name: isNameEditable ? name : '',
      email: isEmailEditable ? email : '',
      password: isPasswordEditable ? password : '',
      token: getCookie('accessToken'),
    };
    // dispatch(updateUser(data)).unwrap().then(() => {
    //   setIsEmailEditable(false);
    //   setIsNameEditable(false);
    //   setIsPasswordEditable(false);
    // });
    if (data.token) {
      const isUpdated = await dispatch(updateUser(data)).unwrap();
      if (isUpdated) {
        setIsEmailEditable(false);
        setIsNameEditable(false);
        setIsPasswordEditable(false);
      }
    } else {
      const updateTokens: any = await dispatch(updateToken(getCookie('refreshToken')));
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

  // const { name, email, password } = useSelector((state) => state.auth.user);
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
          <p onClick={onClickLogoutHandler} className="text text_type_main-medium text_color_inactive">Выход</p>
        </div>
        <p className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы можете изменить свои персональные данные</p>
      </div>
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
    </div>
  );
};

export default Profile;
