import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

let AddPatient = null;

export default AddPatient = ({ navigation }) => {

  const [emaildId, onChangeText1] = React.useState(null);
  const [password, onChangeText2] = React.useState(null);
  const [checked, setChecked] = React.useState('Male');

  const getDataUsingPost = () => {

    //POST json
    var dataToSend = {
      "patient_name": "John",
      "address": "Scarborough",
      "age": "63",
      "gender": "Male",
      "contact_no": "+1234567985",
      "department": "Normal",
      "doctor": "Asish Jain"
    };
    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    //POST request
    fetch('http://10.0.2.2:3000/patients', {
      method: 'POST', //Request Type
      body: formBody, //post body
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text>Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText1}
        value={emaildId}
        placeholder="Enter patient name"
      />

      <Text>Address:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText1}
        value={emaildId}
        placeholder="Enter patient's address"
      />

      <Text>Contact No:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText1}
        value={emaildId}
        placeholder="Enter patient's contact no"
      />

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText1}
        value={emaildId}
        placeholder="Enter patient's email address"
      />

      <Text>Age</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText1}
        value={emaildId}
        placeholder="Enter patient's age"
      />

      <Text>Gender</Text>
      <RadioButton
        value="Male"
        status={checked === 'Male' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('Male')}
      />
      <RadioButton
        value="Female"
        status={checked === 'Female' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('Female')}
      />

      <Button
        title="Login"
        color={"#d68227"}
        onPress={() => getDataUsingPost /*navigation.navigate("AddTestDetails")*/}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 240,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
