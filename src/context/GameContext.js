import React, { createContext, useState, useEffect } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [petName, setPetName] = useState('');
  const [petEmoji, setPetEmoji] = useState('');
  
  const [energy, setEnergy] = useState(50);
  const [happiness, setHappiness] = useState(50);
  const [score, setScore] = useState(0);
  const [coins, setCoins] = useState(0);
  const [level, setLevel] = useState(1);
  const [isSleeping, setIsSleeping] = useState(false);
  
  const [showLevelModal, setShowLevelModal] = useState(false);

  // Oyun Döngüsü (Game Loop)
  useEffect(() => {
    // Sadece evcil hayvan seçildiyse (Onboarding bittiyse) döngüyü başlat
    if (!petName) return;

    const interval = setInterval(() => {
      if (isSleeping) {
        // Uyuyorsa: 10 saniyede bir enerji 10 artar (maksimum 100)
        setEnergy(prev => Math.min(100, prev + 10));
      } else {
        // Uyumuyorsa: 10 saniyede bir enerji 2, mutluluk 5 azalır 
        setEnergy(prev => Math.max(0, prev - 2));
        setHappiness(prev => Math.max(0, prev - 5));
      }
    }, 10000); // 10 saniye

    return () => clearInterval(interval);
  }, [isSleeping, petName]);

  // Seviye Sistemi
  const addScore = (amount) => {
    setScore(prev => {
      const newScore = prev + amount;
      // Seviye atlama kontrolü (mevcut level * 100 threshold'u geçtiyse)
      const targetScore = level * 100;
      if (newScore >= targetScore) {
        setLevel(l => l + 1);
        setShowLevelModal(true); // Modal'ı tetikle
      }
      return newScore;
    });
  };

  const closeLevelModal = () => {
    setShowLevelModal(false);
    // Modal kapandıktan sonra ödülü ver
    setCoins(prev => prev + 50);
  };

  return (
    <GameContext.Provider value={{
      petName, setPetName,
      petEmoji, setPetEmoji,
      energy, setEnergy,
      happiness, setHappiness,
      score, addScore,
      coins, setCoins,
      level, 
      isSleeping, setIsSleeping,
      showLevelModal, closeLevelModal
    }}>
      {children}
    </GameContext.Provider>
  );
};
