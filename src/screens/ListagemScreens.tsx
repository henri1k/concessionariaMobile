import React, { useEffect, useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Footer from "../components/Footer";
import Head from "../components/Head";
import { FlatList } from "react-native-gesture-handler";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

function Listagem():React.JSX.Element{
    const navigation = useNavigation();

    const [carros, setCarros] = useState<Carro[]>([]);


    const hendleDelete = async (id: number) => {
        axios.delete('http://10.137.11.232:8000/api/carro/deletar/' + id)
    .then(function (response) {
    }).catch(function (error) {
        console.log(error)
    })}


    interface Carro {
        id:number;
        modelo:string;
        ano:string;
        marca:string;
        cor:string;
        peso:string;
        potencia:string;
        descricao:string;
        preco:string;
    }
    
        useEffect(() => {
            listarProdutos();
        }, []);
    
    
    
        const listarProdutos = async () => {
            try {
                const response = await axios.get('http://10.137.11.232:8000/api/carro/all');
              //  console.log(response.data)
                if (response.data.status === true) {
                    setCarros(response.data.data); // Set the state with the correct data
                    console.log(carros);
                }
            } catch (error) {
                console.log(error);
            }
        }
        
        
    
    
    
            const renderItem = ({ item }: { item: Carro }) => (
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.modelo}>{item.modelo}</Text>
                    <Text >{item.ano}</Text>
                    <Text >{item.marca}</Text>
                    <Text >{item.cor}</Text>
                    <Text >{item.peso}</Text>
                    <Text >{item.potencia}</Text>
                    <Text >{item.descricao}</Text>
                    <Text >{item.preco}</Text>
                    <TouchableOpacity onPress={() => hendleDelete(item.id)}>
                        <Image source={require('../assents/images/delete.png')}style={styles.delete}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('editar')}>
                        <Image source={require('../assents/images/editar.png')} style={styles.editar}/>
                    </TouchableOpacity>
                </TouchableOpacity>
            );
        
        return (
            <View style={styles.container}>
                <Head />
                <StatusBar backgroundColor="#3a415a" barStyle="light-content" />

                    <FlatList showsVerticalScrollIndicator={false} 
                    data={carros} 
                    renderItem={renderItem} 
                    keyExtractor={(item) => item.id.toString()} />
                
            <Footer />
            </View>
            
        );
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#F2d22e',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15,
        borderBottomWidth:10,
        borderColor:'#3a415a'
    },
    modelo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },
    delete:{
        width:50,
        height:50,
        position:'absolute',
        marginHorizontal:270,
        marginVertical:-190
    },
    editar:{
        width:50,
        height:50,
        position:'absolute',
        marginHorizontal:210,
        marginVertical:-190
    },
    container:{
        flex:1,
        backgroundColor:'white'
    }
})
export default Listagem;