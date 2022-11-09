/* eslint-disable camelcase */
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FC } from 'react';
import { IIngredientProp } from '../../utils/types';
import styles from './order.module.css';

interface IOrderProps {
  number: number,
  title: string,
  date: string,
  price: number,
  ingredients: Array<IIngredientProp>,
  maxElements: number,
}

const Order: FC<IOrderProps> = (props) => {
  const { number, title, date, price, ingredients, maxElements } = props;
  const { container, header, footer, footerIngredients, footerPrice, ingredientIcon } = styles;
  return (
    <div className={container}>
      <div className={header}>
        <p className="text text_type_digits-default">{number}</p>
        <p className="text text_type_main-default text_color_inactive">{date}</p>
      </div>
      <p className="text text_type_main-medium">{title}</p>
      <div className={footer}>
        <div className={footerIngredients}>
          {ingredients.reverse().map((ingredient, index:number) => {
            const { image_mobile } = ingredient;
            return index === 0 && maxElements !== ingredients.length
              ? (
                <div style={{ position: 'relative', width: 64, height: 64 }}>
                  <img style={{ opacity: 0.6 }} className={ingredientIcon} src={image_mobile} alt="ico" />
                  <p style={{ position: 'absolute', margin: 0, transform: 'translate(50%,-250%)' }}>{`+${ingredients.length - maxElements}`}</p>
                </div>
              )
              : index <= maxElements && <img className={ingredientIcon} src={image_mobile} alt="ico" />;
          })}
        </div>
        <div className={footerPrice}>
          <p className="text text_type_digits-default">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export default Order;
