import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react'
import BurgerCategory from '../burger-category/burger-category';
import data from '../../utils/data.json';
import styles from './burger-ingredients.module.css'

class BurgerIngredients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab:'Булки',
            main: data.filter((ingredient) => ingredient.type==='main'),
            bun: data.filter((ingredient) => ingredient.type==='bun'),
            sauce: data.filter((ingredient) => ingredient.type==='sauce'),
        }
    }
    
     setCurrentTab = (value) => {
         this.setState({...this.state,currentTab:value})
    }

    render() { 
        const isBunActive = this.state.currentTab === 'Булки';
        const isMainActive = this.state.currentTab === 'Начинки';
        const isSauceActive = this.state.currentTab === 'Соусы';
        return (
            <section className={styles.container}>
                <p className="text text_type_main-large mt-10">Соберите бургер</p>
                <div className={`mt-5 ${styles.nav}`}>
                    <a href='#bun' className={styles.anchor}>
                        <Tab value="Булки" active={isBunActive} onClick={this.setCurrentTab}>Булки</Tab>
                    </a>
                    <a href='#sauce' className={styles.anchor}>
                        <Tab value="Соусы" active={isSauceActive} onClick={this.setCurrentTab}>Соусы</Tab>
                    </a>
                    <a href='#main' className={styles.anchor}>
                        <Tab value="Начинки" active={isMainActive} onClick={this.setCurrentTab}>Начинки</Tab>
                    </a>
                </div>
                <ul className={styles.categories}>
                    <BurgerCategory id='bun' title='Булки' ingredients={this.state.bun}/>
                    <BurgerCategory id='sauce'title='Соусы' ingredients={this.state.sauce}/>
                    <BurgerCategory id='main' title='Начинки' ingredients={this.state.main}/>
                </ul>   
            </section> 
        );
    }
}
 
export default BurgerIngredients;
