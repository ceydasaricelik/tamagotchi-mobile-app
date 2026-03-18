import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { GameContext } from '../context/GameContext';
import { COLORS, COMMON_STYLES } from '../utils/constants';

const EMOJIS = ['🐰', '🐱', '🐶', '🐸'];

export default function OnboardingScreen() {
  const { setPetEmoji, setPetName } = useContext(GameContext);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [name, setName] = useState('');

  const handleStart = () => {
    if (!selectedEmoji) {
      Alert.alert('Eksik Seçim', 'Lütfen bir evcil hayvan emojisi seç!');
      return;
    }
    if (!name.trim()) {
      Alert.alert('Eksik İsim', 'Lütfen evcil hayvanına bir isim ver!');
      return;
    }
    setPetEmoji(selectedEmoji);
    setPetName(name.trim());
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.title}>Yeni Arkadaşını Seç!</Text>
      
      <View style={styles.emojiContainer}>
        {EMOJIS.map(emoji => (
          <TouchableOpacity 
            key={emoji} 
            style={[styles.emojiSelect, selectedEmoji === emoji && styles.emojiSelected]}
            onPress={() => setSelectedEmoji(emoji)}
          >
            <Text style={styles.emojiText}>{emoji}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.subtitle}>Ona bir isim ver:</Text>
      <TextInput 
        style={styles.input}
        placeholder="Örn: Pamuk"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>🎉 Maceraya Başla</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    ...COMMON_STYLES.retroText,
    fontSize: 28,
    marginBottom: 40,
  },
  emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  emojiSelect: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: 'transparent',
  },
  emojiSelected: {
    borderColor: COLORS.buttonPlay,
    backgroundColor: '#fff',
  },
  emojiText: {
    fontSize: 50,
  },
  subtitle: {
    ...COMMON_STYLES.retroText,
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    padding: 15,
    ...COMMON_STYLES.retroBorder,
    backgroundColor: '#fff',
    fontSize: 18,
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: COLORS.buttonFeed,
    paddingVertical: 15,
    paddingHorizontal: 30,
    ...COMMON_STYLES.retroBorder,
  },
  buttonText: {
    ...COMMON_STYLES.retroText,
    fontSize: 18,
  }
});
