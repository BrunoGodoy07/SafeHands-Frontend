import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StepInstruction = ({ instrucciones = [] }) => (
  <View style={{ marginTop: 10 }}>
    {instrucciones.map((txt, i) => (
      <View key={i} style={styles.instruction}>
        <Text style={styles.bullet}>●</Text>
        <Text style={styles.text}>{txt}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  instruction: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6fafd',
    borderColor: '#b7e3ff',
    borderWidth: 1,
    borderRadius: 8,
    padding: 7,
    marginBottom: 6,
    alignSelf: 'flex-start',
  },
  bullet: { color: '#2186C4', marginRight: 6, fontSize: 16 },
  text: { fontWeight: '500', fontSize: 15 },
});

export default StepInstruction;