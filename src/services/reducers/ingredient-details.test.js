import reducer, { toggleIngredientDetails, setCurrentIngredient } from './ingredient-details';

describe('ingredient details reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        currentIngredient: null,
        isIngredientDetailsOpen: false,
      },
    );
  });

  it('should handle toggleIngredientDetails', () => {
    expect(
      reducer(undefined, toggleIngredientDetails()),
    ).toEqual(
      {
        currentIngredient: null,
        isIngredientDetailsOpen: true,
      },
    );
  });
  const data = {
    orders: [1, 2],
    total: 1,
    totalToday: 10,
  };
  it('should handle setCurrentIngredient', () => {
    expect(
      reducer(undefined, setCurrentIngredient(data)),
    ).toEqual(
      {
        currentIngredient: data,
        isIngredientDetailsOpen: false,
      },
    );
  });
});
