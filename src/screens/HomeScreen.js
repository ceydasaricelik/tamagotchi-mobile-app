import React, { useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { GameContext } from '../context/GameContext';
import Pet from '../components/Pet';
import ProgressBar from '../components/ProgressBar';
import ActionButton from '../components/ActionButton';
import LevelUpModal from '../components/LevelUpModal';
import { COLORS, COMMON_STYLES } from '../utils/constants';

export default function HomeScreen({ navigation }) {
  const { petName, petEmoji, energy, happiness, score, coins, level, isSleeping, setIsSleeping } = useContext(GameContext);

  const handleToggleSleep = () => {
    setIsSleeping(prev => !prev);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <LevelUpModal />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Lv: {level}</Text>
          <View style={styles.nameBox}>
            <Text style={styles.nameText}>{petName}</Text>
          </View>
          <View style={styles.statsRight}>
             <Text style={styles.headerText}>{score} XP</Text>
             <Text style={styles.headerText}>{coins} 🪙</Text>
          </View>
        </View>
        
        <View style={styles.petSection}>
           <Pet level={level} happiness={happiness} isSleeping={isSleeping} emoji={petEmoji} />
        </View>

        <View style={styles.statsContainer}>
          <ProgressBar label="Enerji ⚡" value={energy} color={COLORS.buttonPlay} />
          <ProgressBar label="Mutluluk 🥰" value={happiness} color={COLORS.buttonFeed} />
        </View>

        <View style={styles.actionsContainer}>
          <ActionButton 
            label="🎯 Oyna" 
            color="#FFCC80" // Soft Orange 
            onPress={() => navigation.navigate('Play')} 
          />
          <ActionButton 
            label="🛒 Besle" 
            color="#A5D6A7" // Muted Green
            onPress={() => navigation.navigate('Market')} 
          />
        </View>
        
        <View style={styles.sleepContainer}>
           <TouchableOpacity 
             style={[styles.sleepButton, COMMON_STYLES.retroBorder, { backgroundColor: isSleeping ? '#FFF59D' : '#B3E5FC' }]}
             onPress={handleToggleSleep}
           >
             <Text style={styles.sleepButtonText}>
                 {isSleeping ? '💡 UYANDIR' : '🌙 UYUT'}
             </Text>
           </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  headerText: {
    ...COMMON_STYLES.retroText,
    fontSize: 20,
  },
  nameBox: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: COLORS.text,
  },
  nameText: {
    ...COMMON_STYLES.retroText,
    fontSize: 22,
    color: '#D81B60',
  },
  statsRight: {
    alignItems: 'flex-end',
  },
  petSection: {
    flex: 1,
    justifyContent: 'center',
  },
  statsContainer: {
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  sleepContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  sleepButton: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    width: '90%',
    alignItems: 'center',
  },
  sleepButtonText: {
    ...COMMON_STYLES.retroText,
    fontSize: 18,
    letterSpacing: 2,
  }
});
