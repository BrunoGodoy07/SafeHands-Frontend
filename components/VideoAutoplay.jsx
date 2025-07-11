import React from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';

export default function VideoAutoplay({ source }) {
  return (
    <View style={styles.container}>
      <Video
        source={source}
        style={styles.video}
        repeat
        resizeMode="cover"
        muted
        paused={false}
        controls={false}
        ignoreSilentSwitch="obey"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%', // Ocupa todo el alto y el ancho del contenedor padre
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  video: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    borderRadius: 8,
  },
});