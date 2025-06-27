import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

export default function CameraQR() {
  const [permission, setPermission] = useState(null);
  const devices = useCameraDevices();
  const device = devices.back;

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setPermission(status);
    })();
  }, []);

  if (permission == null) {
    return (
      <View style={styles.qrContainer}>
        <ActivityIndicator size="large" color="#0b7ec2" />
      </View>
    );
  }

  if (permission !== 'authorized' || !device) {
    return (
      <View style={styles.qrContainer}>
        <Text style={styles.nocam}>Sin acceso a la cámara</Text>
      </View>
    );
  }

  return (
    <View style={styles.qrContainer}>
      <Camera
        style={styles.camera}
        device={device}
        isActive={true}
      />
      {/* Línea roja de escaneo */}
      <View style={styles.scanLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  qrContainer: {
    width: 300,
    height: 300,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    position: 'relative',
  },
  camera: {
    width: 300,
    height: 300,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  scanLine: {
    position: 'absolute',
    top: 148,
    left: 0,
    width: 300,
    height: 4,
    backgroundColor: 'red',
    opacity: 0.75,
    borderRadius: 2,
    zIndex: 2,
  },
  nocam: {
    color: '#06659d',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});