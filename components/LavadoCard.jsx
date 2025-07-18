import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const LavadoCard = ({ usuario, onVerGrabaciones }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: usuario.avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{usuario.nombre}</Text>
        <Text style={styles.role}>{usuario.especialidad}</Text>
        <Text style={styles.correctos}>Lavados Correctos {usuario.lavadosCorrectos}</Text>
        <Text style={styles.lastWash}>Último Lavado {usuario.ultimoLavado}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => onVerGrabaciones(usuario)}>
        <Text style={styles.buttonText}>Ver Grabaciones</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginRight: 12,
    backgroundColor: '#eee',
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  role: {
    fontSize: 13,
    color: '#888',
  },
  correctos: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 2,
  },
  lastWash: {
    fontSize: 13,
    color: '#444',
    marginTop: 2,
  },
  button: {
    backgroundColor: '#1790db',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginLeft: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
});

export default LavadoCard; 