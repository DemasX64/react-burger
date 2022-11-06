/* eslint-disable camelcase */
/* eslint-disable max-len */
import { Button, ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useMemo } from 'react';
import { useDrop } from 'react-dnd';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ModalOverlay from '../modal-overlay/modal-overlay';
import OrderDetails from '../order-details/order-details';
import styles from './burger-constructor.module.css';
import { addIngredientToConstructor, setBun } from '../../services/reducers/constructor';
import ConstructorElementContainer from '../constructor-element-container/constructor-element-container';
import { toggleOrderDetails } from '../../services/reducers/order-details';
import { IIngredientProp } from '../../utils/types';
import { RootState } from '../../services/store';

const BurgerConstructor = () => {
  const isLogged = useSelector((state: RootState) => state.auth.isLogged);
  const history = useHistory();

  const bun = useSelector((state: RootState) => state.burgerConstructor.bun);
  const ingredients = useSelector((state: RootState) => state.burgerConstructor.constructor);

  const { name, price, image_mobile } = bun;

  const totalPrice = useMemo(
    () => ((price * 2) + ingredients.reduce(
      (sum, currentIngredient) => sum + currentIngredient.price,
      0,
    )).toString(),
    [ingredients, bun],
  );

  const dispatch = useDispatch();

  const isOrderDetailsOpen = useSelector((state: RootState) => state.orderDetails.isOrderDetailsOpen);

  const toggleOrderDetailsHandler = () => {
    if (isLogged) {
      if (bun.name) {
        dispatch(toggleOrderDetails());
      } else {
        alert('Добавьте булку');
      }
    } else {
      history.replace('/login');
    }
  };

  const [, refDrop] = useDrop({
    accept: 'ingredient',
    drop(ingredient:IIngredientProp) {
      if (ingredient.type === 'bun') {
        dispatch(setBun(ingredient));
      } else {
        dispatch(addIngredientToConstructor(ingredient));
      }
    },
  });

  return (
    <section>
      <ul className="mt-25 pl-4">
        <li className="ml-8">
          {bun.name ? <ConstructorElement isLocked type="top" text={`${name} (верх)`} price={price} thumbnail={image_mobile} /> : <p className="text text_type_main-default">Здесь должна быть булка, но ее нет. Перенесите ее из списка.</p>}
        </li>
        <li>
          <ul ref={refDrop} className={`pr-2 mt-4 mb-4 ${styles.container}`}>
            {ingredients.map(
              (ingredient, index) => (<ConstructorElementContainer key={ingredient.uuid} ingredient={ingredient} index={index} />),
            )}
          </ul>
        </li>
        <li className="ml-8">
          {bun.name ? <ConstructorElement isLocked type="bottom" text={`${name} (низ)`} price={price} thumbnail={image_mobile} /> : <p className="text text_type_main-default">Здесь должна быть булка, но ее нет. Перенесите ее из списка.</p>}
        </li>
      </ul>
      <div className={`mb-13 mt-10 pl-4 pr-4  ${styles.total}`}>
        <div className={`mt-1 mr-10 ${styles.price}`}>
          <p className="text text_type_digits-medium mr-2">{totalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="submit" type="primary" size="large" onClick={toggleOrderDetailsHandler}>Оформить заказ</Button>
        {isOrderDetailsOpen && <ModalOverlay onClick={toggleOrderDetailsHandler}><OrderDetails /></ModalOverlay>}
      </div>
    </section>
  );
};

export default BurgerConstructor;
