import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import UserSearchBar from '../components/UserSearchBar';
import ReporteUsuarioCard from '../components/ReporteUsuarioCard';

const mockUsuarios = [
  {
    nombre: 'Dr di Carlo',
    especialidad: 'C. Plastico',
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    lavadosCorrectos: 8,
    lavadosIncorrectos: 0,
  },
  {
    nombre: 'Dr Barri',
    especialidad: 'Urólogo',
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
    lavadosCorrectos: 11,
    lavadosIncorrectos: 3,
  },
  {
    nombre: 'Dr Koren',
    especialidad: 'Urólogo',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    lavadosCorrectos: 5,
    lavadosIncorrectos: 2,
  },
  {
    nombre: 'Dr Ramirez',
    especialidad: 'Anestesia',
    avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
    lavadosCorrectos: 5,
    lavadosIncorrectos: 1,
  },
];

const ReportesXUsuario = () => {
  const [search, setSearch] = useState('');
  const [usuarios, setUsuarios] = useState(mockUsuarios);

  const handleVerMas = (usuario) => {
    alert(`Ver más de ${usuario.nombre}`);
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
        <ReporteUsuarioCard key={idx} usuario={usuario} onVerMas={handleVerMas} />
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

export default ReportesXUsuario;
