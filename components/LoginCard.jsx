// components/LoginCard.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginCard() {
  const navigation = useNavigation();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Log In Manual</Text>

      <Text style={styles.label}>Usuario</Text>
      <TextInput
        style={styles.input}
        value={user}
        onChangeText={setUser}
        placeholder="UserAdmin"
        placeholderTextColor="#aaa"
      />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholder="Ingrese su contraseña"
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '45%',
    padding: 20,
    backgroundColor: '#006bb3',
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  label: {
    color: 'white',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#005599',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  registerButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  registerText: {
    color: '#ddd',
  },
  forgotText: {
    color: '#d0eaff',
    marginTop: 10,
    fontSize: 12,
  },
});
