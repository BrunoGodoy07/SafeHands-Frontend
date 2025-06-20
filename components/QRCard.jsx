import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function QRCard() {
  return (
    <View style={styles.qrBox}>
      <Text style={styles.subTitle}>Escanee su código QR</Text>
      <Image
        source={{ uri: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=DrGonzalez' }}
        style={styles.qrImage}
      />
      <Text style={styles.qrLabel}>DR Gonzalez{"\n"}Cirujano Plástico</Text>
      <TouchableOpacity style={styles.retryButton}>
        <Text style={styles.retryText}>Reintentar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  qrBox: {
    width: '48%',
    alignItems: 'center',
  },
  subTitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 10,
  },
  qrImage: {
    width: 120,
    height: 120,
    marginVertical: 10,
  },
  qrLabel: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  retryButton: {
    backgroundColor: '#64dd17',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  retryText: {
    color: 'white',
    fontWeight: '600',
  },
});
