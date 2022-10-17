import React from 'react';
import {
  Logo, BurgerIcon, ListIcon, ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import NavItem from '../nav-item/nav-item';

function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={styles.nav}>
          <NavItem isExact title="Конструктор" to="/"><BurgerIcon type="secondary" /></NavItem>
          <NavItem isExact={false} title="Лента заказов" to="/order"><ListIcon type="secondary" /></NavItem>
          <div className={styles.filler} />
          <NavItem isExact={false} title="Личный кабинет" to="/profile"><ProfileIcon type="secondary" /></NavItem>
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;
