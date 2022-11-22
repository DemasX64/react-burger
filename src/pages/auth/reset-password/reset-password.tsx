import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import {
  Link, useLocation, Redirect, useHistory,
} from 'react-router-dom';
import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import { setToken, setPassword } from '../../../services/reducers/resetPassword';
import { resetPassword } from '../../../utils/auth-api';
import { IState } from '../../../utils/types';
import styles from './reset-password.module.css';

const ResetPassword = () => {
  const dispatch = useAppDispatch();
  const history = useHistory<{prevPage?: string}>();

  useEffect(() => {
    if (history.location.state.prevPage !== 'forgot-password') {
      history.replace('forgot-password');
    }
  }, []);

  const password = useAppSelector((state) => state.resetPassword.password);
  const token = useAppSelector((state) => state.resetPassword.token);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(resetPassword({ password, token }));
    history.replace('/login');
  };

  const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value));
  };
  const onChangeTokenHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setToken(e.target.value));
  };

  const isLogged = useAppSelector((state) => state.auth.isLogged);
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
        <Input onChange={onChangePasswordHandler} name="Введите новый пароль" placeholder="Введите новый пароль" value={password} />
        <Input onChange={onChangeTokenHandler} placeholder="Введите код из письма" value={token} />
        <Button htmlType="submit" type="primary" size="large">Сохранить</Button>
      </form>
      <p className="text text_type_main-default mt-20">
        Вспомнили пароль?&nbsp;
        <Link className={styles.link} to="/login">
          <Button htmlType="button" type="secondary" size="medium">Войти</Button>
        </Link>
      </p>
    </div>
  );
};

export default ResetPassword;
