/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import ReactDOM from 'react-dom';
import React, { FC, ReactNode } from 'react';
import Modal from '../modal/modal';
import styles from './modal-overlay.module.css';

const modalRoot = document.getElementById('react-modals');

interface IModalOverlayProps {
  onClick: () => void,
  title?: string,
  children: ReactNode
}

const ModalOverlay: FC<IModalOverlayProps> = (props) => modalRoot ? ReactDOM.createPortal(
  <div className={styles.container} onClick={props.onClick}>
    <Modal title={props.title?props.title:''} onClick={props.onClick}>
      {props.children}
    </Modal>
  </div>,
  modalRoot,
) : null

export default ModalOverlay;
