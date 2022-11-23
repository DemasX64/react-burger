import { resetPassword } from '../../utils/auth-api';
import reducer, { setPassword, setToken } from './resetPassword';

const initialState = {
  resetPasswordPending: false,
  resetPasswordSuccess: false,
  resetPasswordFailed: false,

  password: '',
  token: '',
};

describe('reset password reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      initialState,
    );
  });

  it('should handle setPassword', () => {
    expect(
      reducer(initialState, setPassword('123456')),
    ).toEqual(
      {
        ...initialState,
        password: '123456',
      },
    );
  });
  it('should handle setToken', () => {
    expect(
      reducer(initialState, setToken('token')),
    ).toEqual(
      {
        ...initialState,
        token: 'token',
      },
    );
  });
  it('should handle resetPassword.pending', () => {
    expect(
      reducer(initialState, resetPassword.pending()),
    ).toEqual(
      {
        ...initialState,
        resetPasswordPending: true,
      },
    );
  });
  it('should handle resetPassword.fulfilled', () => {
    expect(
      reducer(initialState, resetPassword.fulfilled()),
    ).toEqual(
      {
        ...initialState,
        resetPasswordSuccess: true,
      },
    );
  });
  it('should handle resetPassword.rejected', () => {
    expect(
      reducer(initialState, resetPassword.rejected()),
    ).toEqual(
      {
        ...initialState,
        resetPasswordFailed: true,
      },
    );
  });
});
