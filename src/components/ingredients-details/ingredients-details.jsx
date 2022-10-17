/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import { useSelector } from 'react-redux';
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ingredients-details.module.css';

function IngredientsDetails() {
  const params = useParams();
  // const {
  //   image_large,
  //   name,
  //   proteins,
  //   fat,
  //   carbohydrates,
  //   calories,
  // } = useSelector((state) => state.ingredients.ingredients.find((el) => el._id === params.id));

  let image_large = '';
  let name = '';
  let proteins = '';
  let fat = '';
  let carbohydrates = '';
  let calories = '';
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  useMemo(() => {
    if (ingredients.length !== 0) {
      const ingredient = ingredients.find((el) => el._id === params.id);
      image_large = ingredient.image_large;
      name = ingredient.name;
      proteins = ingredient.proteins;
      fat = ingredient.fat;
      carbohydrates = ingredient.carbohydrates;
      calories = ingredient.calories;
    }
  }, [ingredients]);
  // const {
  //   image_large,
  //   name,
  //   proteins,
  //   fat,
  //   carbohydrates,
  //   calories,
  // } = useSelector((state) => state.ingredientDetails.currentIngredient);
  return (
    <div className={styles.container}>
      <img src={image_large} alt={name} className="ml-5 mr-5" />
      <p className="mt-4 mb-8 text text_type_main-medium">{name}</p>
      <ul className={styles.nutritionalValue}>
        <li>
          <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
          <p className="text text_type_digits-default text_color_inactive">{calories}</p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_digits-default text_color_inactive">{proteins}</p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          <p className="text text_type_digits-default text_color_inactive">{fat}</p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          <p className="text text_type_digits-default text_color_inactive">{carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
}

export default IngredientsDetails;
