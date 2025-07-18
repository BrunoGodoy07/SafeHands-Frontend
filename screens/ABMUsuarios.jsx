import React, { useState } from 'react';
import { View, StyleSheet, Button, ScrollView } from 'react-native';
import UserSearchBar from '../components/UserSearchBar';
import UserTable from '../components/UserTable';

const mockUsers = [
  { apellido: 'Di Carlo', nombre: 'Leandro', rol: 'Usuario', mail: 'leandrodicarlo@gmail.com' },
  { apellido: 'Menace', nombre: 'Alan', rol: 'Admin', mail: 'alanmenace@gmail.com' },
  { apellido: 'Koren', nombre: 'Claudio', rol: 'Usuario', mail: 'korenclaudio@hotmail.com' },
  { apellido: 'Ramirez', nombre: 'Juan', rol: 'Usuario', mail: 'drjuanramirez@gmail.com' },
  { apellido: 'Di Carlo', nombre: 'Marco', rol: 'Admin', mail: 'drmarcodicarlo@gmail.com' },
  { apellido: 'Barri', nombre: 'German', rol: 'Usuario', mail: 'germanbarri@hotmail.com' },
];

const ABMUsuarios = () => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState(mockUsers);

  const handleEdit = (user) => {
    // Acción de editar usuario
    alert(`Editar usuario: ${user.nombre} ${user.apellido}`);
  };

  // Filtrado simple
  const filteredUsers = users.filter(
    (u) =>
      u.nombre.toLowerCase().includes(search.toLowerCase()) ||
      u.apellido.toLowerCase().includes(search.toLowerCase()) ||
      u.mail.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <UserSearchBar value={search} onChangeText={setSearch} />
      <UserTable users={filteredUsers} onEdit={handleEdit} />
      <View style={styles.buttonContainer}>
        <Button title="Ver Más" color="#1790db" onPress={() => alert('Ver más usuarios')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  buttonContainer: {
    marginTop: 16,
    alignItems: 'flex-start',
  },
});

export default ABMUsuarios;
