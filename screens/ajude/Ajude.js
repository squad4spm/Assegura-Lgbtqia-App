import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Ajude() {
  return (
    <View style={styles.container}>
      <Text>Ajude</Text>
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