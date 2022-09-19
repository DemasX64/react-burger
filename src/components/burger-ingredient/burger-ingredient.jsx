/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import styles from './burger-ingredient.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import IngredientsDetails from '../ingredients-details/ingredients-details';
import { ingredientProp } from '../../utils/prop-types';
import { setCurrentIngredient, toggleIngredientDetails } from '../../services/reducers';

function BurgerIngredient({ ingredient }) {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    if (ingredient.type === 'bun') {
      if (state.burger.bun._id === ingredient._id) {
        return 2;
      }
      return 0;
    }
    return state.burger.constructor.reduce((sum, number) => {
      if (number._id === ingredient._id) {
        return sum + 1;
      } return sum;
    }, 0);
  });
  const isIngridientInfoOpen = useSelector((state) => state.burger.isIngredientDetailsOpen);

  const toggleInfo = () => {
    dispatch(setCurrentIngredient(ingredient));
    dispatch(toggleIngredientDetails());
  };

  const [, ref] = useDrag({
    type: 'ingredient',
    item: { ...ingredient, uuid: uuidv4() },
  });

  const { image, name, price } = ingredient;

  return (
    <>
      <li ref={ref} onClick={toggleInfo} className={styles.ingredient}>
        {count !== 0 && <Counter count={count} size="default" />}
        <img src={image} alt={name} />
        <div className={`mt-1 ${styles.price}`}>
          <p className="mr-2 text text_type_digits-default">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`mt-1 text text_type_main-default ${styles.title}`}>{name}</p>
      </li>
      {isIngridientInfoOpen && <ModalOverlay title="Детали ингредиента" onClick={toggleInfo}><IngredientsDetails ingredient={ingredient} /></ModalOverlay>}
    </>
  );
}

BurgerIngredient.propTypes = {
  ingredient: ingredientProp.isRequired,
};

export default BurgerIngredient;
