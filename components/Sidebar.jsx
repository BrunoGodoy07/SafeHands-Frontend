import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions, Easing, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Sidebar({ isOpen, onClose }) {
  const screenWidth = Dimensions.get('window').width;
  const sidebarWidth = Math.min(screenWidth * 0.8, 350);

  const slideAnim = React.useRef(new Animated.Value(screenWidth)).current;

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isOpen ? screenWidth - sidebarWidth : screenWidth,
      duration: 380,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }, [isOpen, sidebarWidth, screenWidth]);

  React.useEffect(() => {
    const handleChange = () => {
    };
    Dimensions.addEventListener('change', handleChange);
    return () => {
      Dimensions.removeEventListener('change', handleChange);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <View style={styles.overlay}>
      <TouchableOpacity style={styles.overlayTouchable} activeOpacity={1} onPress={onClose} />
      <Animated.View style={[
        styles.sidebar,
        {
          width: sidebarWidth,
          right: 0,
          position: 'absolute',
          height: '100%',
          transform: [{ translateX: Animated.subtract(slideAnim, screenWidth - sidebarWidth) }]
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
          <TouchableOpacity style={styles.menuItem}><Text style={styles.itemText}>Dashboard</Text></TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}><Text style={styles.itemText}>ABM Usuarios</Text></TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}><Text style={styles.itemText}>Reproducción de lavados</Text></TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}><Text style={styles.itemText}>Reportes por usuario</Text></TouchableOpacity>
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
    width: '100%',
    height: '100%',
    zIndex: 100,
    flexDirection: 'row',
  },
  overlayTouchable: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.50)',
  },
  sidebar: {
    backgroundColor: '#0066A2',
    paddingVertical: 30,
    paddingHorizontal: 32,
    
    elevation: 14,
    zIndex: 101,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
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
    width: 40,
    height: 40,
    marginRight: 12,
  },
  logoText: {
    color: 'white',
    fontSize: 24,
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
    fontSize: 18,
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