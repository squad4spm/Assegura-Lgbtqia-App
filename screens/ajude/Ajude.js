import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Linking } from 'react-native';

export default function Ajude() {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.banner}
        source={require('../../assets/images/ajude/ajude01.jpg')}
      />

      <View style={styles.section1}>
        <Text style={styles.text}>Com o intuito de ajudar as pessoas da comunidade LGBTQIA+ em situação de vulnerabilidade social, criamos meios que você pode de forma totalmente voluntária ajudar nessa missão tão importante que é vivermos em um país inclusivo onde todas as pessoas podem expressar suas vontades normalmente sem serem ofendidas pela sua orientação sexual.
        </Text>
        <Text style={styles.textStrong}>Por isso criamos o Assegura LGBTQIA+</Text>
        <Image style={styles.banner} source={require('../../assets/images/ajude/ajude02.jpg')} />
      </View>

      <View style={styles.section2}>
        <Text style={styles.text}>Pensando nisso, nasceu o ASSEGURA que tem como objetivo principal contribuir por meio da informação, a segurança preventiva contra a violência das pessoas que fazem parte da comunidade LGBTQIA+ em diversos âmbitos da sociedade, seja ela física ou psicológica.
        Vamos nessa? Fique à vontade para contribuir da maneira que se sentir mais confortável e vamos juntos nessa corrente do bem.
        </Text>
        <Image style={styles.banner} source={require('../../assets/images/ajude/ajude04.jpg')} />
        <Text style={styles.text}>Por que ajudar? O Brasil é o país que mais sofre com a violência contra a comunidade LGBTQIA+, para mudarmos esse triste cenário que tal unirmos forças para combatermos essa realidade? O ASSEGURA LGBTQIA+ conta com sua contribuição para cada vez mais vivermos em um país mais inclusivo e melhor para todos :D
        </Text>
      </View>

      <View style={styles.section3}>
        <Text style={styles.textStrongA}>Veja abaixo mais informações de como você pode ajudar a comuidade LGBTQIA+</Text>
        
        <TouchableOpacity style={styles.cardArtigos} >
          <Image style={styles.imgArtigos} source={require('../../assets/images/ajude/ajude05.jpg')} />
          <Text style={styles.textArtigos}>Saiba como AJUDAR!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardDoar} >
          <Image style={styles.imgArtigos} source={require('../../assets/images/ajude/ajude08.jpg')} />
          <Text style={styles.textArtigos}>Doar Faz Bem</Text>
          <Text style={styles.textCard}>Banco Nubank Ag - 0000 Cc - 00000-0</Text>
          <Text style={styles.textCard}>Banco Itaú Ag - 0000 Cc - 00000-0</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  textCard: {
    fontSize: 18,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
  },
  textStrong: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  textStrongA: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  banner: {
    width: '100%',
    height: 250,
  },
  section1: {
    marginTop: 20,
    textAlign: 'center',
  },
  section2: {
    textAlign: 'center',
    backgroundColor: '#FFD5FF',
  },
  section3: {
    textAlign: 'center',
    backgroundColor: '#400040',
  },
  cardArtigos: {
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#FFD5FF',
    width: 360,
    height: 250,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  cardDoar: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#FFD5FF',
    width: 360,
    height: 450,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imgArtigos: {
    width: 300,
    height: 200,
  },
  textArtigos: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});