import React, { useState, useCallback } from "react";
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Linking, Button } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

export default function Defesa_pessoal() {

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
        source={require('../../assets/images/defesa_pessoal/faixa.jpg')}
      />

      <View style={styles.section1}>
        <Text style={styles.text}>Muitas pessoas LGBTQIA+ no centro de São Paulo precisam de apoio, para se defender de violências sofridas. Mas muitas dessas pessoas não conseguem acessar esse tipo serviço. Seja por falta de grana, por falta de um serviço personalizado, falta de tempo ou até mesmo falta de acesso à informação.</Text>
        <Text style={styles.textStrong}>Por isso criamos o Assegura LGBTQIA+</Text>
        <Image style={styles.banner} source={require('../../assets/images/defesa_pessoal/Defesa.png')} />
      </View>

      <View style={styles.section2}>
        <Text style={styles.text}>Por isso, vamos através de Informações e Parcerias com Professores e Escolas de Defesa Pessoal, conectar quem precisa de acesso a esse serviço com Profissionais e Ambientes seguro, livre de assédio, livre de discriminações, em que as pessoas possam desenvolver suas potencialidades em um clima de respeito, amizade e colaboração, buscando assegurar a comunidade LGBTQIA+.
        Nosso diferencial, é que além de promover essa conexão, também vamos disponibilizar na nossa plataforma, vídeos com aulas básicas gratuitas.</Text>
        <Image style={styles.banner} source={require('../../assets/images/defesa_pessoal/Defesa_Pessoal.png')} />
        <Text style={styles.text}>Pesquisas mostram que pessoas treinadas para responder adequadamente a um ataque, podem até mesmo impedir que agressões aconteçam, pois, reagem ao perigo de forma mais assertiva e confiante, aumentando as chances de evitar situações violentas ou enfrentá-las com segurança.</Text>
      </View>

      <View style={styles.section1}>
        <Text style={styles.text}>Você que é alvo de violência deve saber se defender, isto é empoderamento, é ser livre,
        é não viver refém do medo.</Text>
        <Text style={styles.textStrong}>Vídeos com Aulas de Defesa Pessoal</Text>
        <YoutubePlayer
          height={300}
          play={playing}
          videoId={"HF8NxF1QYh0"}
          onChangeState={onStateChange}
        />

        <YoutubePlayer
          height={300}
          play={playing}
          videoId={"kxnjvWnpnxQ"}
          onChangeState={onStateChange}
        />
      </View>

      <View style={styles.section3}>
        <Text style={styles.textStrongA}>Artigos sobre Defesa Pessoal</Text>
        
        <TouchableOpacity style={styles.cardArtigos} onPress={ ()=>{ Linking.openURL('https://www.bjjee.com/articles/meet-the-first-ever-transgender-brazilian-jiu-jitsu-black-belt/')}} >
          <Image style={styles.imgArtigos} source={require('../../assets/images/defesa_pessoal/imagemartigotrans.jpg')} />
          <Text style={styles.textArtigos}>Conheça a primeira Trans faixa-preta ...</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardArtigos} onPress={ ()=>{ Linking.openURL('https://www.bjjee.com/articles/bjj-instructor-introduces-rainbow-belt-to-show-support-for-gay-rights/')}} >
          <Image style={styles.imgArtigos} source={require('../../assets/images/defesa_pessoal/defesa5.jpeg')} />
          <Text style={styles.textArtigos}>“Cinto arco-íris” ...</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardArtigos} onPress={ ()=>{ Linking.openURL('https://kajaswords.com/2019/09/11/not-seeing-difference/')}} >
          <Image style={styles.imgArtigos} source={require('../../assets/images/defesa_pessoal/defesa2.png')} />
          <Text style={styles.textArtigos}>“Sem ver diferenças” ...</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardArtigos} onPress={ ()=>{ Linking.openURL('https://www.wesa.fm/post/lgbtq-self-defense-class-focuses-empowerment?fbclid=IwAR0ELMKP_bhXKnFDPNrTU#stream/0')}} >
          <Image style={styles.imgArtigos} source={require('../../assets/images/defesa_pessoal/defesa4.png')} />
          <Text style={styles.textArtigos}>Turmas de Defesa-Pessoal para LGBTs ...</Text>
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
      paddingBottom: 20,
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
      paddingBottom: 20,
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
    imgArtigos: {
      width: 300,
      height: 200,
    },
    textArtigos: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    buttonYou: {
      backgroundColor: '#FFD5FF',
      width: '100%',
      height: 20,
      borderRadius: 15,
    },
  });