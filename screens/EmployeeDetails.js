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
const EmployeeDetail = props => {
  const [ename, setEname] = React.useState('');
  const [eroles, setEroles] = React.useState('');
  const [elead, setElead] = React.useState('');
  const [namearray, setEnamearray] = React.useState([]);
  const [rolearray, setErolearray] = React.useState([]);
  const [leadarray, setEleadarray] = React.useState([]);

  useEffect(() => {
    const name = props.navigation.getParam('user');
    setEnamearray(name);
    const role = props.navigation.getParam('role');
    setErolearray(role);
    const lead = props.navigation.getParam('role');
    setEleadarray(lead);
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
    AsyncStorage.getItem('Namearr').then(async res => {
      console.warn('Namearr', res);

      enamea.push(JSON.stringify(res));
      console.warn('Namearr', enamea);
      //const elead = await res;
      //setElead(elead);
    });
  }, []);
  return (
    <View>
      {namearray.map((item, key) => (
        <Text key={key}>EmployeeName:{item}</Text>
      ))}
      {rolearray.map((item, key) => (
        <Text key={key}>EmployeeRole:{item}</Text>
      ))}
      {leadarray.map((item, key) => (
        <Text key={key}>EmployeeLead:{item}</Text>
      ))}
    </View>
  );
};
export default EmployeeDetail;
