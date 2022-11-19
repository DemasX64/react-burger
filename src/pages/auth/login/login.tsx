import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { ChangeEvent, FormEvent } from 'react';
import {
  Link, Redirect, useLocation,
} from 'react-router-dom';
import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import { setEmail, setPassword } from '../../../services/reducers/login';
import { login } from '../../../utils/auth-api';
import { IState } from '../../../utils/types';
import styles from './login.module.css';

const Login = () => {
  const dispatch = useAppDispatch();
  const emailInput = useAppSelector((store) => store.login.emailInput);
  const passwordInput = useAppSelector((store) => store.login.passwordInput);
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  const { state } = useLocation<IState>();
  if (isLogged) {
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

  const onSubmitLoginkHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      email: emailInput,
      password: passwordInput,
    };
    dispatch(login(user));
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.container} onSubmit={onSubmitLoginkHandler}>
        <p className="text text_type_main-medium">Вход</p>
        <Input onChange={onChangeEmailInput} placeholder="E-mail" value={emailInput} />
        <PasswordInput onChange={onChangePasswordInput} name="Пароль" value={passwordInput} />
        <Button htmlType="submit" type="primary" size="large">Войти</Button>
      </form>
      <p className="text text_type_main-default mt-20">
        Вы — новый пользователь?&nbsp;
        <Link className={styles.link} to="/register">
          <Button htmlType="button" type="secondary" size="medium">Зарегистрироваться</Button>
        </Link>
      </p>
      <p className="text text_type_main-default mt-4">
        Забыли пароль?&nbsp;
        <Link className={styles.link} to="/forgot-password">
          <Button htmlType="button" type="secondary" size="medium">Восстановить пароль</Button>
        </Link>
      </p>
    </div>
  );
};

export default Login;
