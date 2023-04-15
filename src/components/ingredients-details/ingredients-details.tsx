/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ingredients-details.module.css';
import useAppSelector from '../../hooks/useAppSelector';

const IngredientsDetails = () => {
  const params = useParams<{id:string}>();

  let image_large = '';
  let name = '';
  let proteins = 0;
  let fat = 0;
  let carbohydrates = 0;
  let calories = 0;
  const ingredients = useAppSelector((state) => state.ingredients.ingredients);
  useMemo(() => {
    if (ingredients.length !== 0) {
      const ingredient = ingredients.find((el) => el._id === params.id);
      if (ingredient) {
        image_large = ingredient.image_large;
        name = ingredient.name;
        proteins = ingredient.proteins;
        fat = ingredient.fat;
        carbohydrates = ingredient.carbohydrates;
        calories = ingredient.calories;
      }
    }
  }, [ingredients]);

  return (
    <div className={styles.container}>
      <img src={image_large} alt={name} className="ml-5 mr-5" />
      <p className="mt-4 mb-8 text text_type_main-medium">{name}</p>
      <ul className={styles.nutritionalValue}>
        <li>
          <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
          <p className="text text_type_digits-default text_color_inactive" data-cy="ingredient-info">{calories}</p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_digits-default text_color_inactive" data-cy="ingredient-info">{proteins}</p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          <p className="text text_type_digits-default text_color_inactive" data-cy="ingredient-info">{fat}</p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          <p className="text text_type_digits-default text_color_inactive" data-cy="ingredient-info">{carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
};

export default IngredientsDetails;
