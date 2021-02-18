import React, { useState, useCallback, useRef } from "react";
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Linking } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

export default function Nome_social() {

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
        source={require('../../assets/images/nome_social/nomesocial.jpeg')}
      />

      <View style={styles.section1}>
        <Text style={styles.text}>Nome social é o nome pelo qual pessoas transexuais, travestis ou outros preferem ser chamadas no dia a dia, ao invés de seu nome registrado em cartório, que não reflete a sua identidade de gênero. O conceito de identidade de gênero faz referência ao gênero com o qual a pessoa se identifica, podendo ser feminino, masculino, não-binário, entre outros.
        No processo de aceitação e entendimento em relação à identidade de gênero de cada um, o nome é uma das questões que têm maior impacto, já que os nomes estão diretamente ligados a um conceito de masculino e feminino em nossa sociedade. Felizmente, o processo para que pessoas trans possam utilizar seu nome social em documentos oficiais ficou menos complicado e mais inclusivo.
        </Text>
        <Image style={styles.banner} source={require('../../assets/images/nome_social/unnamed2.png')} />
      </View>

      <View style={styles.section2}>
        <Text style={styles.textStrong}>Agora vamos tirar algumas duvidas</Text>
        <Text style={styles.text}>O que pode ser alterado?Conforme a regulamentação, podem ser alterados o prenome, agnomes indicativos de gênero (filho, júnior, neto e etc.) e o gênero em certidões de nascimento e de casamento (com a autorização do cônjuge).
        </Text>
        <Text style={styles.text}>Preciso fazer a alteração no cartório em que fui registrado?Não. O pedido pode ser realizado em qualquer cartório de Registro Civil de Pessoas Naturais em todo território nacional. O cartório que fizer a alteração deverá encaminhar via sistema eletrônico o procedimento ao cartório que registrou o nascimento da pessoa.
        </Text>
        <Image style={styles.banner2} source={require('../../assets/images/nome_social/imgnomesocial.jpg')} />
        <Text style={styles.text}>É possível solicitar a gratuidade do procedimento?Caso o interessado na mudança não tenha condições de arcar com os custos do procedimento, ele pode solicitar a gratuidade no cartório . Para isso, basta apresentar a declaração de hipossuficiência – documento necessário para obter assistência judiciária gratuita. Caso deseje, o cidadão que deseja realizar as mudanças pode contatar a Defensoria Pública de seu estado para conseguir a gratuidade.
        </Text>
      </View>

      <View style={styles.section1}>
        <Text style={styles.text}>Separamos aqui alguns videos com mais informaçoes sobre o processo</Text>
        <Text style={styles.textStrong}>Vídeos</Text>

        <YoutubePlayer
          height={300}
          play={playing}
          videoId={"3oqztdVbivk"}
          onChangeState={onStateChange}
        />

        <YoutubePlayer
          height={300}
          play={playing}
          videoId={"hRD_xTbIgYc"}
          onChangeState={onStateChange}
        />
      </View>

      <View style={styles.section3}>
        <Text style={styles.textStrongA}>Artigos sobre Defesa Pessoal</Text>
        
        <TouchableOpacity style={styles.cardArtigos} onPress={ ()=>{ Linking.openURL('https://www.casaum.org/como-fazer-retificacao-de-nome-e-genero/')}} >
          <Image style={styles.imgArtigos} source={require('../../assets/images/nome_social/imgartigo1.png')} />
          <Text style={styles.textArtigos}>Guia Para Retificação Do Regitro ...</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardArtigos} onPress={ ()=>{ Linking.openURL('https://www.defensoria.sp.def.br/dpesp/Default.aspx?idPagina=6771')}} >
          <Image style={styles.imgArtigos} source={require('../../assets/images/nome_social/imgartigo2.jpg')} />
          <Text style={styles.textArtigos}>Defensoria Pública de São Paulo ...</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardArtigos} onPress={ ()=>{ Linking.openURL('https://www.mattosfilho.com.br/Documents/190614_cartilha_mobile.pdf')}} >
          <Image style={styles.imgArtigos} source={require('../../assets/images/nome_social/imgartigo3.jpg')} />
          <Text style={styles.textArtigos}>O Direito à retificação de nome e gênero  ...</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardArtigos} onPress={ ()=>{ Linking.openURL('https://antrabrasil.files.wordpress.com/2020/03/cartilha-alterac3a7c3a3o-nome-e-genero.pdf')}} >
          <Image style={styles.imgArtigos} source={require('../../assets/images/nome_social/imgartigo4.png')} />
          <Text style={styles.textArtigos}>Cartilha Alteração Nome e Gênero ...</Text>
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
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  textStrongA: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  banner: {
    width: '100%',
    height: 250,
  },
  banner2: {
    width: '100%',
    height: 300,
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