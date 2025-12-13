/* firebase.js - V1.0 (Firebase Firestore Simülasyonu) */

// 🛑 Burası, gerçek bir Firebase projesi oluşturduğunuzda elde edeceğiniz config bilgileri olacaktır.
// Şimdilik simüle edilmiş verilerle çalışıyoruz.

const firebaseConfig = {
    apiKey: "AIzaSy_Simulated_KEY",
    authDomain: "nkartal-portal.firebaseapp.com",
    projectId: "nkartal-prod-db",
    storageBucket: "nkartal-prod-db.appspot.com",
};

// --- SIMÜLASYON VERİTABANI OBJESİ ---
// Gerçek veritabanı yerine, tarayıcının yerel hafızasını (LocalStorage) kullanacağız.
// Bu, bilgilerin tarayıcıyı kapatsanız bile kalıcı olmasını sağlar.

const DB_KEY = 'nk_firestore_sim';
let database = {};

// 1. Veritabanını LocalStorage'dan yükler
function loadDatabase() {
    const storedData = localStorage.getItem(DB_KEY);
    if (storedData) {
        database = JSON.parse(storedData);
    } else {
        // İlk çalıştırmada varsayılan yapı
        database = {
            settings: {
                access: {
                    allowed_passwords: ['1', '47', 'admin'],
                    max_login_attempts: 5
                }
            },
            logs: [], // Buraya tracker.js logları düşecek
            user_data: {}
        };
        saveDatabase();
    }
}

// 2. Veritabanını LocalStorage'a kaydeder
function saveDatabase() {
    localStorage.setItem(DB_KEY, JSON.stringify(database));
}

// 3. Firestore Veri Çekme Simülasyonu (Async)
async function getDocument(collectionName, docId) {
    return new Promise(resolve => {
        setTimeout(() => {
            if (database[collectionName] && database[collectionName][docId]) {
                // Dokümanı döndürür (snapshot.data() gibi)
                resolve(database[collectionName][docId]);
            } else {
                resolve(null); // Doküman yoksa null döndürür
            }
        }, 100); // Küçük bir gecikme ekleyerek ağ simülasyonu yapar
    });
}

// 4. Firestore Veri Ekleme Simülasyonu (Async)
async function addLogEntry(logData) {
    return new Promise(resolve => {
        setTimeout(() => {
            // logData'ya bir zaman damgası ekler
            logData.timestamp = new Date().toISOString();
            
            // Logs koleksiyonuna ekler
            if (!database.logs) {
                database.logs = [];
            }
            database.logs.push(logData);
            saveDatabase();
            resolve(true);
        }, 50);
    });
}

// Veritabanını hemen yükle
loadDatabase();
