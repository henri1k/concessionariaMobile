import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Footer from "../components/Footer";
import Head from "../components/Head";

function Pesquisa():React.JSX.Element{




    return(
        <View style={styles.container}>
            
            <Head/>
                    <StatusBar backgroundColor="#3a415a" barStyle='light-content'/>
            <Footer/>
        </View>
        
    );
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F2d22e'
    }
})


export default Pesquisa;