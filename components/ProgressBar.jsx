import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ percentage }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Porcentaje de lavados correctos</Text>
      <View style={styles.barBackground}>
        <View style={[styles.barFill, { width: `${percentage}%` }]} />
      </View>
      <Text style={styles.percentText}>{percentage}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
  },
  barBackground: {
    height: 18,
    backgroundColor: '#e0e0e0',
    borderRadius: 9,
    overflow: 'hidden',
    marginBottom: 8,
  },
  barFill: {
    height: '100%',
    backgroundColor: '#4285f4',
    borderRadius: 9,
  },
  percentText: {
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProgressBar; 