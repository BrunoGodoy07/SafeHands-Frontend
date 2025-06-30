import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AuthenticatingScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Success');  
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SafeHands</Text>
      <View style={styles.card}>
        <Text style={styles.text}>Autenticando...</Text>
        <ActivityIndicator size="large" color="#000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#004d99', justifyContent: 'center', alignItems: 'center' },
  title: { color: 'white', fontSize: 20, position: 'absolute', top: 50 },
  card: { width: 250, height: 200, backgroundColor: '#007ACC', borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  text: { color: 'white', marginBottom: 20 },
});
