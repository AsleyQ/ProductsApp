import React, { useEffect, useState } from 'react'
import { Product } from '../types/product';
import { useNavigation } from '@react-navigation/native';
import api from '../api/api';
import { ScrollView, Text } from 'react-native';
import BeautyProducts from '../components/BeautyProducts';
import global from '../styles/global'; // Importa estilos globales


export default function HomeScreen() {
    const [products,setProducts] = useState<Product[]>([]);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await api.get('/products'); //Obtenemos los productos de la API
            console.log('Productos recibidos:', response.data);
            setProducts(response.data.products); //Guardamos los productos en el estado
        };
        fetchProduct();
    }, []);

  return (
    <ScrollView style={global.container}>
        
        <Text style={global.title}>Productos</Text>
        {products.map((item) => (
            <BeautyProducts key={item.id} product={item} />
        ))}
    </ScrollView>
  );
}


