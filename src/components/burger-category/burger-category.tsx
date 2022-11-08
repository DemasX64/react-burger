/* eslint-disable no-underscore-dangle */
import React, { FC } from 'react';
import { InView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import styles from './burger-category.module.css';
import { setBunInView, setMainInView, setSauceInView } from '../../services/reducers';
import { CATEGORIES } from '../../utils/constants';
import { IIngredientProp } from '../../utils/types';

interface IBurgerCategoryProps {
  ingredients: Array<IIngredientProp>,
  title: string,
  id: string,
}

const BurgerCategory: FC<IBurgerCategoryProps> = (props) => {
  const dispatch = useDispatch();
  const { title, id, ingredients } = props;
  const onChangeTabHandle = (inView: boolean) => {
    switch (title) {
      case CATEGORIES.BUN.NAME: {
        dispatch(setBunInView(inView));
        break;
      }
      case CATEGORIES.MAIN.NAME: {
        dispatch(setMainInView(inView));
        break;
      }
      case CATEGORIES.SAUCE.NAME: {
        dispatch(setSauceInView(inView));
        break;
      }
      default: {
        dispatch(setBunInView(inView));
      }
    }
  };

  return (
    <>
      <InView onChange={(inView) => onChangeTabHandle(inView)} as="p" id={id} className="text text_type_main-medium pt-10">{title}</InView>
      <ul className={styles.list}>
        {ingredients.map(
          (ingredient) => (<BurgerIngredient key={ingredient._id} ingredient={ingredient} />),
        )}
      </ul>
    </>
  );
};

export default BurgerCategory;
