import { login } from '../../utils/auth-api';
import reducer, { setEmail, setPassword } from './login';

const initialState = {
  loginRequest: false,
  loginFailed: false,
  loginSuccess: false,

  emailInput: '',
  passwordInput: '',
};

describe('login reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      initialState,
    );
  });

  it('should handle setEmail', () => {
    expect(
      reducer(initialState, setEmail('test@gmail.com')),
    ).toEqual(
      {
        ...initialState,
        emailInput: 'test@gmail.com',
      },
    );
  });
  it('should handle setPassword', () => {
    expect(
      reducer(initialState, setPassword('123456')),
    ).toEqual(
      {
        ...initialState,
        passwordInput: '123456',
      },
    );
  });
  it('should handle login.pending', () => {
    expect(
      reducer(initialState, login.pending()),
    ).toEqual(
      {
        ...initialState,
        loginRequest: true,
      },
    );
  });
  it('should handle login.pending', () => {
    expect(
      reducer(initialState, login.fulfilled()),
    ).toEqual(
      {
        ...initialState,
        loginSuccess: true,
      },
    );
  });
  it('should handle login.pending', () => {
    expect(
      reducer(initialState, login.rejected()),
    ).toEqual(
      {
        ...initialState,
        loginFailed: true,
      },
    );
  });
});
