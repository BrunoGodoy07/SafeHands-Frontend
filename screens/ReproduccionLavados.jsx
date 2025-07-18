import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import UserSearchBar from '../components/UserSearchBar';
import LavadoCard from '../components/LavadoCard';

const mockUsuarios = [
  {
    nombre: 'Dr di Carlo',
    especialidad: 'C. Plastico',
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    lavadosCorrectos: 8,
    ultimoLavado: '4/06/25',
  },
  {
    nombre: 'Dr Barri',
    especialidad: 'Urólogo',
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
    lavadosCorrectos: 11,
    ultimoLavado: '5/06/25',
  },
  {
    nombre: 'Dr Koren',
    especialidad: 'Urólogo',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    lavadosCorrectos: 5,
    ultimoLavado: '3/06/25',
  },
  {
    nombre: 'Dr Ramirez',
    especialidad: 'Anestesia',
    avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
    lavadosCorrectos: 5,
    ultimoLavado: '1/06/25',
  },
];

const ReproduccionLavados = () => {
  const [search, setSearch] = useState('');
  const [usuarios, setUsuarios] = useState(mockUsuarios);

  const handleVerGrabaciones = (usuario) => {
    alert(`Ver grabaciones de ${usuario.nombre}`);
  };

  const filteredUsuarios = usuarios.filter(
    (u) =>
      u.nombre.toLowerCase().includes(search.toLowerCase()) ||
      u.especialidad.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <UserSearchBar value={search} onChangeText={setSearch} />
      {filteredUsuarios.map((usuario, idx) => (
        <LavadoCard key={idx} usuario={usuario} onVerGrabaciones={handleVerGrabaciones} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
});

export default ReproduccionLavados;
