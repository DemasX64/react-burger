import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { ChangeEvent, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import {
  Link, useLocation, Redirect, useHistory,
} from 'react-router-dom';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { setEmail } from '../../../services/reducers/forgotPassword';
import { RootState } from '../../../services/store';
import { forgotPassword } from '../../../utils/auth-api';
import { IState } from '../../../utils/types';
import styles from './forgot-password.module.css';

const ForgotPassword = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const email = useSelector((state: RootState) => state.forgotPassword.email);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
    history.replace('/reset-password');
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
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
      <form className={styles.container} onSubmit={onSubmitHandler}>
        <p className="text text_type_main-medium">Восстановление пароля</p>
        <Input onChange={onChangeHandler} placeholder="Укажите e-mail" value={email} />
        <Button htmlType="submit" type="primary" size="large">Восстановить</Button>
      </form>
      <p className="text text_type_main-default mt-20">
        Вспомнили пароль?&nbsp;
        <Link className={styles.link} to="/login">
          <Button htmlType="button" type="secondary" size="medium">
            Войти
          </Button>
        </Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
