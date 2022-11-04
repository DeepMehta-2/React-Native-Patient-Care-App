import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

let AddPatient = null;

export default AddPatient = ({ navigation }) => {

  const [emaildId, onChangeText1] = React.useState(null);
  const [password, onChangeText2] = React.useState(null);
  const [checked, setChecked] = React.useState('Male');

  const getDataUsingPost = () => {
    console.log("post method")

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
    fetch('http://192.168.2.23:8000/patients', {
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
    <View style={styles.form}>
      <StatusBar style="auto" />

      <Text style={styles.text}>Name:</Text>
      <TextInput 
        style={styles.textinput} 
        TexonChanget={onChangeText1}
        value={emaildId} 
        placeholder="Enter patient name">
      </TextInput>

      <Text style={styles.text}>Address:</Text>
      <TextInput 
        style={styles.textinput} 
        TexonChanget={onChangeText1}
        value={emaildId} 
        placeholder="Enter patient's address">
      </TextInput>

      <Text style={styles.text}>Contact No:</Text>
      <TextInput 
        style={styles.textinput} 
        TexonChanget={onChangeText1}
        value={emaildId} 
        placeholder="Enter patient's contact no">
      </TextInput>

      <Text style={styles.text}>Email:</Text>
      <TextInput 
        style={styles.textinput} 
        TexonChanget={onChangeText1}
        value={emaildId} 
        placeholder="Enter patient's email address">
      </TextInput>

      <Text style={styles.text}>Age:</Text>
      <TextInput 
        style={styles.textinput} 
        TexonChanget={onChangeText1}
        value={emaildId} 
        placeholder="Enter patient's age">
      </TextInput>

      <Text style={styles.text}>Gender:</Text>
      
      <View style={styles.container}>
        <RadioButton
          style={styles.radiobtn}
          value="Male"
          status={checked === 'Male' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('Male')}
        />
        <Text style={styles.radiobtntext}>Male</Text>
        <RadioButton
          style={styles.radiobtn}
          value="Female"
          status={checked === 'Female' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('Female')}
        />
        <Text style={styles.radiobtntext}>Female</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AddTestDetails")}>
        <Text style={styles.btntext}>Save</Text>
      </TouchableOpacity>

      {/* <Button
        title="Save"
        color={"#d68227"}
        onPress={() => getDataUsingPost() navigation.navigate("AddTestDetails")}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    alignSelf: 'stretch',
    paddingTop:10
  },
  container: {
    display: "flex",
    alignItems: "center",
    //justifyContent:"space-between",
    flexDirection: 'row',
    marginLeft:10,
  },
  text: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 18,
    backgroundColor: '#E5E4E2',
    borderColor: 'lightgrey',
    borderWidth: 1
  },
  radiobtntext: {
    fontSize: 20
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    width: 120,
    backgroundColor: '#d68227',
    marginTop: 30,
    borderRadius: 22
  },
  btntext: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
