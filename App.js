import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import * as Screens from "./screens";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Screens.} />
        <Drawer.Screen name="Defesa pessoal" component={Screens.} />
        <Drawer.Screen name="Nome social" component={Screens.} />
        <Drawer.Screen name="Localizações" component={Screens.} />
        <Drawer.Screen name="Ajude" component={Screens.} />
        <Drawer.Screen name="Casas de acolhimento" component={Screens.} />
        <Drawer.Screen name="Direitos LGBTQIA+" component={Screens.} />
        <Drawer.Screen name="Ajuda psicológica" component={Screens.} />
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
