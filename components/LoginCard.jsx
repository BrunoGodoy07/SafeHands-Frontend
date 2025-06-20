import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import QRCard from './QRCard';

export default function LoginCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inicio de sesión</Text>
      <View style={styles.card}>
        <View style={styles.left}>
          <Text style={styles.subTitle}>Log In Manual</Text>
          <Text style={styles.label}>Usuario</Text>
          <TextInput style={styles.input} placeholder="UserAdmin" />

          <Text style={styles.label}>Contraseña</Text>
          <TextInput style={styles.input} placeholder="Ingrese su contraseña" secureTextEntry />

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#ccc' }]}>
              <Text style={[styles.buttonText, { color: '#000' }]}>Registrarse</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
        </View>

        <QRCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  padding: 15,
  backgroundColor: '#007ac2',
  marginTop: '10%',
  marginLeft: '9.8%',
  alignItems: 'center',
  width: '80%',
  borderRadius: 8,
},
card: {
  width: '90%', // Aproximadamente 940px de 1280
  maxWidth: 940,
  flexDirection: 'row',
  backgroundColor: '#005f96',
  borderRadius: 10,
  padding: 20,
  justifyContent: 'space-between',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 5,
  elevation: 4,
  marginBottom: 20,
},
header: {
  fontSize: 24,
  fontWeight: '700',
  color: 'white',
  marginBottom: 25,
},
button: {
  backgroundColor: '#ffffff',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 5,
  marginRight: 10,
},
buttonText: {
  color: '#007ac2',
  fontWeight: '600',
},

  left: {
    width: '48%',
  },
  subTitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 10,
  },
  label: {
    color: 'white',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 20,
    marginTop: 5,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  link: {
    color: '#b3e5fc',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});
