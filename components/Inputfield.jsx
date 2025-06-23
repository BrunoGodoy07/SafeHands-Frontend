// components/Sidebar.jsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Sidebar({ isOpen, onClose }) {
  const slideAnim = React.useRef(new Animated.Value(-300)).current;

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isOpen ? 0 : -300,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  return (
    <Animated.View style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}>
      <View style={styles.header}>
        <Text style={styles.logo}>SafeHands</Text>
        <TouchableOpacity onPress={onClose}>
          <Ionicons name="close" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {['Dashboard', 'ABM Usuarios', 'Reproducción de lavados', 'Reportes por usuario'].map((item, index) => (
        <Text key={index} style={styles.item}>▸ {item}</Text>
      ))}
      <TouchableOpacity style={styles.logoutBtn}>
        <Text style={styles.logoutText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 260,
    backgroundColor: '#0066A2',
    padding: 20,
    zIndex: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    color: 'white',
    fontSize: 16,
    marginVertical: 10,
  },
  logoutBtn: {
    marginTop: 40,
    backgroundColor: '#C62828',
    padding: 10,
    borderRadius: 6,
    alignSelf: 'center',
  },
  logoutText: {
    color: 'white',
  },
});
