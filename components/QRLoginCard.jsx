import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const QRLoginCard = () => {
  // Si quieres mantener el menú, puedes dejar el estado del modal
  const [menuVisible, setMenuVisible] = React.useState(false);

  return (
    <View style={styles.qrBox}>
      <View style={styles.headerRow}>
        <Text style={styles.qrTitle}>Escanee Su código QR</Text>
        <TouchableOpacity style={styles.menuBtn} onPress={() => setMenuVisible(true)}>
          <Text style={styles.menuBtnText}>︙</Text>
        </TouchableOpacity>
      </View>
      {/* Aquí solo queda el cuadro, puedes agregar un placeholder o un diseño visual */}
      <View style={styles.placeholderBox}>
        <Text style={styles.placeholderText}>[ Aquí va el QR ]</Text>
      </View>
      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setMenuVisible(false)}>
          <View style={styles.modalMenu}>
            <TouchableOpacity
              style={styles.modalMenuItem}
              onPress={() => setMenuVisible(false)}
            >
              <Text style={styles.modalMenuItemText}>Cerrar</Text>
            </TouchableOpacity>
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
    padding: 1,
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
    fontWeight: 'bold',
    marginLeft: '18%',
    marginTop: '5%'
  },
  menuBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 7,
    backgroundColor: '#ffffff22'
  },
  menuBtnText: {
    fontSize: 20,
    color: '#fff'
  },
  // Cuadro placeholder para el QR
  placeholderBox: {
    width: 320,
    height: 300,
    borderRadius: 12,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  placeholderText: {
    color: '#aaa',
    fontWeight: 'bold',
    fontSize: 18
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