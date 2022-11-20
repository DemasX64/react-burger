/* eslint-disable max-len */
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import BurgerCategory from '../burger-category/burger-category';
import styles from './burger-ingredients.module.css';
import { setCurrentTab } from '../../services/reducers';
import { CATEGORIES } from '../../utils/constants';
import useAppSelector from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';

const BurgerIngredients = () => {
  const dispatch = useAppDispatch();
  const currentTab = useAppSelector((state) => state.burger.currentTab);

  const setCurrentTabHandler = (value: string) => {
    dispatch(setCurrentTab(value));
  };
  const ingredients = useAppSelector((state) => state.ingredients.ingredients);

  const main = ingredients.filter((ingredient) => ingredient.type === CATEGORIES.MAIN.TYPE);
  const bun = ingredients.filter((ingredient) => ingredient.type === CATEGORIES.BUN.TYPE);
  const sauce = ingredients.filter((ingredient) => ingredient.type === CATEGORIES.SAUCE.TYPE);

  const isBunActive = currentTab === CATEGORIES.BUN.NAME;
  const isMainActive = currentTab === CATEGORIES.MAIN.NAME;
  const isSauceActive = currentTab === CATEGORIES.SAUCE.NAME;

  return (
    <section className={styles.container}>
      <p className="text text_type_main-large mt-10">Соберите бургер</p>
      <div className={`mt-5 ${styles.nav}`}>
        <a href="#bun" className={styles.anchor}>
          <Tab value={CATEGORIES.BUN.NAME} active={isBunActive} onClick={setCurrentTabHandler}>{CATEGORIES.BUN.NAME}</Tab>
        </a>
        <a href="#sauce" className={styles.anchor}>
          <Tab value={CATEGORIES.SAUCE.NAME} active={isSauceActive} onClick={setCurrentTabHandler}>{CATEGORIES.SAUCE.NAME}</Tab>
        </a>
        <a href="#main" className={styles.anchor}>
          <Tab value={CATEGORIES.MAIN.NAME} active={isMainActive} onClick={setCurrentTabHandler}>{CATEGORIES.MAIN.NAME}</Tab>
        </a>
      </div>
      <ul className={styles.categories}>
        <BurgerCategory id={CATEGORIES.BUN.TYPE} title={CATEGORIES.BUN.NAME} ingredients={bun} />
        <BurgerCategory id={CATEGORIES.SAUCE.TYPE} title={CATEGORIES.SAUCE.NAME} ingredients={sauce} />
        <BurgerCategory id={CATEGORIES.MAIN.TYPE} title={CATEGORIES.MAIN.NAME} ingredients={main} />
      </ul>
    </section>
  );
};

export default BurgerIngredients;
