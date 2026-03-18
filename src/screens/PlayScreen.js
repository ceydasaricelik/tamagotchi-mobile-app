import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native';
import { GameContext } from '../context/GameContext';
import { COLORS, COMMON_STYLES } from '../utils/constants';

const GAMES = [
  { id: 1, name: 'Konsol', emoji: '🎮', cost: 5, reward: 10 },
  { id: 2, name: 'Top', emoji: '⚽', cost: 15, reward: 25 },
  { id: 3, name: 'Tenis', emoji: '🎾', cost: 20, reward: 35 },
  { id: 4, name: 'Uçurtma', emoji: '🪁', cost: 10, reward: 15 },
];

export default function PlayScreen({ navigation }) {
  const { energy, setEnergy, setHappiness, addScore, setCoins, isSleeping } = useContext(GameContext);

  const handlePlay = (game) => {
    if (isSleeping) {
      Alert.alert('Uyuyan Bebek!', 'Şu anda uyuyor, oynamak için önce uyandır!');
      return;
    }

    if (energy < game.cost) {
      Alert.alert('Enerji Yetersiz!', 'Yeterli enerjim yok, biraz uyumalıyım veya yemek yemeliyim! 💤🍔');
      return;
    }
    
    setEnergy(prev => Math.max(0, prev - game.cost));
    setHappiness(prev => Math.min(100, prev + game.reward));
    addScore(15);
    setCoins(prev => prev + 15);
    
    // İşlem başarılı olduktan sonra otomatik olarak ana menüye dön
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={[COMMON_STYLES.retroText, { fontSize: 20 }]}>⬅ Geri Dön</Text>
        </TouchableOpacity>
        
        <Text style={styles.title}>Oyun Alanı 🎠</Text>
        <Text style={styles.subtitle}>Her oyun +15 Jeton ve +15 XP kazandırır.</Text>
        
        <ScrollView style={styles.gamesList}>
          {GAMES.map(g => (
            <TouchableOpacity key={g.id} style={[styles.gameCard, COMMON_STYLES.retroBorder]} onPress={() => handlePlay(g)}>
              <Text style={styles.gameEmoji}>{g.emoji}</Text>
              <View style={styles.gameInfo}>
                <Text style={styles.gameName}>{g.name}</Text>
                <Text style={styles.gameStats}>⚡ -{g.cost} Enerji  |  🥰 +{g.reward} Mutluluk</Text>
              </View>
              <Text style={styles.playText}>OYNA</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF3E0', // Soft pastel orange
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    ...COMMON_STYLES.retroBorder,
  },
  title: {
    ...COMMON_STYLES.retroText,
    fontSize: 28,
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    ...COMMON_STYLES.retroText,
    fontSize: 14,
    color: '#888',
    marginBottom: 30,
    textAlign: 'center',
  },
  gamesList: {
    flex: 1,
  },
  gameCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  gameEmoji: {
    fontSize: 50,
    marginRight: 15,
  },
  gameInfo: {
    flex: 1,
  },
  gameName: {
    ...COMMON_STYLES.retroText,
    fontSize: 22,
    marginBottom: 5,
  },
  gameStats: {
    ...COMMON_STYLES.retroText,
    fontSize: 14,
    color: '#666',
  },
  playText: {
    ...COMMON_STYLES.retroText,
    fontSize: 16,
    color: COLORS.buttonPlay,
    backgroundColor: '#E8F5E9',
    padding: 10,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#5C4033',
  }
});
