/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import ReactDOM from 'react-dom';
import React from 'react';
import Modal from '../modal/modal';
import styles from './modal-overlay.module.css';
import { modalProp } from '../../utils/prop-types';

const modalRoot = document.getElementById('react-modals');

const ModalOverlay = (props) => ReactDOM.createPortal(
  <div className={styles.container} onClick={props.onClick}>
    <Modal title={props.title} onClick={props.onClick}>
      {props.children}
    </Modal>
  </div>,
  modalRoot,
);
ModalOverlay.propTypes = modalProp;

export default ModalOverlay;
