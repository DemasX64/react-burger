const CATEGORIES = {
  MAIN: { TYPE: 'main', NAME: 'Начинки' },
  BUN: { TYPE: 'bun', NAME: 'Булки' },
  SAUCE: { TYPE: 'sauce', NAME: 'Соусы' },
};
const PAGES = {
  CONSTRUCTOR: 1,
  ORDERS: 2,
  PROFILE: 3,
};
const escKey = 'Escape';

const BASE_URL = 'https://norma.nomoreparties.space/api/';
const WS_BASE_URL = 'wss://norma.nomoreparties.space/';
export {
  CATEGORIES, PAGES, escKey, BASE_URL, WS_BASE_URL,
};
