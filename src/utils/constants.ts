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
const escKeyCode = 27;

const BASE_URL = 'https://norma.nomoreparties.space/api/';

export {
  CATEGORIES, PAGES, escKeyCode, BASE_URL,
};
