import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Direitos() {
  return (
    <View style={styles.container}>
      <Text>Direitos LGBTQIA+</Text>
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