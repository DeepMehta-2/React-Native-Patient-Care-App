import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginScreen = ({ navigation }) => {

    const [emaildId, onChangeText1] = useState(null);
    const [password, onChangeText2] = useState(null);

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    console.log(data);
    
    useEffect(() => {
        fetch('http:192.168.2.69:5000/patients')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>Login</Text>
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
            <Button
                title="Login"
                color={"#d68227"}
                onPress={() => navigation.navigate("AddPatient")}
            />
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
    input: {
        height: 40,
        width: 240,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
