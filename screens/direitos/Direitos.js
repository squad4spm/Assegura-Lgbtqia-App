import React, { useState, useCallback } from "react";
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Linking } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

export default function Direitos() {

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.banner}
        source={require('../../assets/images/direitos/banner_mulher_direito.jpg')}
      />

      <View style={styles.section1}>

      <Text style={styles.textStrong}>Segue artigos abaixo: </Text>
        
        <TouchableOpacity style={styles.cardArtigos} onPress={ ()=>{ Linking.openURL('https://sergioluizbarroso.jusbrasil.com.br/artigos/356606315/um-estabelecimento-ou-uma-empresa-podem-se-recusar-a-fornecer-seus-produtos-e-servicos')}} >
          <Image style={styles.imgArtigos} source={require('../../assets/images/direitos/direitos1.jpg')} />
          <Text style={styles.textArtigos}>Recusar-se a atender pelo preconceito</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardArtigos} onPress={ ()=>{ Linking.openURL('https://advpt.jusbrasil.com.br/noticias/429254280/casamento-homoafetivo-e-atuais-direitos-garantidos-aos-conjuges')}} >
          <Image style={styles.imgArtigos} source={require('../../assets/images/direitos/direitos2.jpg')} />
          <Text style={styles.textArtigos}>Casamento homoafetivo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardArtigos} onPress={ ()=>{ Linking.openURL('https://jus.com.br/artigos/59370/adocao-por-pares-homoafetivos-no-brasil#:~:text=A%20rela%C3%A7%C3%A')}} >
          <Image style={styles.imgArtigos} source={require('../../assets/images/direitos/direitos3.jpg')} />
          <Text style={styles.textArtigos}>Adoção de crianças</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardArtigos} onPress={ ()=>{ Linking.openURL('https://jus.com.br/artigos/39874/a-uniao-homoafetiva-e-sua-regulamentacao-no-brasil')}} >
          <Image style={styles.imgArtigos} source={require('../../assets/images/direitos/direitos4.jpg')} />
          <Text style={styles.textArtigos}>União homoafetiva</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardArtigos} onPress={ ()=>{ Linking.openURL('https://www.trt13.jus.br/informe-se/noticias/2019/11/lei-garante-uso-de-nome-social-a-transexuais-e-')}} >
          <Image style={styles.imgArtigos} source={require('../../assets/images/direitos/direitos5.jpg')} />
          <Text style={styles.textArtigos}>Nome social</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardArtigos} onPress={ ()=>{ Linking.openURL('https://www.trt13.jus.br/informe-se/noticias/2019/11/lei-garante-uso-de-nome-social-a-transexuais-e-travestis#:~:text=1%C2%BA%20Fica%20assegurada%20a%20possibilidade,documentos%2C%20na%20forma%20disciplinada%20por')}} >
          <Image style={styles.imgArtigos} source={require('../../assets/images/direitos/direitos6.jpg')} />
          <Text style={styles.textArtigos}>Uso de nome social em órgãos públicos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section1}>
        <Text style={styles.textStrong}>Direitos LGBT+ No Brasil - Assista Vídeo Abaixo</Text>
        <YoutubePlayer
          height={300}
          play={playing}
          videoId={"FefS4qGbLhs"}
          onChangeState={onStateChange}
        />
      </View>

      <View style={styles.section3}>
        <Text style={styles.textStrongA}>Cartilha Antra Brasil</Text>
        
        <TouchableOpacity style={styles.cardCart} onPress={ ()=>{ Linking.openURL('https://antrabrasil.files.wordpress.com/2020/03/cartilha-lgbtifobia.pdf')}} >
          <Image style={styles.imgCart} source={require('../../assets/images/direitos/cartilha_antra.png')} />
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
    height: 200,
  },
  section1: {
    marginTop: 20,
    textAlign: 'center',
  },
  section2: {
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: '#FFD5FF',
  },
  section3: {
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: '#400040',
  },
  cardArtigos: {
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#FFD5FF',
    width: 360,
    height: 280,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  cardCart: {
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
  imgCart: {
    width: 300,
    height: 420,
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