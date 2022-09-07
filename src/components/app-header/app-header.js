import { useState } from 'react'
import styles from './app-header.module.css'
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import NavItem from '../nav-item/nav-item';

const AppHeader = () => {
    const PAGES = {
        CONSTRUCTOR: 1,
        ORDERS: 2,
        PROFILE: 3,
    }
    const [currentPage, setCurrentPage] = useState(PAGES.CONSTRUCTOR)

    const setCurrentPageHandler = (value) => {
        setCurrentPage(value)
    }

   
    const isConstructorActive = currentPage===PAGES.CONSTRUCTOR;
    const isOrdersActive = currentPage===PAGES.ORDERS;
    const isProfileActive = currentPage===PAGES.PROFILE;

    return ( 
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Logo/>
                </div>
                <nav className={styles.nav}>
                    <NavItem title="Конструктор"value={PAGES.CONSTRUCTOR} active={isConstructorActive} onClick={setCurrentPageHandler}><BurgerIcon type={isConstructorActive?"primary":'secondary'} /></NavItem>
                    <NavItem title="Лента заказов" value={PAGES.ORDERS} active={isOrdersActive} onClick={setCurrentPageHandler}><ListIcon type={isOrdersActive?"primary":'secondary'} /></NavItem>
                    <div className={styles.filler}></div>
                    <NavItem title="Личный кабинет" value={PAGES.PROFILE} active={isProfileActive} onClick={setCurrentPageHandler}><ProfileIcon type={isProfileActive?"primary":'secondary'} /></NavItem>
                </nav>
            </div>
        </header>
    );
}
 
export default AppHeader;
