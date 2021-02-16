import React from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity, Image, View } from 'react-native';

export default function Home() {
  return (
    
    <ScrollView style={styles.container}>
      <Text>Home</Text>

      <View style={styles.ContRow}>
        <TouchableOpacity style={styles.cardDefesa} >
          <Image style={styles.icons} source={require('../../assets/images/selfDefense.png')} />
          <Text>Defesa pessoal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardNome}>
          <Image style={styles.icons} source={require('../../assets/images/doc.png')} />
          <Text>Nome social</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ContRow}>
        <TouchableOpacity style={styles.cardLocalizacao}>
          <Image style={styles.icons} source={require('../../assets/images/map.png')} />
          <Text>Localizações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardAjude}>
          <Image style={styles.icons} source={require('../../assets/images/shake.png')} />
          <Text>Ajude</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ContRow}>
        <TouchableOpacity style={styles.cardCasa}>
          <Image style={styles.icons} source={require('../../assets/images/house.png')} />
          <Text>Casas de acolhimento</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardDireito}>
          <Image style={styles.icons} source={require('../../assets/images/law.png')} />
          <Text>Direitos LGBTQIA+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ContRow}>
        <TouchableOpacity style={styles.cardAjudaP}>
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