import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const IncumplimientosList = ({ usuarios }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Usuarios con Incumplimientos</Text>
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.nombre}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.nombre}</Text>
              <Text style={styles.role}>{item.especialidad}</Text>
            </View>
            <Text style={styles.count}>{item.cantidad}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    backgroundColor: '#4290b7',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: 8,
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
    backgroundColor: '#eee',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  role: {
    fontSize: 12,
    color: '#888',
  },
  count: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#1790db',
    marginLeft: 8,
  },
});

export default IncumplimientosList; 