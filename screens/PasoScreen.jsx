import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';
import PasoCard from '../components/PasoCard';
import VideoAutoplay from '../components/VideoAutoplay';
import LiveVideoPlaceholder from '../components/LiveVideoPlaceholder';

const PasoScreen = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#f6fafd' }}>
    {/* Header */}
    <View style={styles.header}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={require('../assets/icon.svg')} style={{ height: 32, width: 32, marginRight: 10 }} />
        <Text style={styles.headerText}>SafeHands</Text>
      </View>
      <TouchableOpacity style={styles.abandonarBtn}>
        <Text style={styles.abandonarText}>Abandonar</Text>
      </TouchableOpacity>
    </View>
    {/* PasoCard */}
    <View style={styles.container}>
      <PasoCard
        paso={1}
        titulo="Retirar Accesorios"
        duracion="00:15"
        instrucciones={['Quitar anillos, pulseras y reloj.']}
        siguientePaso="Paso 2"
        loading={false}
      />
      <View style={styles.videosRow}>
        <View style={{ flex: 1, marginRight: 10 }}>
          <VideoAutoplay source={require('../assets/videos/videoLavado.mp4')} />
        </View>
        <View style={{ flex: 1, marginLeft: 10 }}>
          <LiveVideoPlaceholder />
        </View>
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0582c2',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
  },
  headerText: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 20,
    letterSpacing: 1,
  },
  abandonarBtn: {
    backgroundColor: '#dd3e43',
    borderRadius: 16,
    paddingVertical: 5,
    paddingHorizontal: 14,
  },
  abandonarText: {
    color: '#fff', fontWeight: 'bold', fontSize: 15,
  },
  container: { flex: 1, paddingHorizontal: 14 },
  videosRow: { flexDirection: 'row', marginTop: 32 },
});

export default PasoScreen;