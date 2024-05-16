import React from "react";
import { StatusBar, View } from "react-native";
import Footer from "../components/Footer";
import Head from "../components/Head";

function Pesquisa():React.JSX.Element{




    return(
        <View>
            <StatusBar backgroundColor="red" barStyle='light-content'/>
            <Head/>
                    
            <Footer/>
        </View>
        
    );
}
export default Pesquisa;