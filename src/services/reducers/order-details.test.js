import { createOrder } from '../../utils/burger-api';
import reducer, { setOrder, toggleOrderDetails } from './order-details';

const initialState = {
  createOrderRequest: false,
  createOrderFailed: false,
  createOrderSuccess: false,
  order: {
    name: '',
    order: {
      number: 0,
    },
    success: true,
  },
  isOrderDetailsOpen: false,
};

describe('order details reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      initialState,
    );
  });

  it('should handle toggleOrderDetails', () => {
    expect(
      reducer(initialState, toggleOrderDetails()),
    ).toEqual(
      {
        ...initialState,
        isOrderDetailsOpen: true,
      },
    );
  });
  const newOrder = {
    name: 'Бургер',
    order: {
      number: 123,
    },
    success: true,
  };
  it('should handle setOrder', () => {
    expect(
      reducer(initialState, setOrder(newOrder)),
    ).toEqual(
      {
        ...initialState,
        order: newOrder,
      },
    );
  });
  it('should handle createOrder.pending', () => {
    expect(
      reducer(initialState, createOrder.pending()),
    ).toEqual(
      {
        ...initialState,
        createOrderRequest: true,
      },
    );
  });
  it('should handle createOrder.fulfilled', () => {
    expect(
      reducer(initialState, createOrder.fulfilled(newOrder)),
    ).toEqual(
      {
        ...initialState,
        createOrderSuccess: true,
        order: newOrder,
      },
    );
  });
  it('should handle createOrder.rejected', () => {
    expect(
      reducer(initialState, createOrder.rejected()),
    ).toEqual(
      {
        ...initialState,
        createOrderFailed: true,
      },
    );
  });
});
