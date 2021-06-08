import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import Routes from './routes/Routes';
//import EmployeeForm from './screens/EmployeeForm';
export default function App() {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
