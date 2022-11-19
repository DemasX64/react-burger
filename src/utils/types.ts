export interface IIngredientProp {
  _id: string,
  name: string,
  type: string,
  proteins: number,
  fat: number,
  carbohydrates: number,
  calories: number,
  price: number,
  image: string,
  image_mobile: string,
  image_large: string,
  _v: number,
  uuid?: string,
  isLocked?: boolean,
}

export interface IState {
  from: string
}

export interface IOrder {
  createdAt: string,
  ingredients: string[],
  name: string,
  number: number,
  status: 'done' | 'pending' | 'cancel',
  updatedAt: string,
  _id: string,
}

export interface IOrderDetails {
  name: string,
  order: {
    number: number,
  },
  success: boolean,
}

export interface IOrderStatistic {
  orders: IOrder[],
  success: boolean,
  total: number,
  totalToday: number,
}

export interface IUser {
  name: string,
  email: string,
  password: string,
  token: string | undefined
}
