import React, { useEffect, useState } from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import Footer from "../components/Footer";
import Head from "../components/Head";
import { FlatList } from "react-native-gesture-handler";
import axios from "axios";

function Listagem():React.JSX.Element{


    const [carros, setCarros] = useState<Carro[]>([]);


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
                const response = await axios.get('http://10.137.11.101:8000/api/carro/all');
                if (response.status === 200) {
                    setCarros(response.data); // Set the state with the correct data
                    //console.log(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        
    
    
    
            const renderItem = ({ item }: { item: Carro }) => (
                <TouchableOpacity>
                    <Text >{item.modelo}</Text>
                    <Text >{item.ano}</Text>
                    <Text >{item.marca}</Text>
                    <Text >{item.cor}</Text>
                    <Text >{item.peso}</Text>
                    <Text >{item.potencia}</Text>
                    <Text >{item.descricao}</Text>
                    <Text >{item.preco}</Text>
                </TouchableOpacity>
            );
        
        return (
            <View >
                <StatusBar backgroundColor="#9468f8" barStyle="light-content" />

                    <FlatList showsVerticalScrollIndicator={false} 
                    data={carros} 
                    renderItem={renderItem} 
                    keyExtractor={(item) => item.id} />
                

            </View>
        );
}
export default Listagem;