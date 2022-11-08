
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

export interface IOrder {
  name: string,
  order: {
    number: number
  },
  success: boolean
}

export interface IState {
  from: string
}