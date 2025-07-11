import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';

// Spinner circular personalizado, igual al de la imagen
export default function CircleSpinner({ size = 100, color = '#0582c2' }) {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: size * 0.07,
        borderColor: color,
        borderBottomColor: '#000',
        borderLeftColor: color,
        borderTopColor: color,
        borderRightColor: color,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}
    >
      <Animated.View
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          position: 'absolute',
          borderWidth: size * 0.07,
          borderColor: 'transparent',
          borderBottomColor: '#000',
          transform: [{ rotate: spin }],
        }}
      />
    </View>
  );
}