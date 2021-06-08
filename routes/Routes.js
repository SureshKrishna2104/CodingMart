import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  FlatList,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
//import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import EmployeeDetails from '../screens/EmployeeDetails';
import EmployeeForm from '../screens/EmployeeForm';

// //const value = AsyncStorage.getItem('userInfo');
// console.warn('value', value);
const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: '#0f73ee',
  },
  headerTintColor: 'white',
  headerTitleSyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
};

const routes = createStackNavigator(
  {
    employeeForm: EmployeeForm,
    employeeDetails: EmployeeDetails,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  },
);

export default createAppContainer(routes);
