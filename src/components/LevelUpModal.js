import React, { useContext } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { GameContext } from '../context/GameContext';
import { COLORS, COMMON_STYLES } from '../utils/constants';

export default function LevelUpModal() {
  const { showLevelModal, closeLevelModal, level, score } = useContext(GameContext);

  return (
    <Modal visible={showLevelModal} transparent={true} animationType="slide">
      <View style={styles.overlay}>
        <View style={[styles.modalBox, COMMON_STYLES.retroBorder]}>
          <Text style={styles.title}>Tebrikler! 🎉</Text>
          <Text style={styles.text}>Seviye {level} oldun!</Text>
          <Text style={styles.text}>Kazanılan Jeton: +50 Coin 🪙</Text>
          <Text style={styles.text}>Toplam Puan: {score} XP</Text>
          
          <TouchableOpacity style={[styles.button, COMMON_STYLES.retroBorder]} onPress={closeLevelModal}>
            <Text style={[COMMON_STYLES.retroText, { fontSize: 18 }]}>Harika!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBox: {
    width: '80%',
    backgroundColor: '#FFF0F5',
    padding: 30,
    alignItems: 'center',
    shadowColor: '#5C4033',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 10,
  },
  title: {
    ...COMMON_STYLES.retroText,
    fontSize: 28,
    marginBottom: 20,
    color: '#D81B60', // Biraz daha vurgulu
  },
  text: {
    ...COMMON_STYLES.retroText,
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: COLORS.buttonPlay,
    paddingVertical: 12,
    paddingHorizontal: 40,
  }
});
