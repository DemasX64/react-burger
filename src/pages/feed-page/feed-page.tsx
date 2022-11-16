import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Order from '../../components/order/order';
import { RootState } from '../../services/store';
import styles from './feed-page.module.css';

const FeedPage = () => {
  const total = useSelector((state: RootState) => state.feed.total);
  const totalToday = useSelector((state: RootState) => state.feed.totalToday);
  const orders = useSelector((state: RootState) => state.feed.orders);

  const [ready, setReady] = useState<number[]>([]);
  const [work, setWork] = useState<number[]>([]);

  useEffect(() => {
    const r:number[] = [];
    const w:number[] = [];
    orders.forEach((el) => {
      if (el.status === 'done') {
        if (r.length < 10) {
          r.push(el.number);
        }
      }
      if (el.status === 'pending') {
        if (w.length < 10) {
          w.push(el.number);
        }
      }
    });
    setReady(r);
    setWork(w);
  }, [orders]);

  const {
    page, header, container, column,
    ordersContainer, statistics, statisticsOrders, statisticsOrdersContainer,
  } = styles;

  return (
    <div className={page}>
      <p className={`text text_type_main-large ${header}`}>Лента заказов</p>
      <div className={container}>
        <div className={ordersContainer}>
          {orders.map((order) => {
            const {
              createdAt, name, number, _id, ingredients,
            } = order;
            return (
              <Order
                _id={_id}
                key={_id}
                number={number}
                date={createdAt}
                title={name}
                ingredients={ingredients}
              />
            );
          })}
        </div>
        <div className={statistics}>
          <div className={statisticsOrdersContainer}>
            <div className={column}>
              <p className="text text_type_main-medium mb-6">Готовы:</p>
              <div className={statisticsOrders}>
                {ready.map((el) => <p key={el} className="text text_type_digits-default text_color_success">{el}</p>)}
              </div>
            </div>
            <div className={column}>
              <p className="text text_type_main-medium mb-6">В работе:</p>
              <div className={statisticsOrders}>
                {work.map((el) => <p key={el} className="text text_type_digits-default">{el}</p>)}
              </div>
            </div>
          </div>
          <div>
            <p className="text text_type_main-medium">Выполнено за все время:</p>
            <p className="text text_type_digits-large">{total}</p>
          </div>
          <div>
            <p className="text text_type_main-medium">Выполнено за сегодня:</p>
            <p className="text text_type_digits-large">{totalToday}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
