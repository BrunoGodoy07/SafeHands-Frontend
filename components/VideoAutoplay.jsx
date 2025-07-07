import React from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';

const VideoAutoplay = ({ source }) => (
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

const styles = StyleSheet.create({
  container: { borderRadius: 8, overflow: 'hidden', backgroundColor: '#eee' },
  video: { width: '100%', height: 220 },
});

export default VideoAutoplay;