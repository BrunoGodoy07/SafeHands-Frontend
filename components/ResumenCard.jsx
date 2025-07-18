import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResumenCard = ({ monitoreados, correctos, incorrectos }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Resumen</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Usuarios Monitoreados</Text>
        <Text style={styles.value}>{monitoreados}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Lavados Correctos</Text>
        <Text style={[styles.value, { color: 'green' }]}>{correctos}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Lavados Incorrectos</Text>
        <Text style={[styles.value, { color: 'red' }]}>{incorrectos}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    backgroundColor: '#4290b7',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: 8,
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  value: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ResumenCard; 