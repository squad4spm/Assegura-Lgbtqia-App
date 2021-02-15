import React from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity, Image, View } from 'react-native';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text>Home</Text>

      <View style={styles.ContRow}>
        <TouchableOpacity style={styles.cardDefesa}>
          <Image style={styles.icons} source={require('../../assets/images/selfDefense.png')} />
          <Text>Defesa pessoal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardDefesa}>
          <Image style={styles.icons} source={require('../../assets/images/selfDefense.png')} />
          <Text>Defesa pessoal</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ContRow}>
        <TouchableOpacity style={styles.cardDefesa}>
          <Image style={styles.icons} source={require('../../assets/images/selfDefense.png')} />
          <Text>Defesa pessoal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardDefesa}>
          <Image style={styles.icons} source={require('../../assets/images/selfDefense.png')} />
          <Text>Defesa pessoal</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ContRow}>
        <TouchableOpacity style={styles.cardDefesa}>
          <Image style={styles.icons} source={require('../../assets/images/selfDefense.png')} />
          <Text>Defesa pessoal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardDefesa}>
          <Image style={styles.icons} source={require('../../assets/images/selfDefense.png')} />
          <Text>Defesa pessoal</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ContRow}>
        <TouchableOpacity style={styles.cardDefesa}>
          <Image style={styles.icons} source={require('../../assets/images/selfDefense.png')} />
          <Text>Defesa pessoal</Text>
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
      backgroundColor: '#400040',
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