import React, { useEffect, useState } from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import Head from "../components/Head";
import Footer from "../components/Footer";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import Listagem from "./ListagemScreens";

const Editar:React.FC = () => {
    const [carro, setCarros] = useState<Carro[]>([]);
    const [modelo, SetModelo] = useState<string>('');
    const [ano, SetAno] = useState<string>('0');
    const [marca, SetMarca] = useState<string>('');
    const [cor, SetCor] = useState<string>('');
    const [peso, SetPeso] = useState<string>('');
    const [potencia, SetPotencia] = useState<string>('');
    const [descricao, SetDescricao] = useState<string>('');
    const [preco, SetPreco] = useState<string>('0');




    const navigation = useNavigation();
    const route = useRoute();

    useEffect(()=> {
        const {item} = route.params;

        SetModelo(item.modelo);
        SetAno(item.ano);
        SetMarca(item.marca);
        SetCor(item.cor);
        SetPeso(item.peso);
        SetPotencia(item.potencia);
        SetDescricao(item.descricao);
        SetPreco(item.preco);


    })

    return (
        <View >
            <StatusBar backgroundColor='red' barStyle="light-content"/>
            <Head />
            <View >
                <TextInput   
                value={modelo}
                onChangeText={SetModelo}
                />
                <TextInput   
                value={ano}
                onChangeText={SetAno}
                keyboardType="numeric"
                />
                <TextInput  
                value={marca}
                onChangeText={SetMarca}
                />
                <TextInput  
                value={cor}
                onChangeText={SetCor}
                />
                <TextInput 
                value={peso}
                onChangeText={SetPeso}
                />
                <TextInput 
                value={potencia}
                onChangeText={SetPotencia}
                />
                <TextInput  
                value={descricao}
                onChangeText={SetDescricao}
                multiline
                />
                <TextInput  
                value={preco}
                onChangeText={SetPreco}
                keyboardType="numeric"
                />

                <TouchableOpacity 
                onPress={()=> navigation.goBack()}>
                    <Text >Voltar</Text>
                </TouchableOpacity>


                <View ></View>
                <Footer />
            </View>
        </View>
    );
}

export default Editar;