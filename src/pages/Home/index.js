import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles'

export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar style="transparent" />
      <Text>Bem-Vindo Jorge</Text>
    </View>
  );
}