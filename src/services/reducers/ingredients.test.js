import { getIngredients } from '../../utils/burger-api';
import reducer from './ingredients';

const initialState = {
  ingredients: [],
  getIngredientsRequest: false,
  getIngredientsFailed: false,
  getIngredientsSuccess: false,
};

describe('ingredients reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      initialState,
    );
  });

  it('should handle getIngredients.pending', () => {
    expect(
      reducer(initialState, getIngredients.pending()),
    ).toEqual(
      {
        ...initialState,
        getIngredientsRequest: true,
      },
    );
  });
  it('should handle getIngredients.fulfilled', () => {
    expect(
      reducer(initialState, getIngredients.fulfilled([1, 2])),
    ).toEqual(
      {
        ...initialState,
        getIngredientsSuccess: true,
        ingredients: [1, 2],
      },
    );
  });
  it('should handle getIngredients.rejected', () => {
    expect(
      reducer(initialState, getIngredients.rejected()),
    ).toEqual(
      {
        ...initialState,
        getIngredientsFailed: true,
      },
    );
  });
});
