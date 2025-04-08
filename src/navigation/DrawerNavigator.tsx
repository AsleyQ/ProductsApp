import React from 'react'
import PrincipalScreen from '../screens/PrincipalScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProductDetail from '../screens/ProductDetail';

const Drawer= createDrawerNavigator();


export default function App(){
  return (
    <Drawer.Navigator initialRouteName='PrincipalScreen'>
      <Drawer.Screen name="PrincipalScreen" component={PrincipalScreen} options={{title:"Principal"}}/>
      
      <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Products" }} /> 

      <Drawer.Screen name="ProductDetail" component={ProductDetail} options={{ title: "Product Details" }} />  
    </Drawer.Navigator>
  );
};

