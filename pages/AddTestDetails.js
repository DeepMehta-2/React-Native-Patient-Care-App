import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
//import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const AddTestDetails = ({ navigation }) => {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [datetext, setDateText] = useState('11/02/2022');
  const [timetext, setTimeText] = useState('7:41');

  const onChange = (event, selectDate) => {
    const currentDate = selectDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let finalDate = (tempDate.getMonth() + 1) + '/' + tempDate.getDate() + '/' + tempDate.getFullYear();
    let finalTime = tempDate.getHours() + ':' + tempDate.getMinutes();
    setDateText(finalDate)
    setTimeText(finalTime)
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }


  return (
    <View style={styles.recordform}>
      {/* <Text style={styles.header}> Add Patient's Clinical Data </Text> */}

      <Text style={styles.text}>Blood Pressure (X/Y mmHg):</Text>
      <TextInput style={styles.textinput} placeholder="100"></TextInput>

      <Text style={styles.text}>Respiratory Rate (X/min):</Text>
      <TextInput style={styles.textinput} placeholder="25"></TextInput>

      <Text style={styles.text}>Blood Oxygen Level (X%):</Text>
      <TextInput style={styles.textinput} placeholder="95%"></TextInput>

      <Text style={styles.text}>Heartbeat Rate (X/min):</Text>
      <TextInput style={styles.textinput} placeholder="67"></TextInput>

      <View style={styles.container}>
        <Text style={styles.text}>Select Date:</Text>
        <MaterialCommunityIcons name="calendar" style={styles.icon} size={30} onPress={() => showMode('date')} />
      </View>
      <Text style={[styles.textinput, styles.datetext]}>{datetext}</Text>

      <View style={styles.container}>
        <Text style={styles.text}>Select Time:</Text>
        <AntDesign name="clockcircle" style={styles.icon} size={30} onPress={() => showMode('time')} />
      </View>
      <Text style={styles.textinput}>{timetext}</Text>

      {show && (
        <DateTimePicker
          testID='dateTimePicker'
          value={date}
          mode={mode}
          display='default'
          maximumDate={new Date(2030, 10, 20)}

          onChange={onChange}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.btntext}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTestDetails;

const styles = StyleSheet.create({
  recordform: {
    alignSelf: 'stretch'
  },
  container: {
    display: "flex",
    alignItems: "center",
    //justifyContent:"space-between",
    flexDirection: 'row',
  },
  header: {
    color: '#fff',
    fontSize: 24,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#d68227',
    marginTop: 50,
    marginBottom: 40,
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
  icon: {
    color: '#d68227',
    marginLeft: 10,
    marginTop: 5,
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
