import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DuracionBadge from './DuracionBadge';
import StepInstruction from './StepInstruction';
import LoadingSpinner from './LoadingSpinner';

const PasoCard = ({
  paso,
  titulo,
  duracion,
  instrucciones,
  siguientePaso,
  loading = false,
}) => (
  <View style={styles.card}>
    <View style={{ flex: 2 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.titulo}>Paso {paso}: {titulo}</Text>
        <DuracionBadge duracion={duracion} />
      </View>
      <StepInstruction instrucciones={instrucciones} />
      {loading && <View style={{ marginTop: 18 }}><LoadingSpinner size={36} /></View>}
    </View>
    <View style={styles.siguiente}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.circulo} />
        <Text style={styles.siguienteText}>Siguiente</Text>
      </View>
      <Text style={styles.siguientePaso}>{siguientePaso}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 22,
    marginTop: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 4,
  },
  titulo: { fontWeight: '700', fontSize: 20, marginRight: 10 },
  siguiente: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 13,
    elevation: 2,
    alignItems: 'flex-start',
    minWidth: 150,
    maxWidth: 210,
  },
  circulo: {
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#979797',
    width: 25,
    height: 25,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  siguienteText: { fontWeight: '600', fontSize: 18 },
  siguientePaso: { color: '#555', fontSize: 15, marginLeft: 35 },
});

export default PasoCard;