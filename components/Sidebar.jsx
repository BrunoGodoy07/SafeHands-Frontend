import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Sidebar({ onClose }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>SafeHands</Text>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.close}>×</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menu}>
        <Text style={styles.menuItem}>Dashboard</Text>
        <Text style={styles.menuItem}>ABM Usuarios</Text>
        <Text style={styles.menuItem}>Reproducción de lavados</Text>
        <Text style={styles.menuItem}>Reportes por usuario</Text>
      </View>
      <TouchableOpacity style={styles.logoutBtn}>
        <Text style={styles.logoutText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: '100%',
    backgroundColor: '#0b7ec2',
    padding: 18,
    paddingTop: 30,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  logo: { width: 34, height: 34, marginRight: 10, resizeMode: 'contain' },
  title: { color: '#fff', fontSize: 20, fontWeight: '600', flex: 1 },
  close: { color: '#fff', fontSize: 30, paddingHorizontal: 8 },
  menu: { marginVertical: 18 },
  menuItem: { color: '#fff', fontSize: 18, marginVertical: 12 },
  logoutBtn: {
    backgroundColor: '#d03b3b',
    borderRadius: 7,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  logoutText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});