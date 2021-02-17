import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Localizacoes() {
  return (
    <ScrollView style={styles.container}>

      <WebView style={styles.map} source={{ uri: 'https://www.google.com/maps/d/viewer?mid=1vF4oeGJEHx0F0Xt6MwO1CbRC_fud4VuW&ll=-23.55271297036849%2C-46.67244578123125&z=11' }} />

      <TouchableOpacity style={styles.card} >
        <Image style={styles.icons} source={require('../../assets/images/localizacoes/markerDefesa.png')} />
        <Text style={styles.textStrong}>Defesa pessoal</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} >
        <Image style={styles.icons} source={require('../../assets/images/localizacoes/markerNome.png')} />
        <Text style={styles.textStrong}>Nome social</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} >
        <Image style={styles.icons} source={require('../../assets/images/localizacoes/markerCasaAcolhimento.png')} />
        <Text style={styles.textStrong}>Casa de acolhimento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} >
        <Image style={styles.icons} source={require('../../assets/images/localizacoes/markerJuridico.png')} />
        <Text style={styles.textStrong}>Direitos LGBTQIA+</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} >
        <Image style={styles.icons} source={require('../../assets/images/localizacoes/markerP.png')} />
        <Text style={styles.textStrong}>Psicológico</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    backgroundColor: '#FFD5FF',
    width: 360,
    height: 70,
    borderRadius: 15,
    alignItems: 'center',
  },
  icons: {
    width: 50,
    height: 50,
  },
  map: {
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 380,
    height: 450,
  },
  textStrong: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});