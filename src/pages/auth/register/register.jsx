import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Link, useLocation, Redirect, useHistory,
} from 'react-router-dom';
import { setEmail, setName, setPassword } from '../../../services/reducers/register';
import { register } from '../../../utils/auth-api';
import styles from './register.module.css';

function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const nameInput = useSelector((state) => state.register.nameInput);
  const passwordInput = useSelector((state) => state.register.passwordInput);
  const emailInput = useSelector((state) => state.register.emailInput);

  const onChangeNameInput = (e) => {
    dispatch(setName(e.target.value));
  };
  const onChangeEmailInput = (e) => {
    dispatch(setEmail(e.target.value));
  };
  const onChangePasswordInput = (e) => {
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
        <p className="text text_type_main-medium">Регистрация</p>
        <Input onChange={onChangeNameInput} placeholder="Имя" value={nameInput} />
        <Input onChange={onChangeEmailInput} placeholder="E-mail" value={emailInput} />
        <PasswordInput onChange={onChangePasswordInput} name="Пароль" value={passwordInput} />
        <Button onClick={onRegisterClickHandler} type="primary" size="large">Зарегистрироваться</Button>
      </div>
      <p className="text text_type_main-default mt-20">
        Уже зарегистрированы?&nbsp;
        <Link className={styles.link} to="/login">
          <Button type="secondary" size="medium">Войти</Button>
        </Link>
      </p>
    </div>
  );
}

export default Register;
