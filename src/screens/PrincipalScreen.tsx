import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { Alert, Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PrincipalScreen = ({navigation}: {navigation: any}) => {
   const [user, setUser] = useState<string | null>(null); //Estado para guardar el usuario
    
    //Recuperar el usuario guardado en AsyncStorage
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await AsyncStorage.getItem('usuario'); //Obtenemos el usuario guardado en AsyncStorage
                if (userData) {
                    const user= JSON.parse(userData); //Parseamos el usuario guardado
                    setUser(user.nombre);
                }
            } catch (error) {
                Alert.alert('Error', 'No fue posible recuperar la información del usuario'); //Mostrar error en consola
            }
        };
        fetchUser(); //Llamamos a la función para recuperar el usuario
    }, []);

    const cerrarSesion = async () => {
        try {
            await AsyncStorage.removeItem('usuario'); //Eliminamos el usuario guardado en AsyncStorage
            Alert.alert('Éxito', 'Sesión cerrada correctamente'); //Mostrar mensaje de éxito
            navigation.navigate('Login'); //Redirigir a la pantalla de inicio de sesión
        }catch{
            Alert.alert('Error', 'No fue posible cerrar la sesión'); //Mostrar error en consola
        }
    };

     useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <FontAwesome 
                    name="sign-out" 
                    size={25} 
                    color="#5fafe4" 
                    onPress={cerrarSesion} 
                    style={{ marginRight: 15 }}
                />
            ),
        });
    }, [navigation]);


    return (
        <ImageBackground
          source={{ uri: 'https://st2.depositphotos.com/1521427/7312/v/450/depositphotos_73124485-stock-illustration-decorative-cosmetics-seamless-pattern.jpg' }}
          style={styles.container}
        >
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.3)']}
            style={styles.gradient}
          >
            <Text style={styles.title}>Bienvenid@ {user}</Text>
            <Button title="Ver productos" onPress={() => navigation.navigate('HomeScreen')} color="#218cde" />
            {/* <Button title="Cerrar Sesión" onPress={cerrarSesion} color="#FF0000" /> */}
          </LinearGradient>
        </ImageBackground>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: 20,
      },
      title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff',
      },
      sloganText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
      },
    });
    

export default PrincipalScreen
