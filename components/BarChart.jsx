// Requiere instalar: react-native-svg y react-native-svg-charts
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart, XAxis, Grid } from 'react-native-svg-charts';

const CustomBarChart = ({ data }) => {
  const chartData = data || [
    { value: 5, label: 'Noche' },
    { value: 9, label: 'Mañana' },
    { value: 3, label: 'Tarde' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lavado Por Turno</Text>
      <BarChart
        style={{ height: 120 }}
        data={chartData.map((d) => d.value)}
        svg={{ fill: '#1790db' }}
        contentInset={{ top: 10, bottom: 10 }}
        spacingInner={0.4}
      >
        <Grid />
      </BarChart>
      <XAxis
        style={{ marginTop: 8 }}
        data={chartData}
        formatLabel={(value, index) => chartData[index].label}
        contentInset={{ left: 20, right: 20 }}
        svg={{ fontSize: 12, fill: 'black' }}
      />
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
    textAlign: 'center',
  },
});

export default CustomBarChart; 