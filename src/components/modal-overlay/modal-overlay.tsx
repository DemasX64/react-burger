/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import ReactDOM from 'react-dom';
import React, { FC, ReactNode } from 'react';
import Modal from '../modal/modal';
import styles from './modal-overlay.module.css';

const modalRoot = document.getElementById('react-modals');

interface IModalOverlayProps {
  type: 'string' | 'number',
  onClick: () => void,
  title?: string,
  children: ReactNode
}

const ModalOverlay: FC<IModalOverlayProps> = (props) => {
  const {
    type, title, onClick, children,
  } = props;
  return (
    modalRoot ? ReactDOM.createPortal(
      <div className={styles.container} onClick={onClick}>
        <Modal type={type} title={title || ''} onClick={onClick}>
          {children}
        </Modal>
      </div>,
      modalRoot,
    ) : null
  );
};

ModalOverlay.defaultProps = {
  title: '',
};

export default ModalOverlay;
