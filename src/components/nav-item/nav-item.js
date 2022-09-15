import "@ya.praktikum/react-developer-burger-ui-components";
import styles from './nav-item.module.css'
import PropTypes from 'prop-types'

const NavItem = (props) => {

    const handleNavItemClick = () => {
        props.onClick(props.value)
    }
    
    return (
        <div onClick={handleNavItemClick} className={`mt-4 mb-4 pb-4 pt-4 pr-5 pl-5 ${styles.container}`}>
            {props.children}
            <p className={`ml-2 text text_type_main-default ${props.active? styles.active :styles.disable}`}>{props.title}</p>
        </div>
    );
}

NavItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node,
    active: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,

}
 
export default NavItem;