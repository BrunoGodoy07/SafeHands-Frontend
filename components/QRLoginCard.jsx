import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Modal } from 'react-native';
import { Camera } from 'expo-camera';

const cameraOptions = [
  { label: 'Cámara trasera', value: Camera.Constants.Type.back },
  { label: 'Cámara frontal', value: Camera.Constants.Type.front }
];

const QRLoginCard = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (Platform.OS === 'web') {
    return (
      <View style={styles.qrBox}>
        <Text style={styles.qrTitle}>La cámara no es compatible en web</Text>
      </View>
    );
  }

  if (hasPermission === null) {
    return (
      <View style={styles.qrBox}>
        <Text style={styles.qrTitle}>Solicitando permiso de cámara...</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.qrBox}>
        <Text style={styles.qrTitle}>Permiso de cámara denegado</Text>
      </View>
    );
  }

  return (
    <View style={styles.qrBox}>
      <View style={styles.headerRow}>
        <Text style={styles.qrTitle}>Escanee Su código QR</Text>
        <TouchableOpacity style={styles.menuBtn} onPress={() => setMenuVisible(true)}>
          <Text style={styles.menuBtnText}>︙</Text>
        </TouchableOpacity>
      </View>
      <Camera style={styles.video} type={type} ratio="1:1" />
      <Text style={styles.qrLabel}>DR Gonzalez{"\n"}Cirujano Plástico</Text>
      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setMenuVisible(false)}>
          <View style={styles.modalMenu}>
            {cameraOptions.map(opt => (
              <TouchableOpacity
                key={opt.value}
                style={styles.modalMenuItem}
                onPress={() => {
                  setType(opt.value);
                  setMenuVisible(false);
                }}
              >
                <Text style={styles.modalMenuItemText}>{opt.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
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
    minHeight: 390,
    position: 'relative'
  },
  headerRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8
  },
  qrTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  menuBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#ffffff22'
  },
  menuBtnText: {
    fontSize: 28,
    color: '#fff'
  },
  video: {
    width: 320,
    height: 320,
    borderRadius: 12,
    marginBottom: 10
  },
  qrLabel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center'
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#0008',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalMenu: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    minWidth: 180
  },
  modalMenuItem: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  modalMenuItemText: {
    fontSize: 16,
    color: '#0568a7'
  }
});

export default QRLoginCard;