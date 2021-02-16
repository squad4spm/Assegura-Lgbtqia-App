import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as Screens from './screens';

const Stack = createStackNavigator();

function ScreenNav() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Screens.Home} />
        <Stack.Screen name="Defesa pessoal" component={Screens.Defesa_pessoal} />
        <Stack.Screen name="Nome social" component={Screens.Nome_social} />
        <Stack.Screen name="Localizações" component={Screens.Localizacoes} />
        <Stack.Screen name="Ajude" component={Screens.Ajude} />
        <Stack.Screen name="Casas de acolhimento" component={Screens.Casa_acolhimento} />
        <Stack.Screen name="Direitos LGBTQIA+" component={Screens.Direitos} />
        <Stack.Screen name="Ajuda psicológica" component={Screens.Ajuda_psicologica} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home"
        drawerContentOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'white',
          labelStyle: { fontSize: 18 },
        }}
        drawerStyle={{
          backgroundColor: '#400040',
        }}
      >
        <Drawer.Screen name="Home" component={ScreenNav} />
        <Drawer.Screen name="Defesa pessoal" component={Screens.Defesa_pessoal} />
        <Drawer.Screen name="Nome social" component={Screens.Nome_social} />
        <Drawer.Screen name="Localizações" component={Screens.Localizacoes} />
        <Drawer.Screen name="Ajude" component={Screens.Ajude} />
        <Drawer.Screen name="Casas de acolhimento" component={Screens.Casa_acolhimento} />
        <Drawer.Screen name="Direitos LGBTQIA+" component={Screens.Direitos} />
        <Drawer.Screen name="Ajuda psicológica" component={Screens.Ajuda_psicologica} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
