import React, { useEffect, useState } from 'react'
import { Product } from '../types/product';
import { useNavigation } from '@react-navigation/native';
import api from '../api/api';
import { ScrollView, Text, TextInput, View } from 'react-native';
import BeautyProducts from '../components/BeautyProducts';
import global from '../styles/global'; // Importa estilos globales


export default function HomeScreen() {
    const [products,setProducts] = useState<Product[]>([]);
    const [searchQuery, setSearchQuery] = useState(''); // Estado para la búsqueda
    const navigation = useNavigation();

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await api.get('/products'); //Obtenemos los productos de la API
            console.log('Productos recibidos:', response.data);
            setProducts(response.data.products); //Guardamos los productos en el estado
        };
        fetchProduct();
    }, []);

    //De esta manera se filtran los productos por medio de la búsqueda (ToLowerCase para evitar problemas con mayúsculas y minúsculas)
    const filteredProducts = products.filter((item) =>{
        return item.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <ScrollView style={global.container}>
          <Text style={global.title}>Productos</Text>
    
          {/* Este es el input donde el usuario busca los productos por medio del title ste*/}
          <View style={global.searchContainer}>
            <TextInput
              style={global.searchInput}
              placeholder="Buscar productos..."
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)} // Actualiza el estado con lo que el usuario escribe. Es decir, con respecto a lo que va escribiendo se va filtrando
            />
          </View>
    
          {/* Mostrar productos filtrados */}
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <BeautyProducts key={item.id} product={item} />
            ))
          ) : (
            <Text>No se encontraron productos</Text>
          )}
        </ScrollView>
      );
}


