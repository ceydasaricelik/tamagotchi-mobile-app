import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS, COMMON_STYLES } from '../utils/constants';

export default function ActionButton({ label, onPress, color, disabled }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.button,
        COMMON_STYLES.retroBorder,
        { backgroundColor: disabled ? '#E0E0E0' : color },
      ]}
      onPress={onPress}
      disabled={!!disabled}
    >
      <Text style={[styles.text, COMMON_STYLES.retroText, disabled && { color: '#999' }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginHorizontal: 10,
    minWidth: 120,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.border,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  text: {
    fontSize: 18,
    textTransform: 'uppercase',
  },
});
