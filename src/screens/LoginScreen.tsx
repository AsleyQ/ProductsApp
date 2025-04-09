import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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

        <View style={styles.card}>
        <Image style={styles.userImage}
        source={{ uri: 'https://static.vecteezy.com/system/resources/previews/017/196/586/non_2x/user-icon-on-transparent-background-free-png.png' }}
        resizeMode="contain"
        />

            
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
    </View>

        )
    }


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#dfdccd',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 16,
                    
        },
        card:{
            width: '100%',
            maxWidth: 400,
            backgroundColor: '#fff',
            borderRadius: 16,
            padding: 24,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 6,

        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',

        },
        input: {
            height: 50,
            borderWidth: 1,
            borderRadius:10,
            borderColor: '#000',
            marginBottom: 15,
            paddingHorizontal: 15,
            fontSize:16,
            backgroundColor: '#f9f9f9'
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
        userImage: {
            width: 300,
            height: 200,
            alignSelf: 'center',
            marginBottom: 20,
        }
        
    })

    export default LoginScreen;
