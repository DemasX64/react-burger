/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './nav-item.module.css';

function NavItem(props) {
  const {
    children,
    title,
    to,
    isExact,
  } = props;

  return (
    <NavLink to={to} exact={isExact} className={`mt-4 mb-4 pb-4 pt-4 pr-5 pl-5 ${styles.container}`} activeClassName={styles.activeLink}>
      {children}
      <p className="ml-2 text text_type_main-default">{title}</p>
    </NavLink>
  );
}

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  isExact: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavItem;
