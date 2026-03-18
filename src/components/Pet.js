import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { COMMON_STYLES } from '../utils/constants';

export default function Pet({ level, happiness, isSleeping, emoji }) {
  const translateY = useRef(new Animated.Value(0)).current;

  // Trigger jump animation on level up
  useEffect(() => {
    if (level > 1 && !isSleeping) {
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -50,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(translateY, {
          toValue: 0,
          friction: 3,
          tension: 80,
          useNativeDriver: true,
        })
      ]).start();
    }
  }, [level]);

  // Handle visual effects
  let petFace = emoji;
  if (isSleeping) {
    petFace = `${emoji} 💤`;
  }

  // Optional: Happiness opacity / filter can be added but sticking to basics for now
  
  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.petWrapper, 
          COMMON_STYLES.retroBorder, 
          { transform: [{ translateY }] },
          isSleeping ? styles.sleepingPet : null 
        ]}
      >
        <Text style={styles.petText}>{emoji}</Text>
        {isSleeping && (
          <Text style={styles.zzzText}>💤</Text>
        )}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
  },
  petWrapper: {
    width: 200,      // Genişletildi
    height: 200,     // Genişletildi
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sleepingPet: {
    backgroundColor: '#E0E0E0', 
    opacity: 0.8,
  },
  petText: {
    fontSize: 80,    // Emoji biraz daha büyük 
  },
  zzzText: {
    position: 'absolute',
    top: 30,         // Yukarıya yasla
    right: 40,       // Sağa yasla
    fontSize: 40,    // Evcil hayvan emojisinin (80) yarısı
  }
});
