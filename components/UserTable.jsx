import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const UserTable = ({ users, onEdit }) => {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>Apellido</Text>
        <Text style={styles.headerCell}>Nombre</Text>
        <Text style={styles.headerCell}>Rol</Text>
        <Text style={styles.headerCell}>Mail</Text>
        <Text style={styles.headerCell}></Text>
      </View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.mail}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.apellido}</Text>
            <Text style={styles.cell}>{item.nombre}</Text>
            <Text style={styles.cell}>{item.rol}</Text>
            <Text style={styles.cell}>{item.mail}</Text>
            <TouchableOpacity onPress={() => onEdit(item)}>
              <Ionicons name="pencil" size={20} color="#1790db" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 4,
    marginBottom: 4,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  cell: {
    flex: 1,
    fontSize: 14,
  },
});

export default UserTable; 