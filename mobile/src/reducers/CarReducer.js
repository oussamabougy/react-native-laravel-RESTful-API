import { 
  CARS_FETCH_SUCCESS, 
  CARS_FETCH,
  CAR_CREATE,
  CAR_CREATE_SUCCESS,
  CAR_UPDATE,
  CAR_UPDATE_SUCCESS,
  CAR_DELETE,
  CAR_DELETE_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
	cars: [],
	loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  	case CARS_FETCH:
      return { ...state, loading: true };
    case CARS_FETCH_SUCCESS:
      return { ...state, loading: false, cars: action.payload };
    case CAR_CREATE:
      return { ...state, loading: true };
    case CAR_CREATE_SUCCESS:
      return { ...state, loading: false };
    case CAR_UPDATE:
      return { ...state, loading: true };
    case CAR_UPDATE_SUCCESS:
      return { ...state, loading: false };
    case CAR_DELETE:
      return { ...state, loading: true };
    case CAR_DELETE_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
};
