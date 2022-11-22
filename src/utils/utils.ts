import { IIngredientProp } from './types';

export const calculateTotalPrice = (ingredients: IIngredientProp[]): number => ingredients
  .reduce((sum, current) => sum + current.price, 0);

export const convertDate = (dateStr: string): string => {
  const now = new Date();
  const date = new Date(dateStr);
  const time = `${(`0${date.getHours()}`).slice(-2)}:${(`0${date.getMinutes()}`).slice(-2)}`;
  let day = 'Сегодня';
  if (now.getDate() - 1 === date.getDate()) {
    day = 'Вчера';
  }
  if (date.getDate() < now.getDate() - 1) {
    day = `${now.getDate() - date.getDate()} дня назад`;
  }
  return `${day}, ${time}`;
};
