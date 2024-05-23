import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";


function Footer(): React.JSX.Element{
    const navigation = useNavigation();
    return(
        <View style={styles.footer}>
            <TouchableOpacity onPress={()=> navigation.navigate('listagem')}>
                <Image source={require('../assents/images/home.png')} style={styles.FooterIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('cadastro')}>
                <Image source={require('../assents/images/avatar.png')} style={styles.FooterIcon}/>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    menuList:{
        flexGrow:1
    },
    footer:{
        borderTopWidth:0.2,
        backgroundColor:'#3a415a',
        flexDirection:"row",
        justifyContent:'space-around',
        alignItems:'flex-end',
        paddingVertical:10
    },
    FooterIcon:{
        width:30,
        height:30
    }
});

export default Footer;