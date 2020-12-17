import { createAction, handleActions } from 'redux-actions';
import * as api from '../api';

const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';
const LOGOUT = 'auth/AUTH_LOGOUT';

export const loginRequest = createAction(LOGIN_REQUEST);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFailure = createAction(LOGIN_FAILURE);
export const logout = createAction(LOGOUT);

export const loginThunk = (id, password) => dispatch => {
  dispatch(loginRequest());

  return api.login(id, password).then(
    response => {
      if(response.data) {
        dispatch(loginSuccess(response.data));
        return true;
      } else {
        dispatch(loginFailure());
        return false;
      }
    }
  ).catch(error => dispatch(loginFailure()));
}

const initialState = {
  isAuthenticated: false,
  userInfo: null
}

export default handleActions({
  [LOGIN_SUCCESS]: (state, action) => ({
    isAuthenticated: true,
    userInfo: action.payload
  }),
  [LOGIN_FAILURE]: (state, action) => ({
    isAuthenticated: false,
    userInfo: null
  }),
  [LOGOUT]: (state, action) => ({
    isAuthenticated: false,
    userInfo: null
  })
}, initialState);