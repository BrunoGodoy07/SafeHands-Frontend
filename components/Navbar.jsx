// components/Navbar.jsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Navbar({ onMenuPress }) {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={onMenuPress}>
        <Ionicons name="menu" size={28} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>SafeHands</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: '#007ac2',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});
