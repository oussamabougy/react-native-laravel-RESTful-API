import {
   EMAIL_CHANGED,
   PASSWORD_CHANGED,
   LOGIN_USER_SUCCESS,
   LOGIN_USER_FAIL,
   LOGIN_USER,
   CLOSE_ERROR,
 } from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
  };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case CLOSE_ERROR:
      return { ...state, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Athentification Failed.', password: '', loading: false };
    default:
      return state;
  }
};
