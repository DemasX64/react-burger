
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react'
import styles from './burger-ingredient.module.css'
import PropTypes from 'prop-types';

class BurgerIngredient  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    render() { 
        return (  
            <li className={styles.ingredient}>
                {this.state.count!==0 && <Counter count={this.state.count} size="default"/>}
                <img src={this.props.image} alt={this.props.name}/>
                <div className={`mt-1 ${styles.price}`}>
                    <p className="mr-2 text text_type_digits-default">{this.props.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={`mt-1 text text_type_main-default ${styles.title}`}>{this.props.name}</p>
            </li>
        );
    }
}

BurgerIngredient.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
}

export default BurgerIngredient ;
