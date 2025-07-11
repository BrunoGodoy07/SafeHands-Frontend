import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../components/Navbar';
import CircleSpinner from '../components/CircleSpinner';

export default function AuthenticatingScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Success');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.safe}>
      <Navbar style={styles.nav}/>
      <View style={styles.cardBox}>
        <Text style={styles.title}>Autenticando...</Text>
        <CircleSpinner size={110} color="#005a99" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff', // Fondo blanco como en la imagen
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  nav: {
    flex: 1,
  },
  cardBox: {
    marginTop: '6%',
    width: '70%',
    height: '55%',
    backgroundColor: '#0582c2',
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '400',
    marginBottom: 30,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});