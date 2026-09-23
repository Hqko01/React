# 🌤️ Next.js Weather Card App

Next.js (App Router), React ve Tailwind CSS kullanılarak geliştirilmiş; kullanıcının anlık konumuna veya aratılan şehre göre hava sıcaklığı, lokasyon, tarih ve dinamik durum ikonu gösteren modern bir **Hava Durumu Kartı** uygulaması.

---

## 🚀 Öne Çıkan Özellikler

* 📍 **Otomatik Konum Algılama:** Tarayıcının `navigator.geolocation` API'si ile kullanıcının enlem/boylam bilgilerini alarak hava durumunu otomatik getirme.
* 🌡️ **Detaylı Hava Bilgisi:** Sıcaklık (°C), lokasyon (şehir/ülke), anlık tarih ve hava durumu (bulutlu, güneşli, yağmurlu vb.) gösterimi.
* 🎨 **Dinamik İkonlar:** OpenWeather API'den gelen veriye göre değişen hava durumu durum ikonları.
* ⚠️ **Hata ve İzin Yönetimi:** Konum izni verilmediğinde veya şehir bulunamadığında kullanıcıya gösterilen özel durum kartı (Error Boundary).
* ⚡ **Next.js App Router & Client Components:** `'use client'` direktifi ile etkileşimli state ve lifecycle (`useEffect`) yönetimi.

---

## 🛠️ Teknolojiler

* **Framework:** Next.js (App Router)
* **Kütüphane:** React (`useState`, `useEffect`)
* **Stil:** Tailwind CSS
* **API:** OpenWeather Current Weather API
* **Dil:** TypeScript / JavaScript (JSX)

---

## 🧠 Öğrenilen Temel Kavramlar & Deneyimler

Bu proje sürecinde odaklanılan ve uygulanan temel web geliştirme pratikleri:

1. **`process.env` ve Güvenlik:** React Client Component'larda çevre değişkenlerine erişmek için `NEXT_PUBLIC_` ön eki kullanımının önemi.
2. **`fetch` ile Asenkron Veri Çekme:** `async/await` yapısı ile API isteklerini yönetme, `loading` ve `error` durumlarını state üzerinde tutma.
3. **Geolocation API:** Tarayıcı üzerinden enlem ve boylam alıp bu koordinatları OpenWeather `lat/lon` endpoint'ine iletme.
4. **JSX Sözdizimi Kuralları:** Ternary operator (`? :`) kullanırken birden fazla elemanı **React Fragment (`<>...</>`)** ile sarmalama gereksinimi.

---

## 💻 Kurulum ve Çalıştırma

Projeyi kendi yerel ortamınızda çalıştırmak için aşağıdaki adımları uygulayabilirsiniz:

1. Repository'yi klonlayın:
   ```bash
   git clone [https://github.com/Hqko01/React/tree/main/weather-app](https://github.com/Hqko01/React/tree/main/weather-app)