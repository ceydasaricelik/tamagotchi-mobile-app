# 🐾 Tamagotchi - React Native Sanal Evcil Hayvan Mobil Uygulaması

Modern ve *retro-kawaii* tasarım diline sahip, Play Store standartlarında derlenmiş uçtan uca eksiksiz bir sanal evcil hayvan simülasyonu. Tamamen **React Native** ve **Expo** altyapısıyla geliştirilmiş olup, Context API tabanlı güçlü bir State yönetimiyle oyunlaştırma (gamification) dinamiklerini bir araya getirmektedir.

[![İndir - APK](https://img.shields.io/badge/İndir-APK-success?style=for-the-badge&logo=android)](https://github.com/ceydasaricelik/tamagotchi-mobile-app/releases/download/v1.0.0/tamagotchi-app-v1.apk)  

> **🎥 Oynanış ve Tanıtım Videosu:**  
> [Buraya tıklayarak 1 dakikalık YouTube tanıtım videosunu izleyebilirsiniz.](https://youtube.com/shorts/n9jua5EXSpY)

---

## 🎯 Projenin Amacı ve Oyunlaştırma (Gamification) Dinamikleri

Kullanıcının seçtiği ve isimlendirdiği bir evcil hayvanı büyüterek ona bakmasını amaçlayan, arka planda (background) karmaşık yaşam döngülerine sahip sürükleyici bir uygulamadır.

### 🌟 Temel Oyun Döngüsü (Game Loop)
- **Canlı Evren:** Arka planda aktif olarak çalışan `setInterval` tabanlı 10 saniyelik döngülerle evcil hayvanın enerjisi (`-2`) ve mutluluğu (`-5`) anlık olarak azalır.
- **Uyku Sistemi (💤):** Evcil hayvan yorulduğunda `Uyut` moduna geçirilebilir. Uyku esnasında mutluluk düşüşü durur ve enerji her 10 saniyede bir hızla (`+10`) yenilenir. Hayvan uyurken aksiyonlar kilitlenir.
- **Eğlence ve Oyun Alanı (Play):** Hayvanın enerjisini harcayarak mutluluğunu yükseltmek için *Konsol, Top, Tenis veya Uçurtma* gibi mini aktiviteler sunulur. Her oyun dinamik enerji maliyetlerine sahipken, oynandığında oyuncuya taze tecrübe puanı (XP) ve harcanabilir Jeton (Coin) bırakır.
- **Market Sistemi (Beslenme):** Oyunlardan toplanan jetonlarla (🪙), hayvanın enerjisini dolduracak besinler *(Hamburger, Pasta, Sushi vb.)* satın alınıp tüketilir. Paranızı stratejik yönetmeniz gerekir.
- **Seviye Atlama (Level Up):** Her `100 XP` barajı aşıldığında tam ekran UI bileşenleriyle kutlama animasyonları girer ve hayvanın yeni versiyonuna geçişi vurgulanarak oyuncuya yüksek miktarda (+50) Bonus Jeton hediye edilir.

---

## 🛠 Kullanılan Teknolojiler
- **Framework:** React Native, Expo SDK
- **Durum Yönetimi (State):** React Context API (Global State)
- **Sayfa Yönlendirme:** React Navigation (Native Stack)
- **Animasyon Ağı:** React Native built-in `Animated` API
- **Mimari ve UI/UX:** Atomic component mimarisi, retro kalın çerçeveli pastel palet ve platform-bağımsız Native stillendirme.

---

## 🚀 Kurulum ve Geliştirici Ortamında Çalıştırma (Installation & Run)

Bu projeyi yerel cihazınızda test etmek veya kodlara katkı sağlamak (Clone & Run) için aşağıdaki terminal komutlarını kullanabilirsiniz:

### 1. Projeyi Bilgisayarınıza İndirin (Klonlayın)
```bash
git clone https://github.com/ceydasaricelik/tamagotchi-mobile-app.git
cd tamagotchi-mobile-app
```

### 2. Gerekli Kütüphaneleri (Bağımlılıkları) Yükleyin
```bash
npm install
```

### 3. Geliştirme Sunucusunu Başlatın
Telefonunuzdaki **Expo Go** uygulamasıyla kodu anında derleyip görmek için projenizi başlatın:
```bash
npx expo start --clear --tunnel
```
*(Ekranda beliren QR kodu iOS kamerasından veya Android'deki Expo Go uygulamasından okutabilirsiniz.)*

---

🩷 **Katkıda Bulunan**  
👑 Halide Ceyda Sarıçelik
