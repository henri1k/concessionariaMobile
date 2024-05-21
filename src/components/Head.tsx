import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";


function Head(): React.JSX.Element{
    return(
        <View style={styles.header}>
            <Image source={require('../assents/images/logotipo.png')} style={styles.logo}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1

    },
    header:{
        backgroundColor:'#3a415a',
        paddingVertical:10,
        alignItems:'center'
    },
    headerText:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
    logo: {
        width: 250,
        height: 150,


    }
});

export default Head;