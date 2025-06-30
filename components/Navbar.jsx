import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Navbar({ onMenuPress }) {
  return (
    <View style={styles.navbar}>
      <Image source={require('../assets/icon.svg')} style={styles.logo} />
      <Text style={styles.title}>SafeHands</Text>
      <TouchableOpacity style={styles.hamburger} onPress={onMenuPress}>
        {/* Dibuja las 3 rayas como en el prototipo */}
        <View style={styles.bar} />
        <View style={styles.bar} />
        <View style={styles.bar} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: '#0b7ec2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '400',
    flex: 1,
    textAlign: 'center',
    marginLeft: -34, // Centrado real pese al logo
  },
  hamburger: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bar: {
    width: 26,
    height: 3,
    backgroundColor: '#fff',
    marginVertical: 2,
    borderRadius: 2,
  },
});