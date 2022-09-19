/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './nav-item.module.css';

function NavItem(props) {
  const {
    onClick,
    value,
    children,
    active,
    title,
  } = props;

  const handleNavItemClick = () => {
    onClick(value);
  };

  return (
    <div onClick={handleNavItemClick} className={`mt-4 mb-4 pb-4 pt-4 pr-5 pl-5 ${styles.container}`}>
      {children}
      <p className={`ml-2 text text_type_main-default ${active ? styles.active : styles.disable}`}>{title}</p>
    </div>
  );
}

NavItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  value: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavItem;
