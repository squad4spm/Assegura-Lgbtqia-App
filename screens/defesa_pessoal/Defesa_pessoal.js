import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Defesa_pessoal() {
  return (
    <View style={styles.container}>
      <Text>Defesa Pessoal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });