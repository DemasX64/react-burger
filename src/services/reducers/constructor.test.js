import reducer, {
  addIngredientToConstructor, removeIngredientFromConstructor, setBun, swapItems,
} from './constructor';

const standartBun = {
  _id: '',
  name: '',
  type: '',
  proteins: 0,
  fat: 0,
  carbohydrates: 0,
  calories: 0,
  price: 0,
  _v: 0,
  image: '',
  image_large: '',
  image_mobile: '',
};

describe('constructor reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        bun: standartBun,
        constructor: [],
      },
    );
  });

  it('should handle addIngredientToConstructor', () => {
    expect(
      reducer(undefined, addIngredientToConstructor(1)),
    ).toEqual(
      {
        bun: standartBun,
        constructor: [1],
      },
    );
  });
  it('should handle removeIngredientFromConstructor', () => {
    expect(
      reducer({
        bun: standartBun,
        constructor: [standartBun],
      }, removeIngredientFromConstructor('')),
    ).toEqual(
      {
        bun: standartBun,
        constructor: [],
      },
    );
  });
  it('should handle swapItems', () => {
    expect(
      reducer({
        bun: standartBun,
        constructor: [1, 2],
      }, swapItems({ dragIndex: 0, hoverIndex: 1 })),
    ).toEqual(
      {
        bun: standartBun,
        constructor: [2, 1],
      },
    );
  });

  const newBun = {
    test: true,
  };
  it('should handle setBun', () => {
    expect(
      reducer(undefined, setBun(newBun)),
    ).toEqual(
      {
        bun: newBun,
        constructor: [],
      },
    );
  });
});
