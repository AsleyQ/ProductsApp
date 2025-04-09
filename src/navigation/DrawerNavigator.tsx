import React from 'react'
import PrincipalScreen from '../screens/PrincipalScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProductDetail from '../screens/ProductDetail';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Drawer= createDrawerNavigator();


export default function App() {
  return (
    <Drawer.Navigator initialRouteName="PrincipalScreen">
      <Drawer.Screen 
        name="PrincipalScreen" component={PrincipalScreen}  options={{title: "Principal",
          drawerIcon: ({ color, size }) => (<FontAwesome name="home" size={size} color={color} /> ),
        }} 
      />
      
      <Drawer.Screen 
        name="HomeScreen" component={HomeScreen} options={{title: "Productos",
          drawerIcon: ({ color, size }) => ( <FontAwesome name="search" size={size} color={color} /> ),
        }} 
      />

      <Drawer.Screen 
        name="ProductDetail" component={ProductDetail} options={{title: "Detalles de Productos",
          drawerIcon: ({ color, size }) => (<FontAwesome name="file" size={size} color={color} /> ),
        }} 
      />
    </Drawer.Navigator>
  );
}