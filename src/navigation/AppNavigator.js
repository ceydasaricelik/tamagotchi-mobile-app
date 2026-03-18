import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GameContext } from '../context/GameContext';

import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen';
import PlayScreen from '../screens/PlayScreen';
import MarketScreen from '../screens/MarketScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { petName } = useContext(GameContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Onboarding tamamlanmadıysa Onboarding'i göster, bittiyse uygulamanın içine al */}
        {!petName ? (
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Play" component={PlayScreen} />
            <Stack.Screen name="Market" component={MarketScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
