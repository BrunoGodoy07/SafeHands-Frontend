import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Image
        source={require('../assets/icon.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>SafeHands</Text>
      <Text style={styles.menu}>≡</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: '#007ac2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  logo: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  },
  menu: {
    color: 'white',
    fontSize: 24,
  },
});
