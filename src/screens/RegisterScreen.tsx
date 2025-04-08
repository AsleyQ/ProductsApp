import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native';
import { Alert, StyleSheet, Text, View } from 'react-native';

const RegisterScreen = ({navigation}:any) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [pass,setPass] = useState('');

    const handleRegister = async () => {
        if (!nombre || !email || !pass) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        try{
            const data = await AsyncStorage.getItem('usuarios');
            const usuarios = data ? JSON.parse(data) : [];
            const usuarioExistente = usuarios.find((u:any) => u.email === email); //Busca si el usuario ya existe
            
            if(usuarioExistente){
                Alert.alert('Error', 'El correo ingresado ya está registrado'); //Si el usuario ya existe, muestra un error
                return;
            }
            const nuevoUsuario = { nombre, email, pass }; //En está parte crea un nuevo usuario
            usuarios.push(nuevoUsuario); //Agrega el nuevo usuario al array de usuarios
            await AsyncStorage.setItem('usuarios', JSON.stringify(usuarios)); //Guarda el nuevo usuario en AsyncStorage
            Alert.alert('Éxito', 'Usuario registrado correctamente'); //Muestra un mensaje de éxito
            navigation.navigate('Login'); //Redirige a la pantalla de inicio de sesión
        }catch(error){
            Alert.alert('Error', 'No se pudo registrar el usuario'); //Si hay un error, muestra un error
        }
    }
  return (
   <View style={styles.container}>
        <Text style={styles.title}>Registrase</Text>
        <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={nombre}
            onChangeText={setNombre}>
        </TextInput>

        <TextInput
            style={styles.input}
            placeholder="Correo"
            value={email}
            onChangeText={setEmail}>
        </TextInput>

        <TextInput secureTextEntry
            style={styles.input}
            placeholder="Contraseña"
            value={pass}
            onChangeText={setPass}>
        </TextInput>

        {/* Botón de registro */}
        <Button title="Guardar" onPress={handleRegister} color="#dfa621" />

   </View>
  )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        marginBottom: 16,
    }
   
})

export default RegisterScreen
