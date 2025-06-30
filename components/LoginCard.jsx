import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginCard() {
  const navigation = useNavigation();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

    
  return (
    <View style={styles.loginBox}>
      <Text style={styles.boxTitle}>Log In Manual</Text>
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
        value={password}
        onChangeText={setPassword}
        placeholder="Ingrese su contraseña"
        placeholderTextColor="#aaa"
        secureTextEntry
      />
      <View style={styles.buttonRow}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Authenticating')}>
      <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loginBox: {
    backgroundColor: '#0568a7',
    borderRadius: 12,
    paddingHorizontal: 32,      // ¡Más ancho!
    paddingVertical: 32,
    width: '100%',
    maxWidth: 380,              // ¡Más ancho!
    minHeight: 390,
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  boxTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 14,
    textAlign: 'center',
  },
  label: {
    color: '#fff',
    marginBottom: 4,
    marginTop: 8,
    fontWeight: '500'
  },
  input: {
    backgroundColor: '#eaeaea',
    borderRadius: 20,
    padding: 10,
    marginBottom: 8,
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 8,
    gap: 8
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flex: 1,
    marginHorizontal: 2,
  },
  buttonText: {
    color: '#027dc1',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
  },
  link: {
    color: '#d0eaff',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 7,
    textDecorationLine: 'underline',
  }
});