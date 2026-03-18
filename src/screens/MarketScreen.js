import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native';
import { GameContext } from '../context/GameContext';
import { COLORS, COMMON_STYLES } from '../utils/constants';

const FOODS = [
  { id: 1, name: 'Kahve', emoji: '☕', cost: 0, energy: 5 },
  { id: 2, name: 'Hamburger', emoji: '🍔', cost: 20, energy: 30 },
  { id: 3, name: 'Pasta', emoji: '🍰', cost: 35, energy: 50 },
  { id: 4, name: 'Sushi', emoji: '🍣', cost: 50, energy: 80 },
];

export default function MarketScreen({ navigation }) {
  const { coins, setCoins, setEnergy, isSleeping } = useContext(GameContext);

  const handleFeed = (food) => {
    if (isSleeping) {
      Alert.alert('Uyuyan Bebek!', 'Şu anda mışıl mışıl uyuyor. Yemek yedirmek için önce uyandır!');
      return;
    }

    if (coins < food.cost) {
      Alert.alert('Yetersiz Jeton!', 'Yeterli paran yok! Biraz oyun oynayıp para kazanmalısın. 🎮🪙');
      return;
    }
    
    setCoins(prev => prev - food.cost);
    setEnergy(prev => Math.min(100, prev + food.energy));

    // İşlem başarılı olduktan sonra otomatik olarak ana menüye dön
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={[COMMON_STYLES.retroText, { fontSize: 20 }]}>⬅ Geri</Text>
          </TouchableOpacity>
          <View style={[styles.coinBox, COMMON_STYLES.retroBorder]}>
            <Text style={styles.coinText}>{coins} 🪙</Text>
          </View>
        </View>

        <Text style={styles.title}>Market 🛒</Text>
        <Text style={styles.subtitle}>En lezzetli atıştırmalıklar!</Text>
        
        <ScrollView style={styles.list}>
          {FOODS.map(f => (
            <TouchableOpacity key={f.id} style={[styles.card, COMMON_STYLES.retroBorder]} onPress={() => handleFeed(f)}>
              <Text style={styles.emoji}>{f.emoji}</Text>
              <View style={styles.info}>
                <Text style={styles.name}>{f.name}</Text>
                <Text style={styles.stats}>⚡ +{f.energy} Enerji</Text>
              </View>
              <Text style={styles.costText}>{f.cost} 🪙</Text>
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
    backgroundColor: '#E8F5E9', // Soft pastel green
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
    backgroundColor: '#fff',
    ...COMMON_STYLES.retroBorder,
  },
  coinBox: {
    padding: 10,
    backgroundColor: COLORS.buttonFeed, // Yellowish
    alignItems: 'center',
    justifyContent: 'center',
  },
  coinText: {
    ...COMMON_STYLES.retroText,
    fontSize: 20,
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
  list: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  emoji: {
    fontSize: 50,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    ...COMMON_STYLES.retroText,
    fontSize: 22,
    marginBottom: 5,
  },
  stats: {
    ...COMMON_STYLES.retroText,
    fontSize: 14,
    color: '#666',
  },
  costText: {
    ...COMMON_STYLES.retroText,
    fontSize: 18,
    color: COLORS.buttonPlay,
    backgroundColor: '#FFF59D',
    padding: 10,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#5C4033',
  }
});
