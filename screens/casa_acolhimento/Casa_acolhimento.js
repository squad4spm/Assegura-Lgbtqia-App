import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Casa_acolhimento() {
  return (
    <ScrollView style={styles.container}>
      <View>
      <Text style={styles.textTituloStrong}>Principais Casas de Acolhimento SP</Text>
      <Text style={styles.textTitulo}>Quando se é uma pessoa LGBTI+, a própria casa pode representar uma ameaça ou oferecer perigo. Segundo levantamento mais recente do Grupo Gay da Bahia (GGB), 35,5% das lésbicas, gays, bissexuais, travestis e transexuais assassinadas em 2019 foram mortas em suas residências. Sem o apoio e aceitação de suas famílias, muitos membros da comunidade LGBTI+ encontram nas ruas o acolhimento e amparo que está em falta no lar. Pelo Brasil, as chamadas casas de acolhimento para pessoas LGBTI+ auxiliam com apoio e moradia.</Text>
      </View>

      <View style={styles.section1}>
        <Text style={styles.textStrong}>CASA CHAMA</Text>
        <Text style={styles.text}>A Casa Chama é uma organização civil que surgiu em 2018 com o objetivo de fortalecer a comunidade de artistas trans por meio de atendimentos de saúde, projetos culturais e assistências jurídicas. A casa é um ambiente de convívio seguro que produz desde eventos culturais e grupos de estudo até projetos de cuidado e apoio jurídico. Durante a pandemia, o órgão atua com a criação de um fundo emergencial de apoio para pessoas trans afetadas pelo covid-19 e assistidas pelo projeto.</Text>
        <Image style={styles.banner1} source={require('../../assets/images/casa_acolhimento/casa_chama.jpg')}/> 
      </View>

      <View style={styles.section2}>
      <Text style={styles.textStrong}>CASA FLORECER</Text>
        <Text style={styles.text}>Criada em 2016, a Casa Florescer é o primeiro centro de acolhida exclusivo para mulheres trans e travestis em situação de vulnerabilidade social. O projeto tem como objetivo não apenas acolher, mas também reverter o quadro com atendimento social e psicológico. Articulações com as redes de apoio garantem o acesso à alimentação, cursos de qualificação, regularização de documentos e acompanhamento médico capacitado para todas as beneficiadas.</Text>
        <Image style={styles.banner} source={require('../../assets/images/casa_acolhimento/casa_florecer.jpg')}/> 
      </View>

      <View style={styles.section3}>
      <Text style={styles.textStrong}>CASA 1</Text>
        <Text style={styles.text}>Pioneira no Brasil, a Casa 1 é um centro de acolhida de jovens LGBTI+ expulsos de casa pela família, um centro cultural e uma clínica social que atua no centro da cidade de São Paulo. O projeto conta com programações socioeducativas e disponibiliza ao público atendimentos psicoterápicos gratuitos ou de baixo custo. Aproximadamente 3.500 pessoas atendidas mensalmente pelos projetos da casa.</Text>
        <Image style={styles.banner} source={require('../../assets/images/casa_acolhimento/casa1logo.png')}/> 
      </View>

      <View style={styles.section4}>
        <Text style={styles.textStrong}>Casa Chama</Text>
        <Text style={styles.text}>Redes Sociais</Text>
        <Icon style={styles.icon1} onPress={()=> Linking.openURL("https://www.facebook.com/casachama440")} name="facebook" size={18} color="black" />
        <Icon style={styles.icon1} onPress={()=> Linking.openURL("https://www.instagram.com/casachama_org/")} name="instagram" size={18} color="black" />
        <Text style={styles.text}>Contatos</Text>
        <Text style={styles.text}>+55 11 2565 2074</Text>
        <Text style={styles.text}>+55 11 99448 2641</Text>
      </View>

      <View style={styles.section5}>
        <Text style={styles.textTituloStrong}>Casa Florecer</Text>
        <Text style={styles.textTitulo}>Redes Sociais</Text>
        <Icon style={styles.icon2} onPress={()=> Linking.openURL("https://www.facebook.com/casaflorescer/")} name="facebook" size={18} color="#fff" />
        <Icon style={styles.icon2} onPress={()=> Linking.openURL("https://www.instagram.com/casaflorescer_/")} name="instagram" size={18} color="#fff" />
        <Text style={styles.textTitulo}>Contatos</Text>
        <Text style={styles.textTitulo}>+55 11 3456 7890</Text>
      </View>

      <View style={styles.section6}>
        <Text style={styles.textStrong}>Casa 1</Text>
        <Text style={styles.text}>Redes Sociais</Text>
        <Icon style={styles.icon1} onPress={()=> Linking.openURL("https://www.facebook.com/casaum/")} name="facebook" size={18} color="black" />
        <Icon style={styles.icon1} onPress={()=> Linking.openURL("https://www.instagram.com/casa1/")} name="instagram" size={18} color="black" />
        <Text style={styles.text}>Contatos</Text>
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
      color: 'black',
      paddingBottom: 30,
      paddingRight: 20,
      paddingLeft: 20,
    },
    textStrong: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      paddingTop: 30,
      paddingBottom: 30,
      paddingRight: 20,
      paddingLeft: 20,
    },
    textStrongA: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      paddingTop: 30,
      paddingBottom: 30,
      paddingRight: 20,
      paddingLeft: 20,
    },
    textTituloStrong: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: 'rgb(192, 193, 255)',
      textAlign: 'center',
      paddingTop: 30,
      paddingBottom: 30,
      paddingRight: 20,
      paddingLeft: 20,
    },
    textTitulo: {
      fontSize: 18,
      color: 'white',
      backgroundColor: 'rgb(192, 193, 255)',
      textAlign: 'center',
      paddingBottom: 30,
      paddingRight: 20,
      paddingLeft: 20,
    },
    banner: {
      width: '100%',
      height: 300,
    },
    banner1: {
      width: '100%',
      height: 200,
    },
    section4: {
      alignItems: 'center',
    },
    section6: {
      alignItems: 'center',
    },
    icon1: {
      paddingBottom: 10,
    },
    icon2: {
      paddingBottom: 10,
      backgroundColor: 'rgb(192, 193, 255)',
      textAlign: 'center',
    },
  });