import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, Redirect } from 'react-router-dom';
import { setToken, setPassword } from '../../../services/reducers/resetPassword';
import { RootState } from '../../../services/store';
import { resetPassword } from '../../../utils/auth-api';
import { IState } from '../../../utils/types';
import styles from './reset-password.module.css';

function ResetPassword() {
  const dispatch = useDispatch();

  const password = useSelector((state: RootState) => state.resetPassword.password);
  const token = useSelector((state: RootState) => state.resetPassword.token);

  const onClickHandler = () => {
    dispatch(resetPassword({ password, token }));
  };

  const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value));
  };
  const onChangeTokenHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setToken(e.target.value));
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
        <p className="text text_type_main-medium">Восстановление пароля</p>
        <Input onChange={onChangePasswordHandler} name="Введите новый пароль" placeholder="Введите новый пароль" value={password} />
        <Input onChange={onChangeTokenHandler} placeholder="Введите код из письма" value={token} />
        <Button htmlType='submit' onClick={onClickHandler} type="primary" size="large">Восстановить</Button>
      </div>
      <p className="text text_type_main-default mt-20">
        Вспомнили пароль?&nbsp;
        <Link className={styles.link} to="/login">
          <Button htmlType='button' type="secondary" size="medium">Войти</Button>
        </Link>
      </p>
    </div>
  );
}

export default ResetPassword;
