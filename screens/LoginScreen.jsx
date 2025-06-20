import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';
import LoginCard from '../components/LoginCard';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <LoginCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
