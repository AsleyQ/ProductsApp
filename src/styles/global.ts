import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#84cedc',
        padding:15,
        
    },
    title:{
        fontSize:24,
        fontWeight:`bold`,
        marginVertical:10,
        textAlign:`center`,
        color:'#49494aaa'
    },
    DetailsText: {
        fontSize: 15,
        marginTop:5,
        marginBottom:10,
        textAlign: 'justify'
        
    },
    BackButton:{
        position:'absolute',
        top:15,
        left:10,
        padding: 10,
    },
    searchContainer: {
        marginBottom: 20,
    },
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 5,
        backgroundColor: "white"
        
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    pageText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    
});