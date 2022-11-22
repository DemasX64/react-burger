import reducer, { setUser, deleteUser } from './auth';

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  isLogged: false,
};

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      initialState,
    );
  });
  const testUser = {
    name: 'test',
    email: 'test@gmail.com',
    password: '123456',
  };
  it('should handle setUser', () => {
    expect(
      reducer(initialState, setUser(testUser)),
    ).toEqual(
      {
        user: testUser,
        isLogged: true,
      },
    );
  });
  it('should handle deleteUser', () => {
    expect(
      reducer({ user: { name: 'da', email: 's@gmail.com', password: '123456' }, isLogged: true }, deleteUser()),
    ).toEqual(
      initialState,
    );
  });
});
