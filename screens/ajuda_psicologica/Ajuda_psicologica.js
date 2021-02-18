import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Linking } from 'react-native';

export default function Ajuda_psicologica() {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.banner}
        source={require('../../assets/images/ajuda_psicologica/psicologico1.jpg')}
      />

      <View style={styles.section1}>
        <Text style={styles.textStrong}>Pessoas Precisando</Text>
        <Text style={styles.text}>“Cuidar da saúde mental não é um luxo, é uma necessidade, principalmente quando as relações familiares estão desgastadas e não oferecem refúgio, quando os equipamentos do Estado estão sendo desmontados” a realidade de muitas pessoas LGBTs que buscam na terapia auxílio, escuta e acolhimento, mas nem sempre conseguem um ambiente seguro. -Violência dentro do consultório- A psicóloga Beatriz Machado conta que é comum ouvir de pacientes LGBTs violências sofridas dentro dos consultórios, que relatam não terem tido suas queixas e dores legitimadas no espaço terapêutico em relação à LGBTfobia. “Isso é o equivalente a apanhar. Procurar um lugar seguro e lá ser surrado novamente”. Falar em saúde mental para população LGBT+ , é fundamental, principalmente quando falamos em populações historicamente discriminadas, que sofrem pelos fatores sociais ligados aos preconceitos. Muitas pessoas LGBTQIA+ em São Paulo precisam de apoio psicológico. Mas muitas dessas pessoas não conseguem acessar esse tipo de serviço. Seja por falta de grana, por falta de vagas ou por não encontrarem um ambiente seguro. Pensando nisso nos da Assegura LGBTQIA+ buscamos conectar pessoas LGBTQIA+ a profissionais de psicologia que queiram atendê-las de forma voluntária ou valor social e promovam um ambiente seguro para todes.
        </Text>
        <Image style={styles.banner2} source={require('../../assets/images/ajuda_psicologica/psicologico2.jpg')} />
      </View>

      <View style={styles.section3}>
        <Text style={styles.textStrongA}>Artigos sobre Ajuda Psicológica</Text>
        
        <TouchableOpacity style={styles.cardArtigos} onPress={ ()=>{ Linking.openURL('https://www.vittude.com/blog/fala-psico/a-importancia-da-psicoterapia-para-lgbts/#:~:text=O%20proces')}} >
          <Image style={styles.imgArtigos} source={require('../../assets/images/ajuda_psicologica/ajuda1.jpg')} />
          <Text style={styles.textArtigos}>A importância da psicoterapia para LGBTs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardArtigos} onPress={ ()=>{ Linking.openURL('https://observatoriosc.org.br/noticia/cuidar-da-saude-mental-de-negros-e-lgbts-exige-combater-racismo-e-lgbtfobia/')}} >
          <Image style={styles.imgArtigos} source={require('../../assets/images/ajuda_psicologica/ajuda2.jpg')} />
          <Text style={styles.textArtigos}>Cuidar da saúde mental de LGBTs ...</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardArtigos} onPress={ ()=>{ Linking.openURL('https://ubes.org.br/2018/saudemental-lgbtfobia-causa-danos-psicologicos-que-precisam-de-atencao/')}} >
          <Image style={styles.imgArtigos} source={require('../../assets/images/ajuda_psicologica/ajuda3.jpg')} />
          <Text style={styles.textArtigos}>SaúdeMental</Text>
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
    height: 215,
  },
  banner2: {
    width: '100%',
    height: 280,
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
    paddingBottom:20,
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
  imgArtigos: {
    width: 300,
    height: 200,
  },
  textArtigos: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});