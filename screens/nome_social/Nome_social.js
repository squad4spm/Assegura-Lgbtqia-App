import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Nome_social() {
  return (
    <View style={styles.container}>
      <Text>Nome Social</Text>
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