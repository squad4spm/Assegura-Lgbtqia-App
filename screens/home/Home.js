import React from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity, Image, View } from 'react-native';

export default function Home({ navigation }) {
  return (
    
    <ScrollView style={styles.container}>

      <View style={styles.ContRow}>
        <TouchableOpacity style={styles.cardDefesa} onPress={() => navigation.navigate('Defesa pessoal')} >
          <Image style={styles.icons} source={require('../../assets/images/selfDefense.png')} />
          <Text>Defesa pessoal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardNome} onPress={() => navigation.navigate('Nome social')} >
          <Image style={styles.icons} source={require('../../assets/images/doc.png')} />
          <Text>Nome social</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ContRow}>
        <TouchableOpacity style={styles.cardLocalizacao} onPress={() => navigation.navigate('Localizações')} >
          <Image style={styles.icons} source={require('../../assets/images/map.png')} />
          <Text>Localizações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardAjude} onPress={() => navigation.navigate('Ajude')} >
          <Image style={styles.icons} source={require('../../assets/images/shake.png')} />
          <Text>Ajude</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ContRow}>
        <TouchableOpacity style={styles.cardCasa} onPress={() => navigation.navigate('Casas de acolhimento')} >
          <Image style={styles.icons} source={require('../../assets/images/house.png')} />
          <Text>Casas de acolhimento</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardDireito} onPress={() => navigation.navigate('Direitos LGBTQIA+')} >
          <Image style={styles.icons} source={require('../../assets/images/law.png')} />
          <Text>Direitos LGBTQIA+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ContRow}>
        <TouchableOpacity style={styles.cardAjudaP} onPress={() => navigation.navigate('Ajuda psicológica')} >
          <Image style={styles.icons} source={require('../../assets/images/psicologhy.png')} />
          <Text>Ajuda psicológica</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
    },
    ContRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    cardDefesa: {
      marginTop: 20,
      backgroundColor: '#9400d3',
      width: 150,
      height: 150,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    cardNome: {
      marginTop: 20,
      backgroundColor: '#a0522d',
      width: 150,
      height: 150,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    cardLocalizacao: {
      marginTop: 20,
      backgroundColor: '#00ffff',
      width: 150,
      height: 150,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    cardAjude: {
      marginTop: 20,
      backgroundColor: '#7cfc00',
      width: 150,
      height: 150,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    cardCasa: {
      marginTop: 20,
      backgroundColor: '#0000ff',
      width: 150,
      height: 150,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    cardDireito: {
      marginTop: 20,
      backgroundColor: '#ff0000',
      width: 150,
      height: 150,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    cardAjudaP: {
      marginTop: 20,
      backgroundColor: '#ffff00',
      width: 150,
      height: 150,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    icons: {
      width: 70,
      height: 70,
    },
  });