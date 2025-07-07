import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const DuracionBadge = ({ duracion }) => (
  <View style={styles.badge}>
    <Text style={styles.text}>Duración: {duracion}</Text>
  </View>
);

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#36B37E',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  text: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
});

export default DuracionBadge;