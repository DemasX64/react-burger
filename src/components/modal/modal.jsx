/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect } from 'react';
import styles from './modal.module.css';
import { modalProp } from '../../utils/prop-types';
import { escKeyCode } from '../../utils/constants';

function Modal(props) {
  const {
    onClick,
    children,
    title,
  } = props;

  const preventClickOnModal = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const closeModal = (e) => {
      if (e.keyCode === escKeyCode) {
        onClick();
      }
    };
    window.addEventListener('keydown', closeModal);
    return () => window.removeEventListener('keydown', closeModal);
  }, [onClick]);

  return (
    <div className={styles.container} onClick={preventClickOnModal}>
      <div className={`mt-10 ml-10 mr-10 ${styles.header}`}>
        <p className="text text_type_main-large">{title}</p>
        <CloseIcon type="primary" onClick={onClick} />
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}

Modal.propTypes = modalProp;

export default Modal;
