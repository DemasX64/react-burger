import React from 'react'
import styles from './app-header.module.css'
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import NavItem from '../nav-item/nav-item';

class AppHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: 1 };
        this.PAGES = {
            CONSTRUCTOR: 1,
            ORDERS: 2,
            PROFILE: 3,
        }
    }

    setCurrentPage = (value) => {
        this.setState({currentPage:value})
    }

    render() { 
        const isConstructorActive = this.state.currentPage===this.PAGES.CONSTRUCTOR;
        const isOrdersActive = this.state.currentPage===this.PAGES.ORDERS;
        const isProfileActive = this.state.currentPage===this.PAGES.PROFILE;

        return ( 
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Logo/>
                    </div>
                    <nav className={styles.nav}>
                        <NavItem title="Конструктор"value={this.PAGES.CONSTRUCTOR} active={isConstructorActive} onClick={this.setCurrentPage}><BurgerIcon type={isConstructorActive?"primary":'secondary'} /></NavItem>
                        <NavItem title="Лента заказов" value={this.PAGES.ORDERS} active={isOrdersActive} onClick={this.setCurrentPage}><ListIcon type={isOrdersActive?"primary":'secondary'} /></NavItem>
                        <div className={styles.filler}></div>
                        <NavItem title="Личный кабинет" value={this.PAGES.PROFILE} active={isProfileActive} onClick={this.setCurrentPage}><ProfileIcon type={isProfileActive?"primary":'secondary'} /></NavItem>
                    </nav>
                </div>
            </header>
         );
    }
}
 
export default AppHeader;
