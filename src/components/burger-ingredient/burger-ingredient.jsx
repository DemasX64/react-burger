/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import { Link, useLocation } from 'react-router-dom';
import styles from './burger-ingredient.module.css';
import { ingredientProp } from '../../utils/prop-types';

function BurgerIngredient({ ingredient }) {
  const count = useSelector((state) => {
    if (ingredient.type === 'bun') {
      if (state.burgerConstructor.bun._id === ingredient._id) {
        return 2;
      }
      return 0;
    }
    return state.burgerConstructor.constructor.reduce((sum, number) => {
      if (number._id === ingredient._id) {
        return sum + 1;
      } return sum;
    }, 0);
  });

  const [, ref] = useDrag({
    type: 'ingredient',
    item: { ...ingredient, uuid: uuidv4() },
  });

  const {
    _id, image, name,
    price,
  } = ingredient;

  const location = useLocation();

  return (
    <Link
      className={styles.link}
      to={{
        pathname: `/ingredients/${_id}`,
        state: { background: location },
      }}
    >
      <li ref={ref} className={styles.ingredient}>
        {count !== 0 && <Counter count={count} size="default" />}
        <img src={image} alt={name} />
        <div className={`mt-1 ${styles.price}`}>
          <p className="mr-2 text text_type_digits-default">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`mt-1 text text_type_main-default ${styles.title}`}>{name}</p>
      </li>
    </Link>
  );
}

BurgerIngredient.propTypes = {
  ingredient: ingredientProp.isRequired,
};

export default BurgerIngredient;
