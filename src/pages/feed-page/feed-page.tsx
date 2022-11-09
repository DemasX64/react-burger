import React, { useState } from 'react';
import Order from '../../components/order/order';
import { IIngredientProp } from '../../utils/types';
import styles from './feed.module.css';

const arr:IIngredientProp[] = [
  {
    _id: '60666c42cc7b410027a1a9b1',
    name: 'Краторная булка N-200i',
    type: 'bun',
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
    _v: 0,
  },
  {
    _id: '60666c42cc7b410027a1a9b5',
    name: 'Говяжий метеорит (отбивная)',
    type: 'main',
    proteins: 800,
    fat: 800,
    carbohydrates: 300,
    calories: 2674,
    price: 3000,
    image: 'https://code.s3.yandex.net/react/code/meat-04.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-04-large.png',
    _v: 0,
  },
  {
    _id: '60666c42cc7b410027a1a9b1',
    name: 'Краторная булка N-200i',
    type: 'bun',
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
    _v: 0,
  },
  {
    _id: '60666c42cc7b410027a1a9b5',
    name: 'Говяжий метеорит (отбивная)',
    type: 'main',
    proteins: 800,
    fat: 800,
    carbohydrates: 300,
    calories: 2674,
    price: 3000,
    image: 'https://code.s3.yandex.net/react/code/meat-04.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-04-large.png',
    _v: 0,
  },
  {
    _id: '60666c42cc7b410027a1a9b1',
    name: 'Краторная булка N-200i',
    type: 'bun',
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
    _v: 0,
  },
  {
    _id: '60666c42cc7b410027a1a9b5',
    name: 'Говяжий метеорит (отбивная)',
    type: 'main',
    proteins: 800,
    fat: 800,
    carbohydrates: 300,
    calories: 2674,
    price: 3000,
    image: 'https://code.s3.yandex.net/react/code/meat-04.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-04-large.png',
    _v: 0,
  },
  {
    _id: '60666c42cc7b410027a1a9b1',
    name: 'Краторная булка N-200i',
    type: 'bun',
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
    _v: 0,
  },
  {
    _id: '60666c42cc7b410027a1a9b5',
    name: 'Говяжий метеорит (отбивная)',
    type: 'main',
    proteins: 800,
    fat: 800,
    carbohydrates: 300,
    calories: 2674,
    price: 3000,
    image: 'https://code.s3.yandex.net/react/code/meat-04.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-04-large.png',
    _v: 0,
  },
];

const FeedPage = () => {
  const [ready, setReady] = useState(['034533', '034532', '034530', '034527', '034525']);
  const [work, setWork] = useState(['034533', '034532', '034530', '034527', '034525']);
  
  const { page, header, container, orders, statistics, statisticsOrders, statisticsOrdersContainer } = styles;
  return (
    <div className={page}>
      <p className={`text text_type_main-large ${header}`}>Лента заказов</p>
      <div className={container}>
        <div className={orders}>
          <Order maxElements={1} number={123} date="Сегодня, 16:20 i-GMT+3" title="Death Star Starship Main бургер" price={480} ingredients={arr} />
          <Order maxElements={0} number={123} date="Сегодня, 16:20 i-GMT+3" title="Death Star Starship Main бургер" price={480} ingredients={arr} />
          <Order maxElements={2} number={123} date="Сегодня, 16:20 i-GMT+3" title="Death Star Starship Main бургер" price={480} ingredients={arr} />
          <Order maxElements={3} number={123} date="Сегодня, 16:20 i-GMT+3" title="Death Star Starship Main бургер" price={480} ingredients={arr} />
          <Order maxElements={4} number={123} date="Сегодня, 16:20 i-GMT+3" title="Death Star Starship Main бургер" price={480} ingredients={arr} />
          <Order maxElements={5} number={123} date="Сегодня, 16:20 i-GMT+3" title="Death Star Starship Main бургер" price={480} ingredients={arr} />
          <Order maxElements={6} number={123} date="Сегодня, 16:20 i-GMT+3" title="Death Star Starship Main бургер" price={480} ingredients={arr} />
          <Order maxElements={7} number={123} date="Сегодня, 16:20 i-GMT+3" title="Death Star Starship Main бургер" price={480} ingredients={arr} />
          <Order maxElements={8} number={123} date="Сегодня, 16:20 i-GMT+3" title="Death Star Starship Main бургер" price={480} ingredients={arr} />
        </div>
        <div className={statistics}>
          <div className={statisticsOrdersContainer}>
            <div style={{ flex: 1 }}>
              <p className="text text_type_main-medium mb-6">Готовы:</p>
              <div className={statisticsOrders}>
                {ready.map((el) => <p className="text text_type_digits-default text_color_success">{el}</p>)}
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <p className="text text_type_main-medium mb-6">В работе:</p>
              <div className={statisticsOrders}>
                {work.map((el) => <p className="text text_type_digits-default">{el}</p>)}
              </div>
            </div>
          </div>
          <div>
            <p className="text text_type_main-medium">Выполнено за все время:</p>
            <p className="text text_type_digits-large">28 752</p>
          </div>
          <div>
            <p className="text text_type_main-medium">Выполнено за сегодня:</p>
            <p className="text text_type_digits-large">138</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
