import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Product } from '../types/product';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BeautyProducts = ({product}:{product: Product}) => {
    const navigate = useNavigation<any>();

    const handlePress = () => {
        navigate.navigate('ProductDetail', {product});
    }
  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
        
        <Image
            source={{uri: product.thumbnail}}
            style={styles.image}  resizeMode= "cover"
        />
        <View style={styles.infoContainer}>
            <Text style={styles.title}>{product.title}</Text>
            {/* <Text style={styles.description} numberOfLines={2}>{product.description}</Text> */}
            <Text style={styles.price}>${product.price}</Text>
            
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 16,
      padding: 12,
      marginVertical: 10,
      marginHorizontal: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 4,
    },
    image: {
      width: '100%',
      height: 180,
      borderRadius: 12,
      marginBottom: 10,
    },
    infoContainer: {
      paddingHorizontal: 4,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 4,
      textAlign: 'center'
    },
    description: {
      fontSize: 14,
      color: '#666',
      marginBottom: 8,
    },
    price: {
      fontSize: 16,
      fontWeight: '600',
      color: '#FFA500',
      left:250
    },
  });
  
  

export default BeautyProducts
