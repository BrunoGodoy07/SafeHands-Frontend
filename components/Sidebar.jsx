import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions, Easing, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SIDEBAR_WIDTH = 350; // 350px de ancho para tablet

export default function Sidebar({ isOpen, onClose }) {
  const screenWidth = Dimensions.get('window').width;
  const slideAnim = React.useRef(new Animated.Value(screenWidth)).current;

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isOpen ? screenWidth - SIDEBAR_WIDTH : screenWidth,
      duration: 380,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }, [isOpen, screenWidth]);

  if (!isOpen) return null;

  return (
    <View style={styles.overlay}>
      <TouchableOpacity style={styles.overlayTouchable} activeOpacity={1} onPress={onClose} />
      <Animated.View style={[
        styles.sidebar,
        {
          width: SIDEBAR_WIDTH,
          right: 0,
          position: 'absolute',
          height: '100%',
          transform: [{ translateX: Animated.subtract(slideAnim, screenWidth - SIDEBAR_WIDTH) }]
        }
      ]}>
        <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/icon.svg')} style={styles.logoImage} />
          <Text style={styles.logoText}>SafeHands</Text>
        </View>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Ionicons name="close" size={36} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.itemText}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.itemText}>ABM Usuarios</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.itemText}>Reproducción de lavados</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.itemText}>Reportes por usuario</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    zIndex: 100,
    flexDirection: 'row',
  },
  overlayTouchable: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.22)',
  },
  sidebar: {
    backgroundColor: '#0066A2',
    paddingVertical: 40,
    paddingHorizontal: 32,
    shadowColor: '#000',
    shadowOpacity: 0.22,
    shadowOffset: { width: -8, height: 0 },
    elevation: 14,
    zIndex: 101,
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 48,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 40,    // o el tamaño que desees
    height: 40,
    marginRight: 12,
  },
  logoText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },
  closeBtn: {
    marginLeft: 15,
    padding: 2,
  },
  menu: {
    marginBottom: 64,
  },
  menuItem: {
    paddingVertical: 22,
    paddingHorizontal: 10,
    borderBottomWidth: 1.2,
    borderBottomColor: '#ffffff28',
  },
  itemText: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
    letterSpacing: 0.7,
  },
  logoutBtn: {
    marginTop: 'auto',
    backgroundColor: '#C62828',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
    letterSpacing: 0.8,
  },
});