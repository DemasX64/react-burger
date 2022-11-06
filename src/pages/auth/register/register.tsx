import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { ChangeEvent, FormEvent } from 'react';
import { useSelector } from 'react-redux';

import {
  Link, useLocation, Redirect, useHistory,
} from 'react-router-dom';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { setEmail, setName, setPassword } from '../../../services/reducers/register';
import { RootState } from '../../../services/store';
import { register } from '../../../utils/auth-api';
import { IState } from '../../../utils/types';
import styles from './register.module.css';

const Register = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const nameInput = useSelector((state: RootState) => state.register.nameInput);
  const passwordInput = useSelector((state: RootState) => state.register.passwordInput);
  const emailInput = useSelector((state: RootState) => state.register.emailInput);

  const onChangeNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };
  const onChangeEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };
  const onChangePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value));
  };
  const onRegisterSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      email: emailInput,
      name: nameInput,
      password: passwordInput,
    };
    dispatch(register(user)).then(() => history.replace('/login'));
  };

  const isLogged = useSelector((state: RootState) => state.auth.isLogged);
  const { state } = useLocation<IState>();
  if (isLogged) {
    return (
      <Redirect to={state?.from || '/'} />
    );
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.container} onSubmit={onRegisterSubmitHandler}>
        <p className="text text_type_main-medium">Регистрация</p>
        <Input onChange={onChangeNameInput} placeholder="Имя" value={nameInput} />
        <Input onChange={onChangeEmailInput} placeholder="E-mail" value={emailInput} />
        <PasswordInput onChange={onChangePasswordInput} name="Пароль" value={passwordInput} />
        <Button htmlType="submit" type="primary" size="large">Зарегистрироваться</Button>
      </form>
      <p className="text text_type_main-default mt-20">
        Уже зарегистрированы?&nbsp;
        <Link className={styles.link} to="/login">
          <Button htmlType="button" type="secondary" size="medium">Войти</Button>
        </Link>
      </p>
    </div>
  );
};

export default Register;
