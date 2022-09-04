import React from "react";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import styles from './burger-category.module.css'
import PropTypes from 'prop-types'

class BurgerCategory extends React.Component {
    
    render() { 
        return (
            <>
                <p id={this.props.id} className={`text text_type_main-medium pt-10`}>{this.props.title}</p>
                <ul className={styles.list}>
                    { this.props.ingredients.map((ingredient) => {
                        return( <BurgerIngredient key={ingredient._id} name={ingredient.name} price={ingredient.price} image={ingredient.image}/> )
                    }
                )}
                </ul>
            </>       
        );
    }
}

BurgerCategory.propTypes = {
    id: PropTypes.string.isRequired,
}

 
export default BurgerCategory;
