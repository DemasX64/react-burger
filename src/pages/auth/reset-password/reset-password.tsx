import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { ChangeEvent, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, Redirect } from 'react-router-dom';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { setToken, setPassword } from '../../../services/reducers/resetPassword';
import { RootState } from '../../../services/store';
import { resetPassword } from '../../../utils/auth-api';
import { IState } from '../../../utils/types';
import styles from './reset-password.module.css';

const ResetPassword = () => {
  const dispatch = useAppDispatch();

  const password = useSelector((state: RootState) => state.resetPassword.password);
  const token = useSelector((state: RootState) => state.resetPassword.token);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(resetPassword({ password, token }));
  };

  const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value));
  };
  const onChangeTokenHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setToken(e.target.value));
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
        <Input onChange={onChangePasswordHandler} name="Введите новый пароль" placeholder="Введите новый пароль" value={password} />
        <Input onChange={onChangeTokenHandler} placeholder="Введите код из письма" value={token} />
        <Button htmlType="submit" type="primary" size="large">Восстановить</Button>
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
