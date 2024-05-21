import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Footer from "../components/Footer";
import Head from "../components/Head";
import axios from "axios";
import { ScrollView, TextInput } from "react-native-gesture-handler";



const Cadastro:React.FC=()=>{
    const [modelo, SetModelo] = useState<string>('');
    const [ano, SetAno] = useState<string>('0');
    const [marca, SetMarca] = useState<string>('');
    const [cor, SetCor] = useState<string>('');
    const [peso, SetPeso] = useState<string>('');
    const [potencia, SetPotencia] = useState<string>('');
    const [descricao, SetDescricao] = useState<string>('');
    const [preco, SetPreco] = useState<string>('0');{

    }
    const CadastrarCliente = async ()=>{
        try{
        const formData = new FormData();
        formData.append('modelo',modelo);
        formData.append('ano',ano);
        formData.append('marca',marca);
        formData.append('cor',cor);
        formData.append('peso',peso);
        formData.append('potencia',potencia);
        formData.append('descricao',descricao);
        formData.append('preco',preco);
    
        const response = await axios.post('http://10.137.11.232:8000/api/carro/store', formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        });
    }   catch(error){
        console.log(error);
        
    }
    }




    return(
        <View style={styles.container}>
            <Head/>
            <StatusBar backgroundColor='#3a415a' barStyle='light-content'/>
            <View style={styles.header}>
                    <Text style={styles.headerText}>Cadastro Carros</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={true}>
            <View style={styles.form}>
                <TextInput style={styles.input}
                placeholder="modelo do carro"
                value={modelo}
                onChangeText={SetModelo}/>
                
                <TextInput style={styles.input}
                placeholder="ano do carro"
                value={ano}
                onChangeText={SetAno}/>
                 
                 <TextInput style={styles.input}
                placeholder="marca do carro"
                value={marca}
                onChangeText={SetMarca} 
                multiline/>

                <TextInput style={styles.input}
                placeholder="cor do carro"
                value={cor}
                onChangeText={SetCor} 
                multiline/>

                <TextInput style={styles.input}
                placeholder="peso"
                value={peso}
                onChangeText={SetPeso} 
                multiline/>

                <TextInput style={styles.input}
                placeholder="potencia"
                value={potencia}
                onChangeText={SetPotencia} 
                multiline/>

                <TextInput style={styles.input}
                placeholder="descricao"
                value={descricao}
                onChangeText={SetDescricao} 
                multiline/>

                <TextInput style={styles.input}
                placeholder="preço"
                value={preco}
                onChangeText={SetPreco} 
                multiline/>


                <TouchableOpacity style={styles.imageButton}><Text style={styles.buttonText} onPress={CadastrarCliente}>Cadastro Carro</Text></TouchableOpacity>
            </View>
            </ScrollView>
            <Footer />
        </View>
        
    );
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#3a415a'
    },
    header:{
        backgroundColor:'#3a415a',
        paddingVertical:10,
        alignItems:'center'
    },
    headerText:{
        fontSize:30,
        fontWeight:'bold',
        color:'#F2d22e',
    },
    form:{
        padding:10,
        backgroundColor:'#F2d22e',
        marginBottom:10
    },
    input:{
        margin:10,
        height:40,
        borderColor:'black',
        borderWidth:1,
        marginBottom:5,
        paddingHorizontal:10,
        borderRadius:10
    },
    imageButton:{
        backgroundColor:'#3a415a',
        padding:10,
        borderRadius:5,
        alignItems:'center',
        marginBottom:10,
        borderColor:'white'
    },
    imageButtonText:{
        color:'white',
        fontWeight:'bold'
    },
    imageSelecionada:{
        width:200,
        height:200,
        resizeMode:'cover',
        borderRadius:5,
        marginBottom:10,
    },
    alinhamentoImageSelecionada:{
        alignItems:'center'
    },
    button:{
        backgroundColor:'red',
        padding:10,
        borderRadius:5,
        alignItems:'center'
    },
    buttonText:{
        color:'white',
        fontWeight:'bold'
    },
    imgHeader: {
        width: 150,
        height: 150,
    }
});
export default Cadastro;