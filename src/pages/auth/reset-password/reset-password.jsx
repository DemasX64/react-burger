import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, Redirect } from 'react-router-dom';
import { setToken, setPassword } from '../../../services/reducers/resetPassword';
import { resetPassword } from '../../../utils/auth-api';
import styles from './reset-password.module.css';

function ResetPassword() {
  const dispatch = useDispatch();

  const password = useSelector((state) => state.resetPassword.password);
  const token = useSelector((state) => state.resetPassword.token);

  const onClickHandler = () => {
    dispatch(resetPassword({ password, token }));
  };

  const onChangePasswordHandler = (e) => {
    dispatch(setPassword(e.target.value));
  };
  const onChangeTokenHandler = (e) => {
    dispatch(setToken(e.target.value));
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
        <Input onChange={onChangePasswordHandler} name="Введите новый пароль" placeholder="Введите новый пароль" value={password} />
        <Input onChange={onChangeTokenHandler} placeholder="Введите код из письма" value={token} />
        <Button onClick={onClickHandler} type="primary" size="large">Восстановить</Button>
      </div>
      <p className="text text_type_main-default mt-20">
        Вспомнили пароль?&nbsp;
        <Link className={styles.link} to="/login">
          <Button type="secondary" size="medium">Войти</Button>
        </Link>
      </p>
    </div>
  );
}

export default ResetPassword;
