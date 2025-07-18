import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ProgressBar from '../components/ProgressBar';
import LineChart from '../components/LineChart';
import ResumenCard from '../components/ResumenCard';
import IncumplimientosList from '../components/IncumplimientosList';
import BarChart from '../components/BarChart';

const DashboardScreen = () => {
  // Datos mockeados
  const porcentajeCorrectos = 86;
  const resumen = {
    monitoreados: 4,
    correctos: 31,
    incorrectos: 5,
  };
  const usuariosIncumplimientos = [
    {
      nombre: 'Dr Barri',
      especialidad: 'Urólogo',
      cantidad: 3,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      nombre: 'Dr Rodriguez',
      especialidad: 'Oftalmólogo',
      cantidad: 7,
      avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
    },
    {
      nombre: 'Dr Koren',
      especialidad: 'Urólogo',
      cantidad: 2,
      avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
    },
  ];
  const lavadosPorTurno = [
    { value: 4, label: 'Noche' },
    { value: 7, label: 'Mañana' },
    { value: 2, label: 'Tarde' },
  ];
  const correctos = [2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7];
  const incorrectos = [1, 2, 2, 2, 3, 2, 3, 4, 3, 4, 3, 2];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProgressBar percentage={porcentajeCorrectos} />
      <View style={styles.row}>
        <View style={styles.flex2}>
          <ResumenCard {...resumen} />
          <IncumplimientosList usuarios={usuariosIncumplimientos} />
        </View>
        <View style={styles.flex3}>
          <LineChart correctos={correctos} incorrectos={incorrectos} />
          <BarChart data={lavadosPorTurno} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  flex2: {
    flex: 2,
    marginRight: 8,
  },
  flex3: {
    flex: 3,
    marginLeft: 8,
  },
});

export default DashboardScreen;
