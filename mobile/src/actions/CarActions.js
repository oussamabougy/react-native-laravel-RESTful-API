import { AsyncStorage } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { Toast } from 'native-base';
import {
  CARS_FETCH,
  CARS_FETCH_SUCCESS,
  CAR_CREATE,
  CAR_CREATE_SUCCESS,
  CAR_UPDATE,
  CAR_UPDATE_SUCCESS,
  CAR_DELETE,
  CAR_DELETE_SUCCESS,
} from './types';
import { CARS_FETCH_URL } from '../services/URLs';


export const carCreate = (name, color, navigation) => {

  return async (dispatch) => {
    dispatch({ type: CAR_CREATE });
      const accessToken = await AsyncStorage.getItem('access_token');

  const tokenType = await AsyncStorage.getItem('token_type');
    return fetch(CARS_FETCH_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': tokenType+' '+ accessToken
      },
      body: JSON.stringify({
        name: name,
        color: color
      })
    })
      .then(response => response.json())
      .then(json => {
        console.log('json', json);
        dispatch({ type: CAR_CREATE_SUCCESS });
        Toast.show({
              text: 'Added successfully',
              type: 'success'
        });
        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' }),
          ],
        });
        navigation.dispatch(resetAction);
      })
      .catch((error) => {
        console.log('ERROR', error);
        Toast.show({
              text: 'A problem occurred',
              type: 'danger'
        });
      })

  };
};

export const carUpdate = (id, name, color, navigation) => {
  return async (dispatch) => {
    dispatch({ type: CAR_UPDATE });
          const accessToken = await AsyncStorage.getItem('access_token');

  const tokenType = await AsyncStorage.getItem('token_type');
    return fetch(CARS_FETCH_URL+id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': tokenType+' '+ accessToken
      },
      body: JSON.stringify({
        name: name,
        color: color
      })
    })
      .then(response => response.json())
      .then(json => {
        console.log('json', json);
        dispatch({ type: CAR_UPDATE_SUCCESS });
        Toast.show({
              text: 'Updated successfully',
              type: 'success'
        });
        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' }),
          ],
        });
        navigation.dispatch(resetAction);
      })
      .catch((error) => {
        console.log('ERROR', error);
        Toast.show({
              text: 'A problem occurred',
              type: 'danger'
        });
      })
  };
};

export const carsFetch = () => {
  return async (dispatch) => {
    dispatch({ type: CARS_FETCH });
    try {
      let response = await fetch(CARS_FETCH_URL);
      const cars = await response.json();
      console.log(cars.data);
      dispatch({ type: CARS_FETCH_SUCCESS, payload: cars.data });
    }
    catch (e) {
      console.log(e)
    }
  };
};

export const carDelete = (id, navigation) => {
  return async (dispatch) => {
    dispatch({ type: CAR_DELETE });
          const accessToken = await AsyncStorage.getItem('access_token');

  const tokenType = await AsyncStorage.getItem('token_type');
    return fetch(CARS_FETCH_URL+id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': tokenType+' '+ accessToken
      },
      body: JSON.stringify({
        id: id
      })
    })
      .then(response => {
        console.log(response);
        dispatch({ type: CAR_DELETE_SUCCESS });
        Toast.show({
              text: 'Deleted successfully',
              type: 'success'
        });
        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' }),
          ],
        });
        navigation.dispatch(resetAction);
      })     
      .catch((error) => {
        console.log('ERROR', error);
        Toast.show({
              text: 'A problem occurred',
              type: 'danger'
        });
      })
  };
};
