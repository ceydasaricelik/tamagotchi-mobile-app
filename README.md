# 🐾 Tamagotchi - React Native Sanal Evcil Hayvan

Modern, retro-kawaii tasarım diline sahip tam donanımlı bir sanal evcil hayvan (Tamagotchi) simülasyonu. Tamamen React Native ve Expo altyapısı kullanılarak geliştirilmiş olup, Context API tabanlı güçlü bir State yönetimi içermektedir.

[**⬇️ Uygulamayı İndir (APK)**](#) *(Buraya APK Linki Gelecek)*  
[**▶️ Oynanış Videosunu İzle (YouTube)**](#) *(Buraya YouTube Linki Gelecek)*

---

## 🎯 Projenin Amacı ve Özellikleri
Kullanıcıların kendi seçtikleri ve isimlendirdikleri evcil bir hayvanı büyüterek ona bakmalarını sağlayan, gelişmiş döngülere sahip bir uygulamadır. 

### 🌟 Ana Oyunlaştırma (Gamification) Döngüsü:
- **Canlı Evren (Game Loop):** Arka planda çalışan 10 saniyelik döngülerle evcil hayvanınızın enerjisi (`-2`) ve mutluluğu (`-5`) sürekli azalır.
- **Uyku Sistemi (💤):** Evcil hayvanınız yoruldu mu? `Uyut` butonuna basarak dinlenmesini sağlayın. Uyku modundayken enerji her 10 saniyede bir hızla `+10` artar ancak mutluluk düşüşü durur ve hayvanla etkileşim (oyun/market) kilitlenir.
- **Oyun Alanı (Play):** Evcil hayvanınızı eğlendirmek için *Konsol, Top, Tenis veya Uçurtma* gibi aktivitelerden birini seçebilirsiniz. Her biri farklı seviyede enerji harcarken karşılığında **+15 Jeton ve XP** kazandırır.
- **Market Sistemi (Beslenme):** Oyunlardan kazandığınız jetonlarla (🪙) Market'ten kahve, hamburger, pasta veya sushi satın alıp petinizin enerjisini anında doldurabilirsiniz.
- **Seviye Atlama (Level Up):** Oyunlardan topladığınız her `100 XP`, evcil hayvanınızın seviye atlamasını sağlar. Yeni seviyede sevimli bir zıplama animasyonu ve **+50 Bonus Jeton** sizi bekliyor!

---

## 🚀 Kurulum ve Çalıştırma Rehbeli

Bu projeyi yerel cihazınızda test etmek veya geliştirmek için adım adım talimatları aşağıda bulabilirsiniz.

### 1. Gereksinimler
- Node.js (v18+)
- Expo CLI (`npm install -g expo-cli`)
- iOS için Expo Go (veya Mac için Xcode), Android için Android Studio / Expo Go.

### 2. Projeyi Çalıştırma (Geliştirici Modu)
Projeyi klonladıktan veya indirdikten sonra terminali proje dizininde açın:

```bash
# Bağımlılıkları Yükleyin
npm install

# Projeyi Başlatın (Tunnel aracılığıyla her ağdan bağlanabilmek için)
npx expo start --clear --tunnel
```
Ekrana gelen QR kodu **Expo Go** uygulaması ile okutarak telefonunuzda doğrudan test edebilirsiniz.

### 3. Uygulamayı Android Studio ile APK'ya Çevirme (Prebuild)
Eğer Expo altyapısından çıkıp uygulamayı doğrudan test edilebilir, yüklenebilir bir Android `.apk` dosyasına dönüştürmek isterseniz:

```bash
# 1. Projeye native Android / iOS dosyalarını (klasörlerini) oluşturun
npx expo prebuild
```
*Bu komuttan sonra Android Studio'yu açıp oluşturulan `android` klasörünü çalıştırabilir ve **Build > Build Bundle(s) / APK(s) > Build APK(s)** menüsünden çıktınızı alabilirsiniz.*

---

## 🛠 Kullanılan Teknolojiler
- **Framework:** React Native (Expo SDK 54)
- **State Management:** React Context API (Global State)
- **Navigation:** React Navigation (Native Stack)
- **Animasyonlar:** React Native built-in `Animated` API
- **UI/UX:** Retro-Kawaii Custom UI (Sabit kahve-ton çerçeveler, pastel renk paleti ve Absolute Positioning ZZZ dinamikleri).

<br/>
<p align="center">Sevgiyle geliştirildi ❤️</p>
