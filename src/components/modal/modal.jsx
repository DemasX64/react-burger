import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect } from 'react';
import styles from './modal.module.css'
import { modalProp } from '../../utils/prop-types';

const escKeyCode = 27;

const Modal = (props) => {

    const preventClickOnModal = (e) => {
        e.stopPropagation()
    }

    useEffect(() => {
        const closeModal = (e) => {
          if(e.keyCode === escKeyCode){
            props.onClick()
          }
        }
        window.addEventListener('keydown', closeModal)
      return () => window.removeEventListener('keydown', closeModal)
    },[props.onClick])

    return ( 
        <article className={styles.container} onClick={preventClickOnModal}>
            <div className={`mt-10 ml-10 mr-10 ${styles.header}`}>
                <p className="text text_type_main-large">{props.title}</p>
                <CloseIcon type="primary" onClick={props.onClick}/>
            </div>
            <div className={styles.body}>{props.children}</div>
        </article>
    );
}

Modal.propTypes = modalProp;
 
export default Modal;