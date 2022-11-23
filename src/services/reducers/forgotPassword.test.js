import { forgotPassword } from '../../utils/auth-api';
import reducer, { setEmail } from './forgotPassword';

const initialState = {
  forgotPasswordPending: false,
  forgotPasswordSuccess: false,
  forgotPasswordFailed: false,

  email: '',
};

describe('forgot password reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      initialState,
    );
  });
  const newEmail = 'test@gmail.com';
  it('should handle setEmail', () => {
    expect(
      reducer(initialState, setEmail(newEmail)),
    ).toEqual(
      {
        ...initialState,
        email: newEmail,
      },
    );
  });
  it('should handle forgotPassword.pending', () => {
    expect(
      reducer(initialState, forgotPassword.pending()),
    ).toEqual(
      {
        ...initialState,
        forgotPasswordPending: true,
      },
    );
  });
  it('should handle forgotPassword.fulfilled', () => {
    expect(
      reducer(initialState, forgotPassword.fulfilled()),
    ).toEqual(
      {
        ...initialState,
        forgotPasswordSuccess: true,
      },
    );
  });
  it('should handle forgotPassword.rejected', () => {
    expect(
      reducer(initialState, forgotPassword.rejected()),
    ).toEqual(
      {
        ...initialState,
        forgotPasswordFailed: true,
      },
    );
  });
});
