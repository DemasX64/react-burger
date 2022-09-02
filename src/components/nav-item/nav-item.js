import "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from './nav-item.module.css'

class NavItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return (
            <div onClick={()=>{this.props.onClick(this.props.value)}} className={`mt-4 mb-4 pb-4 pt-4 pr-5 pl-5 ${styles.container}`}>
                {this.props.children}
                <p className={`ml-2 text text_type_main-default ${this.props.active? styles.active :styles.disable}`}>{this.props.title}</p>
            </div>
        );
    }
}
 
export default NavItem;