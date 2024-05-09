import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";


function Footer(): React.JSX.Element{
    return(
        <View style={styles.footer}>
           <TouchableOpacity>
            
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
        backgroundColor:'white',
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