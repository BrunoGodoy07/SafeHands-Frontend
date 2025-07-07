import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const LiveVideoPlaceholder = () => (
  <View style={styles.container}>
    <Image
      source={require('../assets/live-placeholder.png')}
      style={styles.icon}
      resizeMode="contain"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dedede',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: 220,
  },
  icon: { width: 70, height: 70, opacity: 0.7 },
});

export default LiveVideoPlaceholder;