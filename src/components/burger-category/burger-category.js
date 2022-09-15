import React from "react";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import styles from './burger-category.module.css'
import PropTypes from 'prop-types'
import { ingredientsProp } from "../../utils/prop-types";

const BurgerCategory = (props) => {
    
    return (
        <>
            <p id={props.id} className={`text text_type_main-medium pt-10`}>{props.title}</p>
            <ul className={styles.list}>
                {props.ingredients.map((ingredient) => {
                    return( <BurgerIngredient key={ingredient._id} ingredient={ingredient}/> )
                }
            )}
            </ul>
        </>       
    );
}

BurgerCategory.propTypes ={ 
    ingredients: ingredientsProp,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default BurgerCategory;

