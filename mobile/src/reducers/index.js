import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CarReducer from './CarReducer';

export default combineReducers({
  auth: AuthReducer,
  carsState: CarReducer,
});
