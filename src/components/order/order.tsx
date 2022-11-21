/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAppSelector from '../../hooks/useAppSelector';
import useStatusColor from '../../hooks/useStatusColor';
import { IIngredientProp } from '../../utils/types';
import { calculateTotalPrice, convertDate } from '../../utils/utils';
import styles from './order.module.css';

interface IOrderProps {
  _id: string,
  number: number,
  title: string,
  date: string,
  ingredients: string[],
  status?: 'done' | 'pending' | 'cancel' | null,
}

const maxElements = 5;

const Order: FC<IOrderProps> = (props) => {
  const {
    _id, number, title, date, ingredients, status,
  } = props;
  const {
    container, header, footer, footerIngredients, ingredientIconOverlay, ingredientIconShadow,
    footerPrice, ingredientIcon, link, ingredientIconContainer,
  } = styles;
  const [ingredientsObj, setIngredientsObj] = useState<IIngredientProp[]>([]);
  const [price, setPrice] = useState(0);
  const allIngredients = useAppSelector((store) => store.ingredients.ingredients);

  const { statusColor, statusText } = useStatusColor(status);

  useEffect(() => {
    ingredients.forEach((ingredientID) => {
      const findIngredient = allIngredients.find((el) => el._id === ingredientID);
      if (findIngredient) {
        setIngredientsObj((prev) => [...prev, findIngredient]);
      }
    });
  }, []);

  useEffect(() => {
    setPrice(calculateTotalPrice(ingredientsObj));
  }, [ingredientsObj]);

  const location = useLocation();

  return (
    <Link
      className={link}
      to={{
        pathname: `${location.pathname}/${_id}`,
        // state: location.pathname === '/feed' ? { background: location } : null,
        state: { background: location },
      }}
    >
      <div className={container}>
        <div className={header}>
          <p className="text text_type_digits-default">{`#${number}`}</p>
          <p className="text text_type_main-default text_color_inactive">{convertDate(date)}</p>
        </div>
        <div>
          <p className="text text_type_main-medium">{title}</p>
          {status && <p className={`text text_type_main-default mt-2 ${statusColor}`}>{statusText}</p>}
        </div>
        <div className={footer}>
          <div className={footerIngredients}>
            {ingredientsObj.slice().reverse().map((ingredient, index) => {
              const { image_mobile } = ingredient;
              return index === 0
                && maxElements !== ingredients.length
                && maxElements <= ingredients.length
                ? (
                  <div key={index} className={ingredientIconContainer}>
                    <img className={`${ingredientIcon} ${ingredientIconShadow}`} src={image_mobile} alt="ico" />
                    <p className={ingredientIconOverlay}>{`+${ingredients.length - maxElements}`}</p>
                  </div>
                )
                : index <= maxElements && <img key={index} className={ingredientIcon} src={image_mobile} alt="ico" />;
            })}
          </div>
          <div className={footerPrice}>
            <p className="text text_type_digits-default">{price}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </Link>
  );
};

Order.defaultProps = {
  status: null,
};

export default Order;
