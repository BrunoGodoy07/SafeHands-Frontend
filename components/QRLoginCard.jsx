import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Camera } from 'expo-camera';

const QRLoginCard = () => {
  const videoRef = useRef(null);
  const [error, setError] = useState('');
  const [streaming, setStreaming] = useState(false);

  // Expo Camera state
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  // Pedir permisos solo en móvil
  useEffect(() => {
    if (Platform.OS !== 'web') {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
        setType(Camera.Constants.Type.back);
      })();
    }
  }, []);

  // Para web: inicializar la cámara y reproducir en <video>
  useEffect(() => {
    let streamObj;
    if (Platform.OS === 'web') {
      async function enableCamera() {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          try {
            streamObj = await navigator.mediaDevices.getUserMedia({
              video: { facingMode: 'environment', width: 320, height: 320 }
            });
            if (videoRef.current) {
              videoRef.current.srcObject = streamObj;
              videoRef.current.onloadedmetadata = () => {
                videoRef.current
                  .play()
                  .then(() => setStreaming(true))
                  .catch(() => setError('Haz click sobre la cámara para activarla.'));
              };
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
    }
    return () => {
      if (Platform.OS === 'web' && streamObj) {
        streamObj.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  function handleManualPlay() {
    if (Platform.OS === 'web' && videoRef.current) {
      videoRef.current.play();
    }
  }

  return (
    <View style={styles.qrBox}>
      <Text style={styles.qrTitle}>Escanee Su código QR</Text>
      <View style={styles.qrContent}>
        <View style={styles.videoWrapper} onClick={handleManualPlay}>
          {Platform.OS === 'web' ? (
            <video
              ref={videoRef}
              style={styles.video}
              playsInline
              autoPlay
              muted
              width={320}
              height={320}
            />
          ) : (
            hasPermission === null ? (
              <Text style={{ color: '#fff' }}>Solicitando permiso de cámara...</Text>
            ) : hasPermission === false ? (
              <Text style={{ color: '#fff' }}>Permiso de cámara denegado</Text>
            ) : (
              <Camera
                style={styles.video}
                type={type}
                ratio="1:1"
              />
            )
          )}
        </View>
        <View style={styles.qrLabelBox}>
          <Text style={styles.qrLabel}>DR Gonzalez</Text>
          <Text style={styles.qrLabelSub}>Cirujano Plástico</Text>
        </View>
        {error ? <Text style={{ color: '#fff', marginTop: 8 }}>{error}</Text> : null}
      </View>
      <TouchableOpacity style={styles.retryBtn} onPress={() => Platform.OS === 'web' ? window.location.reload() : null}>
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
    position: 'relative'
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
    width: 320,
    height: 320,
    backgroundColor: '#035fa3',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    overflow: 'hidden',
    cursor: 'pointer'
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: Platform.OS === 'web' ? 'cover' : undefined,
    backgroundColor: '#035fa3',
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