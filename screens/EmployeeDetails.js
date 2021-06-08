import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
  Platform,
  Picker,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
const EmployeeDetail = () => {
  const [ename, setEname] = React.useState('');
  const [eroles, setEroles] = React.useState('');
  const [elead, setElead] = React.useState('');
  useEffect(() => {
    AsyncStorage.getItem('Name').then(async res => {
      console.warn('name', ename);

      const name = await res;
      setEname(name);
    });
    AsyncStorage.getItem('Roles').then(async res => {
      console.warn('name', ename);

      const eroles = await res;
      setEroles(eroles);
    });
    AsyncStorage.getItem('Lead').then(async res => {
      console.warn('elead', elead);

      const elead = await res;
      setElead(elead);
    });
  }, []);
  return (
    <View>
      <Text>Employee Details</Text>
      <Text>EmployeeName:{ename}</Text>
      <Text>EmployeeRoles:{eroles}</Text>
      <Text>EmployeeLead:{elead}</Text>
    </View>
  );
};
export default EmployeeDetail;
