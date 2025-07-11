import React from 'react';
import { Image, StyleSheet } from 'react-native';

const LoadingSpinner = ({ size = 32 }) => (
  <Image
    source={require('../assets/spinner.png')}
    style={{ width: size, height: size }}
  />
);

export default LoadingSpinner;