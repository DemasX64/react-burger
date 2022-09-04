import "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from './nav-item.module.css'
import PropTypes from 'prop-types'

class NavItem extends React.Component {

    handleNavItemClick = () => {
        this.props.onClick(this.props.value)
    }
    
    render() { 
        return (
            <div onClick={this.handleNavItemClick} className={`mt-4 mb-4 pb-4 pt-4 pr-5 pl-5 ${styles.container}`}>
                {this.props.children}
                <p className={`ml-2 text text_type_main-default ${this.props.active? styles.active :styles.disable}`}>{this.props.title}</p>
            </div>
        );
    }
}

NavItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node,
    active: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,

}
 
export default NavItem;