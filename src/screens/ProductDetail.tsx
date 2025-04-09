import React from 'react'
import { Product } from '../types/product'
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductDetail = ({ route,navigation }: { route: any, navigation: any }) => {
    const { product } = route.params;

    return (
    
        <View style={styles.container}>
            <View style={styles.containerDetails}>
                <Image source={{ uri: product?.thumbnail }} style={styles.image} />
                <Text style={styles.name}>{product?.title}</Text>
                <Text style={styles.DetailsText}>{product?.description}</Text>
                <Text style={styles.price}>${product?.price}</Text>
            </View>
        </View>
       
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 15,
      backgroundColor:'#84cedc',
    },
    containerDetails:{
      width: '90%',
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 25,
      elevation: 10,
      shadowColor: '#141414',
      shadowOpacity: 0.2,
      shadowRadius: 5,
      marginBottom: 20,
      
      
    },
    image: {
      width: '70%',
      height: 300,
      borderRadius: 50,
      marginBottom:10,
      left:55
    
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
      color: '#084c91'
    },
    DetailsText: {
      alignItems: 'center',
      fontSize: 18,
      
    },
    price: {
      fontSize: 25,
      fontWeight: 'bold', //Letra en negrita
      color: '#190b83', 
      marginTop: 10, //Separar un poco el precio de las letras
      left:'70%'
    },
  
     
  });
  
export default ProductDetail
