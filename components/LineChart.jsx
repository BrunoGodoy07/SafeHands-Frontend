// Requiere instalar: react-native-svg y react-native-svg-charts
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart, Grid, YAxis, XAxis } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

const CustomLineChart = ({ correctos, incorrectos }) => {
  const dataCorrectos = correctos || [2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7];
  const dataIncorrectos = incorrectos || [1, 2, 2, 2, 3, 2, 3, 4, 3, 4, 3, 2];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lavados Correctos e Incorrectos</Text>
      <View style={{ flexDirection: 'row', height: 120 }}>
        <YAxis
          data={[...dataCorrectos, ...dataIncorrectos]}
          contentInset={{ top: 10, bottom: 10 }}
          svg={{ fontSize: 10, fill: 'grey' }}
        />
        <LineChart
          style={{ flex: 1, marginLeft: 8 }}
          data={dataCorrectos}
          svg={{ stroke: '#4285f4', strokeWidth: 2 }}
          contentInset={{ top: 10, bottom: 10 }}
          curve={shape.curveLinear}
        >
          <Grid />
        </LineChart>
        <LineChart
          style={StyleSheet.absoluteFill}
          data={dataIncorrectos}
          svg={{ stroke: '#ea4335', strokeDasharray: [4, 4], strokeWidth: 2 }}
          contentInset={{ top: 10, bottom: 10 }}
          curve={shape.curveLinear}
        />
      </View>
      <View style={styles.legendContainer}>
        <View style={[styles.legendDot, { backgroundColor: '#4285f4' }]} />
        <Text style={styles.legendText}>Correctos</Text>
        <View style={[styles.legendDot, { backgroundColor: '#ea4335' }]} />
        <Text style={styles.legendText}>Incorrectos</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginVertical: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  legendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  legendDot: {
    width: 12,
    height: 4,
    borderRadius: 2,
    marginHorizontal: 4,
  },
  legendText: {
    fontSize: 12,
    marginRight: 12,
  },
});

export default CustomLineChart; 