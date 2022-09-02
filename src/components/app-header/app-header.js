import React from 'react'
import styles from './app-header.module.css'
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import NavItem from '../nav-item/nav-item';

class AppHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { current: 1 };
    }

    setCurrent = (value) => {
        this.setState({current:value})
    }

    render() { 
        return ( 
            <header className={`ml-10 mt-10 mr-10 ${styles.header}`}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Logo/>
                    </div>
                    <nav className={styles.nav}>
                        <NavItem title="Конструктор"value={1} active={this.state.current===1} onClick={this.setCurrent}><BurgerIcon type={this.state.current===1?"primary":'secondary'} /></NavItem>
                        <NavItem title="Лента заказов" value={2} active={this.state.current===2} onClick={this.setCurrent}><ListIcon type={this.state.current===2?"primary":'secondary'} /></NavItem>
                        <div style={{flex:1}}></div>
                        <NavItem title="Личный кабинет" value={3} active={this.state.current===3}onClick={this.setCurrent}><ProfileIcon type={this.state.current===3?"primary":'secondary'} /></NavItem>
                    </nav>
                </div>
            </header>
         );
    }
}
 
export default AppHeader;