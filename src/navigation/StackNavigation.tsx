import React from 'react'
import LoginScreen from '../screens/LoginScreen';
import DrawerNavigator from './DrawerNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../screens/RegisterScreen';
import SplashScreen from '../screens/SplashScreen';

//Creamos el stack de navegación
const Stack= createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName= "Splash" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={LoginScreen} 
            options={{title:'Iniciar Sesion'}}/> 

        <Stack.Screen name='Register' component={RegisterScreen}
            options={{title:'Registro'}} />

        <Stack.Screen name='Splash' component={SplashScreen}/> 


        <Stack.Screen name="Home" component={DrawerNavigator} 
        options={{title: 'Regresar'}}/>
    </Stack.Navigator>
  )
}

export default StackNavigation
