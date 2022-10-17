import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, Redirect } from 'react-router-dom';
import { setEmail } from '../../../services/reducers/forgotPassword';
import { forgotPassword } from '../../../utils/auth-api';
import styles from './forgot-password.module.css';

function ForgotPassword() {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.forgotPassword.email);

  const onClickHandler = () => {
    dispatch(forgotPassword(email));
  };

  const onChangeHandler = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const user = useSelector((state) => state.auth.user);
  const { state } = useLocation();
  if (user) {
    return (
      <Redirect to={state?.from || '/'} />
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className="text text_type_main-medium">Восстановление пароля</p>
        <Input onChange={onChangeHandler} placeholder="Укажите e-mail" value={email} />
        <Button onClick={onClickHandler} type="primary" size="large">Сохранить</Button>
      </div>
      <p className="text text_type_main-default mt-20">
        Вспомнили пароль?&nbsp;
        <Link className={styles.link} to="/login">
          <Button type="secondary" size="medium">
            Войти
          </Button>
        </Link>
      </p>
    </div>
  );
}

export default ForgotPassword;
