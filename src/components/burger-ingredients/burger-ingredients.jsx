/* eslint-disable max-len */
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BurgerCategory from '../burger-category/burger-category';
import styles from './burger-ingredients.module.css';
import { setCurrentTab } from '../../services/reducers';

const CATEGORIES = {
  MAIN: { TYPE: 'main', NAME: 'Начинки' },
  BUN: { TYPE: 'bun', NAME: 'Булки' },
  SAUCE: { TYPE: 'sauce', NAME: 'Соусы' },
};

function BurgerIngredients() {
  const dispatch = useDispatch();
  const currentTab = useSelector((state) => state.burger.currentTab);

  const setCurrentTabHandler = (value) => {
    dispatch(setCurrentTab(value));
  };
  const ingredients = useSelector((state) => state.burger.ingredients);

  const main = ingredients.filter((ingredient) => ingredient.type === CATEGORIES.MAIN.TYPE);
  const bun = ingredients.filter((ingredient) => ingredient.type === CATEGORIES.BUN.TYPE);
  const sauce = ingredients.filter((ingredient) => ingredient.type === CATEGORIES.SAUCE.TYPE);

  // const main = props.ingredients.filter((ingredient) => ingredient.type===CATEGORIES.MAIN.TYPE)
  // const bun = props.ingredients.filter((ingredient) => ingredient.type===CATEGORIES.BUN.TYPE)
  // const sauce = props.ingredients.filter((ingredient) => ingredient.type===CATEGORIES.SAUCE.TYPE)

  const isBunActive = currentTab === CATEGORIES.BUN.NAME;
  const isMainActive = currentTab === CATEGORIES.MAIN.NAME;
  const isSauceActive = currentTab === CATEGORIES.SAUCE.NAME;

  return (
    <section className={styles.container}>
      <p className="text text_type_main-large mt-10">Соберите бургер</p>
      <div className={`mt-5 ${styles.nav}`}>
        <a href="#bun" className={styles.anchor}>
          <Tab value={CATEGORIES.BUN.NAME} active={isBunActive} onClick={setCurrentTabHandler}>Булки</Tab>
        </a>
        <a href="#sauce" className={styles.anchor}>
          <Tab value={CATEGORIES.SAUCE.NAME} active={isSauceActive} onClick={setCurrentTabHandler}>Соусы</Tab>
        </a>
        <a href="#main" className={styles.anchor}>
          <Tab value={CATEGORIES.MAIN.NAME} active={isMainActive} onClick={setCurrentTabHandler}>Начинки</Tab>
        </a>
      </div>
      <ul className={styles.categories}>
        <BurgerCategory id={CATEGORIES.BUN.TYPE} title={CATEGORIES.BUN.NAME} ingredients={bun} />
        <BurgerCategory id={CATEGORIES.SAUCE.TYPE} title={CATEGORIES.SAUCE.NAME} ingredients={sauce} />
        <BurgerCategory id={CATEGORIES.MAIN.TYPE} title={CATEGORIES.MAIN.NAME} ingredients={main} />
      </ul>
    </section>
  );
}

export default BurgerIngredients;
