import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link, Redirect, useLocation,
} from 'react-router-dom';
import { setEmail, setPassword } from '../../../services/reducers/login';
import { RootState } from '../../../services/store';
import { login } from '../../../utils/auth-api';
import { IState } from '../../../utils/types';
import styles from './login.module.css';

function Login() {
  const dispatch = useDispatch();
  const emailInput = useSelector((store: RootState) => store.login.emailInput);
  const passwordInput = useSelector((store: RootState) => store.login.passwordInput);
  const isSignIn = useSelector((state: RootState) => state.auth.user);
  const { state } = useLocation<IState>();
  if (isSignIn) {
    return (
      <Redirect to={state?.from || '/'} />
    );
  }
  const onChangeEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };
  const onChangePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
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
        <Button htmlType='submit' onClick={onLoginClickHandler} type="primary" size="large">Войти</Button>
      </div>
      <p className="text text_type_main-default mt-20">
        Вы — новый пользователь?&nbsp;
        <Link className={styles.link} to="/register">
          <Button htmlType='button' type="secondary" size="medium">Зарегистрироваться</Button>
        </Link>
      </p>
      <p className="text text_type_main-default mt-4">
        Забыли пароль?&nbsp;
        <Link className={styles.link} to="/forgot-password">
          <Button htmlType='button' type="secondary" size="medium">Восстановить пароль</Button>
        </Link>
      </p>
    </div>
  );
}

export default Login;
