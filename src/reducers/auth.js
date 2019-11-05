import { createAction, handleActions } from 'redux-actions';

const AUTH_LOGIN = 'auth/AUTH_LOGIN';
const AUTH_LOGOUT = 'auth/AUTH_LOGOUT';

export const login = createAction(AUTH_LOGIN);
export const logout = createAction(AUTH_LOGOUT);

const initialState = {
  isAuthenticated: false,
}

export default handleActions({
  [AUTH_LOGIN]: (state, action) => ({
    isAuthenticated: true
  }),
  [AUTH_LOGOUT]: (state, action) => ({
    isAuthenticated: false
  })
}, initialState);