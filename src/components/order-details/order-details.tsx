import '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import done from '../../images/done.png';
import { createOrder } from '../../utils/burger-api';

const OrderDetails = () => {
  const dispatch = useAppDispatch();
  const order = useAppSelector((state) => state.orderDetails.order);
  const isReady = useAppSelector((state) => state.orderDetails.createOrderRequest);

  useEffect(() => {
    dispatch(createOrder());
  }, []);

  return (
    <>
      {!isReady && <p className="mt-4 mb-8 text text_type_digits-large">{order?.order?.number}</p>}
      {isReady && <p className="mt-4 mb-8 text text_type_main-large">Получение</p>}
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <img src={done} alt="ok" className="mt-15 mb-15" />
      <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="mt-2 mb-15 text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </>
  );
};

export default OrderDetails;
