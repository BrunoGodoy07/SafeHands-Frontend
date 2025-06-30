import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SuccessScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>✔️ Autenticación exitosa</Text>
      <Text style={styles.message}>Usted ya puede proceder con el lavado de manos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#004d99', justifyContent: 'center', alignItems: 'center', padding: 30 },
  title: { fontSize: 22, fontWeight: 'bold', color: 'white', marginBottom: 20 },
  message: { fontSize: 18, color: '#d0f0ff', textAlign: 'center' },
});
