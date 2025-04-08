import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Product } from '../types/product';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const BeautyProducts = ({product}:{product: Product}) => {
    const navigate = useNavigation<any>();

    const handlePress = () => {
        navigate.navigate('ProductDetail', {product});
    }
  return (
    <TouchableOpacity onPress={handlePress} style={{flex:1, margin:10}}>
        <View>
            <Image
                source={{uri: product.thumbnail}}
                style={{width: 100, height: 100, borderRadius: 10}}
            />
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{product.title}</Text>
            <Text style={{fontSize: 14}}>{product.description}</Text>
            <Text style={{fontSize: 14, color: '#FFA500'}}>{product.price}</Text>
            
        </View>
    </TouchableOpacity>
  )
}

export default BeautyProducts
