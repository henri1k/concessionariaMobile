import React from 'react';
import { View } from 'react-native';
import Cadastro from './src/screens/CadastroScreens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Listagem from './src/screens/ListagemScreens';
import Editar from './src/screens/EditarScreens';
import Pesquisa from './src/screens/PesquisaScreens';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='listagem' component={Listagem} options={{ headerShown: false}}/>
        <Stack.Screen name='cadastro' component={Cadastro} options={{ headerShown: false}}/>
        <Stack.Screen name='pesquisa' component={Pesquisa} options={{ headerShown: false}}/>
        <Stack.Screen name='editar' component={Editar} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
