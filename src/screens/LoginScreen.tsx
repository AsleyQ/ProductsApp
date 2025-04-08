import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LoginScreen = ({ navigation }: any) => {
    const [password, setPassword] = useState('');
    const [correo, setCorreo] = useState('');

    //Función para hacer la validación y redirigir
    const handleLogin = async () => {
        if (!correo || !password) {
            Alert.alert('Por favor, ingrese su correo y contraseña')
            return;
        }

        try {
            //Obtener el usuario guardado en AsyncStorage
            const userData = await AsyncStorage.getItem('usuarios');
            const usuarios = userData ? JSON.parse(userData) : []; //Parsear el usuario guardado

            //Buscar el usuario en el array de usuarios por medio del correo
            const usuario = usuarios.find((u: any) => u.email === correo && u.pass === password);
            if (usuario) {
                await AsyncStorage.setItem('usuario', JSON.stringify(usuario)); //Guardar el usuario en AsyncStorage
                navigation.navigate('Home', { user: usuario.nombre }); //Redirigir a la pantalla de inicio

            } else {
                Alert.alert('Error', 'Credenciales incorrectas'); //Mostrar alerta si no se encuentra el usuario
            }
        } catch (error) {
            console.error('Error', 'No se pudo validar el usuario'); //Mostrar error en consola
        }
    }
    return (
        <View style={styles.container}>
           
            
            <Text style={styles.title}>Iniciar Sesión</Text>
            <TextInput
                style={styles.input}
                placeholder="Correo"
                value={correo}
                onChangeText={setCorreo}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            {/* Botón de iniciar sesión */}
            <Button title= "Ingresar" onPress={handleLogin} color="#dfa621" />

            {/* Texto para redirigir a la pantalla de registro */}
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerText}>¿No tienes cuenta? Regístrate aquí</Text>
            </TouchableOpacity>
        </View>

        )
    }


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            
        },
        container2:{
            backgroundColor: '#4b453c',
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',

        },
        input: {
            width: '80%',
            height: 50,
            borderWidth: 1,
            borderColor: '#000',
            marginBottom: 10,
            paddingHorizontal: 10,
        },
        button: {
            backgroundColor: '#dfa621',
            padding: 10,
            borderRadius: 5,
        },
        buttonText: {
            color: '#fff',
            fontSize: 16,
        },
        registerText: {
            marginTop: 20,
            textAlign: 'center',
            color: '#ab3f14',
            textDecorationLine: 'underline'
        },
    })

    export default LoginScreen;
