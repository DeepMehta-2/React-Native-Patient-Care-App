import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './pages/LoginScreen';
import AddPatient from './pages/AddPatient';
import AddTestDetails from './pages/AddTestDetails';
import ViewPatient from './pages/ViewPatient';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'Login', //Set Header Title
            headerStyle: {
              backgroundColor: '#d68227', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="ViewPatient"
          component={ViewPatient}
          options={({ navigation }) => ({
            title: "Patient's List", //Set Header Title
            headerStyle: {
              backgroundColor: '#d68227', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            headerRight: () => (
              <MaterialCommunityIcons name="plus" style={styles.icon} size={30} onPress={() => navigation.navigate("AddPatient")} />
            ),

          })}
        />
        <Stack.Screen
          name="AddPatient"
          component={AddPatient}
          options={{
            title: 'Add Patient', //Set Header Title
            headerStyle: {
              backgroundColor: '#d68227', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="AddTestDetails"
          component={AddTestDetails}
          options={{
            title: "Add patient's Clinical Data", //Set Header Title
            headerStyle: {
              backgroundColor: '#d68227', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  icon: {
    color: '#fff',
    marginRight: 10,
  },
});