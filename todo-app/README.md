# 📝 Next.js & React Todo App

React ve Next.js öğrenme sürecimde geliştirdiğim, modern web standartlarına ve immutability (değişmezlik) prensiplerine uygun olarak tasarlanmış dinamik bir **Todo (Görev Yönetimi)** uygulaması.

---

## 🚀 Öne Çıkan Özellikler

* ➕ **Görev Ekleme:** Kullanıcı girdilerine göre benzersiz kimliklerle (ID) yeni görevler oluşturma.
* ⚡ **Client-Side Rendering:** React `useState` hook'u ile anlık sayfa güncellemeleri ve re-render optimizasyonu.

---

## 🛠️ Kullanılan Teknolojiler

* **Framework:** Next.js (App Router)
* **Kütüphane:** React
* **Dil:** JavaScript (ES6+) / JSX
* **Stil:** Tailwind CSS

---

## 🧠 Öğrenilen Temel React Kavramları

Uygulama geliştirme sürecinde özellikle şu temel konulara odaklanılmıştır:

1. **`useState` Hook'u:** State tanımlama ve state güncelleme fonksiyonlarının destructing (`[todos, setTodos]`) yapısıyla kullanımı.
2. **Immutability (Değişmezlik):** State üzerindeki dizileri doğrudan değiştirmek (`push`, `splice`) yerine Spread Operator (`...`), `.map()` ve `.filter()` metotları ile yeni referanslar oluşturma.
3. **Array içinde Object Yapısı:** Görevleri `{ id, text, completed }` formatında tutarak güvenli veri yönetimi sağlama.
4. **Key Prop Kullanımı:** `.map()` döngülerinde her bileşene benzersiz `key` atayarak React render performansını koruma.

---

## 💻 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

1. Repository'yi klonlayın:
   ```bash
   git clone [https://github.com/Hqko01/React/tree/main/todo-app](https://github.com/Hqko01/React/tree/main/todo-app)