import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link, Redirect, useLocation,
} from 'react-router-dom';
import { setEmail, setPassword } from '../../../services/reducers/login';
import { login } from '../../../utils/auth-api';
import styles from './login.module.css';

function Login() {
  const dispatch = useDispatch();
  const emailInput = useSelector((store) => store.login.emailInput);
  const passwordInput = useSelector((store) => store.login.passwordInput);
  const isSignIn = useSelector((state) => state.auth.user);
  const { state } = useLocation();
  if (isSignIn) {
    return (
      <Redirect to={state?.from || '/'} />
    );
  }
  const onChangeEmailInput = (e) => {
    dispatch(setEmail(e.target.value));
  };
  const onChangePasswordInput = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const onLoginClickHandler = () => {
    const user = {
      email: emailInput,
      password: passwordInput,
    };
    dispatch(login(user));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className="text text_type_main-medium">Вход</p>
        <Input onChange={onChangeEmailInput} placeholder="E-mail" value={emailInput} />
        <PasswordInput onChange={onChangePasswordInput} name="Пароль" value={passwordInput} />
        <Button onClick={onLoginClickHandler} type="primary" size="large">Войти</Button>
      </div>
      <p className="text text_type_main-default mt-20">
        Вы — новый пользователь?&nbsp;
        <Link className={styles.link} to="/register">
          <Button type="secondary" size="medium">Зарегистрироваться</Button>
        </Link>
      </p>
      <p className="text text_type_main-default mt-4">
        Забыли пароль?&nbsp;
        <Link className={styles.link} to="/forgot-password">
          <Button type="secondary" size="medium">Восстановить пароль</Button>
        </Link>
      </p>
    </div>
  );
}

export default Login;
