import Modal from "../modal/modal.jsx";
import ReactDOM from 'react-dom';
import styles from './modal-overlay.module.css'
import { modalProp } from "../../utils/prop-types.jsx";

const modalRoot = document.getElementById("react-modals");

const ModalOverlay = (props) => {
    return ReactDOM.createPortal( 
        <div className={styles.container} style={{height:'100vh'}} onClick={props.onClick}>
            <Modal title={props.title} onClick={props.onClick}>
                {props.children}
            </Modal>
        </div>,
        modalRoot 
    );
}
ModalOverlay.propTypes = modalProp
 
export default ModalOverlay;