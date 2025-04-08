import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const SplashScreen = ({navigation}:any) => {
    useEffect(() => {
        const verificarSesion = async() => {
            const user = await AsyncStorage.getItem('usuarioActivo'); //Obtenemos el usuario guardado en AsyncStorage
            setTimeout(() => {
                if(user){ //Si el usuario existe, redirigimos a la pantalla de inicio
                    const datos= JSON.parse(user); //Parseamos el usuario guardado
                    navigation.replace('Home', {user:datos.nombre}); //Redirigimos a la pantalla de inicio
                }else{ //Si no existe, redirigimos a la pantalla de inicio de sesión
                    navigation.navigate('Login');
                }
            },2000); //Esperamos 2 segundos para mostrar la pantalla de carga
        }
        //LLamamos a la funcion verificarSesion
        verificarSesion(); 
    },[]);

  return (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" /> {/*Indicador de carga*/}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#dfa621'
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        color:'#fff'
    }
})
export default SplashScreen
