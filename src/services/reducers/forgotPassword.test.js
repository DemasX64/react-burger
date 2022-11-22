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
});
