import React from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './profile.module.css';
import { logout } from '../../utils/auth-api';
import { getCookie } from '../../utils/cookie-service';

function Profile() {
  const dispatch = useDispatch();

  const onClickLogoutHandler = () => {
    dispatch(logout(getCookie('token')));
  };

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
        <Input placeholder="Имя" value="Марк" icon="EditIcon" />
        <Input placeholder="Логин" value="mail@stellar.burgers" icon="EditIcon" />
        <Input placeholder="Пароль" value="123" icon="EditIcon" />
      </div>
    </div>
  );
}

export default Profile;
