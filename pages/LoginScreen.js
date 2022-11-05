import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {

    const [emaildId, onChangeText1] = useState(null);
    const [password, onChangeText2] = useState(null);

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    console.log(data);

    useEffect(() => {
        fetch('http://192.168.2.23:8000/patients')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.text}>Login</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText1}
                value={emaildId}
                placeholder="Enter Your Email Id"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText2}
                value={password}
                placeholder="Enter Your Password"
                keyboardType="Password"
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ViewPatient")}>
                <Text style={styles.btntext}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

// export default function App() {
// }

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        width: 240,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        alignSelf: 'center',
        alignItems: 'center',
        padding: 5,
        width: 100,
        backgroundColor: '#d68227',
        marginTop: 20,
        borderRadius: 22
    },
    btntext: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
