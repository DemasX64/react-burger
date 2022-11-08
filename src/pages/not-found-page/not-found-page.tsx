import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './not-found-page.module.css';

const NotFoundPage = () => (
  <div className={styles.container}>
    <p className="text text_type_main-large">Страница не найдена</p>
    <Link to="/">
      <Button htmlType="button" type="secondary" size="large">На главную</Button>
    </Link>
  </div>
);

export default NotFoundPage;
