import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

// Calcula el porcentaje para 320px en 1280px (ancho): 320/1280 = 25%
const VIDEO_SIZE_PERC = '25%'; // para width: 25% de la caja principal

const QRLoginCard = () => {
  const videoRef = useRef(null);
  const [error, setError] = useState('');
  const [streaming, setStreaming] = useState(false);

  useEffect(() => {
    async function enableCamera() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment', width: 320, height: 320 }
          });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
            setStreaming(true);
          }
        } catch (err) {
          setError('No se pudo acceder a la cámara.');
          setStreaming(false);
        }
      } else {
        setError('Este navegador no soporta cámara.');
        setStreaming(false);
      }
    }
    enableCamera();
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <View style={styles.qrBox}>
      <Text style={styles.qrTitle}>Escanee Su código QR</Text>
      <View style={styles.qrContent}>
        <View style={styles.videoWrapper}>
          <video
            ref={videoRef}
            style={styles.video}
            playsInline
            autoPlay
            muted
          />
        </View>
        <View style={styles.qrLabelBox}>
          <Text style={styles.qrLabel}>DR Gonzalez</Text>
          <Text style={styles.qrLabelSub}>Cirujano Plástico</Text>
        </View>
        {error ? <Text style={{ color: '#fff', marginTop: 8 }}>{error}</Text> : null}
      </View>
      <TouchableOpacity style={styles.retryBtn} onPress={() => window.location.reload()}>
        <Text style={styles.retryText}>Reintentar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  qrBox: {
    backgroundColor: '#0568a7',
    borderRadius: 12,
    padding: 24,
    width: '100%',
    maxWidth: 340,
    alignItems: 'center',
    alignSelf: 'flex-end',
    minHeight: 390,
  },
  qrTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 14,
    textAlign: 'center'
  },
  qrContent: {
    alignItems: 'center'
  },
  videoWrapper: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#035fa3',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    overflow: 'hidden'
  },
  video: {
    width: '100%',
    height: '100%',
    minWidth: 0,
    minHeight: 0,
    objectFit: 'cover',
    backgroundColor: '#035fa3', // Asegura fondo azul si video no carga
    borderRadius: 10,
  },
  qrLabelBox: {
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 10
  },
  qrLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222'
  },
  qrLabelSub: {
    fontSize: 14,
    color: '#222'
  },
  retryBtn: {
    backgroundColor: '#6ecf2b',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 24,
    marginTop: 8
  },
  retryText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default QRLoginCard;