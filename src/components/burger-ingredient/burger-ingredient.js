
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react'
import styles from './burger-ingredient.module.css'
import ModalOverlay from '../modal-overlay/modal-overlay.jsx';
import IngredientsDetails from '../ingredients-details/ingredients-details.jsx';
import { ingredientProp } from '../../utils/prop-types';

const BurgerIngredient = (props) => {
    const [count, setCount] = useState(0);
    const [isIngridientInfoOpen, setIsInfoOpen] = useState(false)

    const toggleInfo = (e) => {
        setIsInfoOpen(!isIngridientInfoOpen)
    }
     
    const {image, name, price} = props.ingredient;

    return (
        <>
         <li onClick={toggleInfo} className={styles.ingredient}>
            {count!==0 && <Counter count={count} size="default"/>}
            <img src={image} alt={name}/>
            <div className={`mt-1 ${styles.price}`}>
                <p className="mr-2 text text_type_digits-default">{price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`mt-1 text text_type_main-default ${styles.title}`}>{name}</p>
        </li>
        {isIngridientInfoOpen && <ModalOverlay title='Детали ингредиента' onClick={toggleInfo}><IngredientsDetails ingredient={props.ingredient}/></ModalOverlay>}
        </>  
    );
    
}

BurgerIngredient.propTypes = {
    ingredient: ingredientProp,
}
    
export default BurgerIngredient ;
