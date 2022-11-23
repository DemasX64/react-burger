import { register } from '../../utils/auth-api';
import reducer, { setName, setEmail, setPassword } from './register';

const initialState = {
  registerRequest: false,
  registerFailed: false,
  registerSuccess: false,

  nameInput: '',
  emailInput: '',
  passwordInput: '',
};

describe('register reducer', () => {
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
  it('should handle setName', () => {
    expect(
      reducer(initialState, setName('test')),
    ).toEqual(
      {
        ...initialState,
        nameInput: 'test',
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
  it('should handle register.pending', () => {
    expect(
      reducer(initialState, register.pending()),
    ).toEqual(
      {
        ...initialState,
        registerRequest: true,
      },
    );
  });
  it('should handle register.fulfilled', () => {
    expect(
      reducer(initialState, register.fulfilled()),
    ).toEqual(
      {
        ...initialState,
        registerSuccess: true,
      },
    );
  });
  it('should handle register.rejected', () => {
    expect(
      reducer(initialState, register.rejected()),
    ).toEqual(
      {
        ...initialState,
        registerFailed: true,
      },
    );
  });
});
