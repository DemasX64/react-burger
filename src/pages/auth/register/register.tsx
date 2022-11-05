import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Link, useLocation, Redirect, useHistory,
} from 'react-router-dom';
import { setEmail, setName, setPassword } from '../../../services/reducers/register';
import { RootState } from '../../../services/store';
import { register } from '../../../utils/auth-api';
import { IState } from '../../../utils/types';
import styles from './register.module.css';

function Register() {
  const dispatch = useDispatch();
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
  const onRegisterClickHandler = () => {
    const user = {
      email: emailInput,
      name: nameInput,
      password: passwordInput,
    };
    dispatch(register(user)).then(history.replace('/login'));
  };

  const user = useSelector((state: RootState) => state.auth.user);
  const { state } = useLocation<IState>();
  if (user) {
    return (
      <Redirect to={state?.from || '/'} />
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className="text text_type_main-medium">Регистрация</p>
        <Input onChange={onChangeNameInput} placeholder="Имя" value={nameInput} />
        <Input onChange={onChangeEmailInput} placeholder="E-mail" value={emailInput} />
        <PasswordInput onChange={onChangePasswordInput} name="Пароль" value={passwordInput} />
        <Button htmlType='submit' onClick={onRegisterClickHandler} type="primary" size="large">Зарегистрироваться</Button>
      </div>
      <p className="text text_type_main-default mt-20">
        Уже зарегистрированы?&nbsp;
        <Link className={styles.link} to="/login">
          <Button htmlType='button' type="secondary" size="medium">Войти</Button>
        </Link>
      </p>
    </div>
  );
}

export default Register;
