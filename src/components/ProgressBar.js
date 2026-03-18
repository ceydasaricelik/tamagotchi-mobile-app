import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, COMMON_STYLES } from '../utils/constants';

export default function ProgressBar({ label, value, color }) {
  const widthPercentage = `${Math.max(0, Math.min(100, value))}%`;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.track, COMMON_STYLES.retroBorder]}>
        <View style={[styles.fill, { width: widthPercentage, backgroundColor: color }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
  },
  label: {
    ...COMMON_STYLES.retroText,
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 5,
  },
  track: {
    height: 30,
    backgroundColor: COLORS.progressTrack,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
  },
});
