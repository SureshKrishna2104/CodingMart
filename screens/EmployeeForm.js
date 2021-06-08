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
const EmployeeForm = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [roles, setRoles] = React.useState('');
  const [lead, setLead] = React.useState('');
  const setInfo = async (ename, eroles, elead) => {
    await AsyncStorage.setItem('Name', ename);
    await AsyncStorage.setItem('Roles', eroles);
    await AsyncStorage.setItem('Lead', elead);
  };
  const uploadEmployee = () => {
    console.warn('name', name);
    console.warn('roles', roles);

    setInfo(name, roles, lead);
    navigation.navigate('employeeDetails');
  };
  return (
    <View>
      <TextInput
        placeholder="Enter FirstName"
        placeholderTextColor="#666666"
        autoCorrect={false}
        onChangeText={text => setName(text)}
        value={name}
        style={[
          styles.textInput,
          {
            color: '#000',
          },
        ]}
      />
      <View style={styles.pickerContainer}>
        <View style={{flex: 20}}>
          <Picker
            selectedValue={roles}
            placeholder={'Select Roles'}
            onValueChange={service => setRoles(service)}>
            <Picker.Item value="Employee" label="Employee" />
            <Picker.Item value="ReactDeveloper" label="ReactDeveloper" />
            <Picker.Item value="AndroidDeveloper" label="AndroidDeveloper" />
          </Picker>
        </View>
      </View>
      <View style={styles.pickerContainer}>
        <View style={{flex: 20}}>
          <Picker
            selectedValue={lead}
            placeholder={'Select Lead'}
            onValueChange={itemLead => setLead(itemLead)}>
            <Picker.Item value="suresh" label="suresh" />
            <Picker.Item value="krishna" label="krishna" />
            <Picker.Item value="kumar" label="kumar" />
          </Picker>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => uploadEmployee()}>
          <Text
            style={styles.appButtonText}
            secureTextEntry={true}
            color="grey"
            align="center">
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default EmployeeForm;
const styles = StyleSheet.create({
  regform: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10,
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 30,
    color: '#0f73ee',

    paddingLeft: 60,
  },
  textinput: {
    borderWidth: 1,
    fontSize: 14,
    paddingLeft: 10,
    color: 'black',
    borderColor: '#A9A9A9',
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textView: {},
  Loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  appButtonContainer: {
    backgroundColor: '#0f73ee',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  addMoreButton: {
    justifyContent: 'flex-start',
    elevation: 3,
    padding: 5,
    backgroundColor: 'gray',
    borderRadius: 1,
  },
  appButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  iconContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  textcolor: {
    fontSize: 12,
    marginTop: 5,
    color: '#808080',
  },
  subTitle: {fontWeight: 'bold', padding: 5, fontSize: 16},
  subContainer: {},
  textInputContainer: {
    padding: 3,
    justifyContent: 'flex-start',
  },
});
