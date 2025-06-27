import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function QRCard() {
  return (
    <View style={styles.qrBox}>
      <Text style={styles.subTitle}>Escanee su código QR</Text>
      <Image
        source={{ uri: 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=DrGonzalez' }}
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
    backgroundColor: '#06659d',
    borderRadius: 14,
    padding: 24,
    alignItems: 'center',
    minWidth: 270,
    marginLeft: 14,
  },
  subTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 14,
    textAlign: 'center',
  },
  qrImage: {
    width: 180,
    height: 180,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
  },
  qrLabel: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 8,
    fontSize: 16,
  },
  retryButton: {
    backgroundColor: '#6dc24b',
    paddingVertical: 11,
    paddingHorizontal: 35,
    borderRadius: 6,
    marginTop: 14,
  },
  retryText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});