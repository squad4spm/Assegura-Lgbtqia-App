import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Ajuda_psicologica() {
  return (
    <View style={styles.container}>
      <Text>Ajuda Psicológica</Text>
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