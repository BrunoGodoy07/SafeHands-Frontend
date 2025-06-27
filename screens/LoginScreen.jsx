import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';
import LoginCard from '../components/LoginCard';
import QRLoginCard from '../components/QRLoginCard';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <View style={styles.centerBox}>
        <Text style={styles.mainTitle}>Inicio de sesión</Text>
        <View style={styles.loginRow}>
          <View style={styles.leftCol}>
            <LoginCard />
          </View>
          <View style={styles.rightCol}>
            <QRLoginCard />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  centerBox: {
    width: '70%',
    minWidth: 700,
    maxWidth: 900,
    alignSelf: 'center',
    backgroundColor: '#0582c2',
    borderRadius: 16,
    marginTop: 50,
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  mainTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  loginRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    gap: 24,
  },
  leftCol: {
    flex: 1,
    marginRight: 12,
    justifyContent: 'center',
  },
  rightCol: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
});