import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, YellowBox } from 'react-native';
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';
import {
  Icon,
  Button,
  Header,
  Left,
  Body,
  Right,
  Title,
  Item,
  Input
} from 'native-base';

import Login from './screens/Login';
import Home from './screens/Home';
import CarCreate from './screens/CarCreate';
import CarEdit from './screens/CarEdit';

import AuthLoadingScreen from './screens/AuthLoadingScreen';
import colors from './styles/colors';



const MainScreen = createStackNavigator(
  {
    Home: {
      screen: Home,

    },
    CarCreate: {
      screen: CarCreate,
      navigationOptions: {
        title: 'Create',
      }
    },
    CarEdit: {
      screen: CarEdit,
      navigationOptions: {
        title: 'Modify',
      }
    }

  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.default,
        elevation: 0
      },
      headerTintColor: colors.white,
    }
  }
);

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: MainScreen,
    Auth: createStackNavigator(
    {
      Login: {
        screen: Login,
        navigationOptions: {
          title: 'Login',
        }
      }
    })
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
