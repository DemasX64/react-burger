import reducer, { setIsConnected, setData } from './orders';

describe('orders reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        isConnected: false,
        orders: [],
        total: 0,
        totalToday: 0,
      },
    );
  });

  it('should handle setIsConnected', () => {
    expect(
      reducer(undefined, setIsConnected(true)),
    ).toEqual(
      {
        isConnected: true,
        orders: [],
        total: 0,
        totalToday: 0,
      },
    );
  });
  const data = {
    orders: [1, 2],
    total: 1,
    totalToday: 10,
  };
  it('should handle setData', () => {
    expect(
      reducer(undefined, setData(data)),
    ).toEqual(
      {
        isConnected: false,
        ...data,
      },
    );
  });
});
