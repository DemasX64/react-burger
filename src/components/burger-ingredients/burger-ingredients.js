import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react'
import BurgerCategory from '../burger-category/burger-category';
import data from '../../utils/data.json';
import styles from './burger-ingredients.module.css'

class BurgerIngredients extends React.Component {
    state = {current:'Булки',main:[],sauce:[],bun:[]};
    constructor(props) {
        super(props);
        data.map((ingredient) => {
            if(ingredient.type==='main'){
                this.state = ({...this.state,main:[...this.state.main,ingredient]})
            }
            if(ingredient.type==='bun'){
                this.state = ({...this.state,bun:[...this.state.bun,ingredient]})
            }
            if(ingredient.type==='sauce'){
                this.state = ({...this.state,sauce:[...this.state.sauce,ingredient]})
            }
        })
    }
    
     setCurrent = (value) => {
         this.setState({...this.state,current:value})
    }

    render() { 
        return (
            <section className={styles.container}>
                <p className="text text_type_main-large mt-10">Соберите бургер</p>
                <div className={`mt-5 ${styles.nav}`}>
                    <a href='#bun' className={styles.anchor}>
                        <Tab value="Булки" active={this.state.current === 'Булки'} onClick={this.setCurrent}>Булки</Tab>
                    </a>
                    <a href='#sauce' className={styles.anchor}>
                        <Tab value="Соусы" active={this.state.current === 'Соусы'} onClick={this.setCurrent}>Соусы</Tab>
                    </a>
                    <a href='#main' className={styles.anchor}>
                        <Tab value="Начинки" active={this.state.current === 'Начинки'} onClick={this.setCurrent}>Начинки</Tab>
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