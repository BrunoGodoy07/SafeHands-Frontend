import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ReporteUsuarioCard = ({ usuario, onVerMas }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: usuario.avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{usuario.nombre}</Text>
        <Text style={styles.role}>{usuario.especialidad}</Text>
        <View style={styles.row}>
          <Text style={styles.correctos}>Lavados Correctos {usuario.lavadosCorrectos}</Text>
          <Text style={styles.incorrectos}>Lavados Incorrectos {usuario.lavadosIncorrectos}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => onVerMas(usuario)}>
        <Text style={styles.buttonText}>Ver Más</Text>
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
  row: {
    flexDirection: 'row',
    marginTop: 2,
  },
  correctos: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 15,
    marginRight: 12,
  },
  incorrectos: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15,
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

export default ReporteUsuarioCard; 