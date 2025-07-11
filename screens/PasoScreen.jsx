import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import PasoCard from '../components/PasoCard';
import VideoAutoplay from '../components/VideoAutoplay';
import LiveVideoPlaceholder from '../components/LiveVideoPlaceholder';
import Navbar from '../components/Navbar';

export default function PasoScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <Navbar />
      <View style={styles.mainBox}>
        <PasoCard
          paso={1}
          titulo="Retirar Accesorios"
          duracion="00:15"
          instrucciones={['Quitar anillos, pulseras y reloj.']}
          siguientePaso="Paso 2"
          loading={false}
        />
        <View style={styles.videosRow}>
          <View style={styles.videoBox}>
            <VideoAutoplay source={require('../assets/videos/videoLavado.mp4')} />
          </View>
          <View style={styles.videoBox}>
            <LiveVideoPlaceholder />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f6fafd'
  },
  mainBox: {
    flex: 1,
    paddingHorizontal: '2%',
    paddingTop: '1%',
    backgroundColor: '#fff',
  },
  videosRow: {
    flexDirection: 'row',
    width: '100%',
    height: '70%', // El alto de la fila de videos es el 70% de la pantalla
    marginTop: '2%',
    marginBottom: '2%',
  },
  videoBox: {
    flex: 1,
    height: '100%', // El video ocupa todo el alto disponible
    marginHorizontal: '1%',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
});