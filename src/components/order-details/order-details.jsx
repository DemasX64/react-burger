import '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import done from '../../images/done.png';
import { createOrder } from '../../utils/burger-api';

function OrderDetails() {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.orderDetails.order);

  useEffect(() => {
    dispatch(createOrder());
  }, []);

  return (
    <>
      <p className="mt-4 mb-8 text text_type_digits-large">{order?.order?.number}</p>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <img src={done} alt="ok" className="mt-15 mb-15" />
      <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="mt-2 mb-15 text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </>
  );
}

export default OrderDetails;
