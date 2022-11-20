/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
/* eslint-disable no-underscore-dangle */
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FC, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import useStatusColor from '../../hooks/useStatusColor';
import { connect, disconnect } from '../../services/reducers/orders';
import { WS_BASE_URL } from '../../utils/constants';
import { IIngredientProp, IOrder } from '../../utils/types';
import { calculateTotalPrice, convertDate } from '../../utils/utils';
import styles from './order-page.module.css';

interface IOrderPage {
  // eslint-disable-next-line no-unused-vars
  setOrderNumber?: (number: number) => void,
}

const OrderPage: FC<IOrderPage> = ({ setOrderNumber }) => {
  const { id } = useParams<{id:string}>();

  const orders = useAppSelector((state) => state.orders.orders);
  const [order, setOrder] = useState<IOrder | null>(null);
  const allIngredients = useAppSelector((store) => store.ingredients.ingredients);
  const [ingredientsObj, setIngredientsObj] = useState<(IIngredientProp & {count: number})[]>([]);
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const foundedOrder = orders.find((el) => el._id === id);
    if (foundedOrder) {
      setOrder(foundedOrder);
    }
  }, [orders]);

  useEffect(() => {
    setIngredientsObj([]);
    const countedOrders:{[key:string]:number} = {};
    order?.ingredients.forEach((el) => {
      countedOrders[el] = (countedOrders[el] || 0) + 1;
    });

    Object.entries(countedOrders).forEach((arr) => {
      const findIngredient = allIngredients.find((el) => el._id === arr[0]);
      if (findIngredient) {
        setIngredientsObj((prev) => [...prev, { ...findIngredient, count: arr[1] }]);
      }
    });
  }, [order]);

  useEffect(() => {
    if (order?.number && setOrderNumber) {
      setOrderNumber(order.number);
    }
  }, [order]);

  useEffect(() => {
    if (!setOrderNumber) {
      dispatch(connect(`${WS_BASE_URL}orders/all`));
      return () => {
        dispatch(disconnect());
      };
    }
  }, []);

  const { statusColor, statusText } = useStatusColor(order?.status);

  const orderNotFound = () => {
    return (
      <p className={`text text_type_main-large ${styles.notFoundText}`}>Заказ не найден</p>
    );
  };

  const orderFound = () => {
    const {
      container, ingredientsList, footer, ingredientContainer,
      priceContainer, ingredientIcon, header, ingredientName,
    } = styles;

    return (
      <div className={container}>
        {!location?.state && <p className={`text text_type_digits-default ${header} ${location?.state ? '' : 'mt-30'}`}>{`#${order?.number}`}</p>}
        <p className="text text_type_main-medium mt-10">{order?.name}</p>
        <p className={`text text_type_main-default mt-3 ${statusColor}`}>{statusText}</p>
        <p className="text text_type_main-medium mt-15">Состав:</p>
        <div className={ingredientsList}>
          {ingredientsObj.map((ingredient) => {
            const {
              name, price, count,
            } = ingredient;
            return (
              <div key={uuidv4()} className={ingredientContainer}>
                <img className={ingredientIcon} src={ingredient.image_mobile} alt="" />
                <p className={`text text_type_main-default ${ingredientName}`}>{name}</p>
                <div className={priceContainer}>
                  <p className="text text_type_digits-default">{`${count} x ${price}`}</p>
                  <CurrencyIcon type="primary" />
                </div>
              </div>
            );
          })}
        </div>
        <div className={footer}>
          <p className="text text_type_main-default text_color_inactive">{order?.createdAt ? convertDate(order.createdAt) : ''}</p>
          <div className={priceContainer}>
            <p className="text text_type_digits-default">{calculateTotalPrice(ingredientsObj)}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    );
  };

  return (order ? orderFound() : orderNotFound());
};

export default OrderPage;
