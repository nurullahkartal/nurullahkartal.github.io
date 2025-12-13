/* tracker.js - Ziyaretçi Takip Sistemi (NURULLAH KARTAL ÖZEL) */

// SENİN VERDİĞİN BİLGİLER
const BOT_TOKEN = "8581211195:AAHrd09lOZFr3_BKpuNyFcC2UP9Eq1PbGeo";
const CHAT_ID = "@acik_veri"; // Mesajlar bu kanala gidecek

async function notifyTelegram() {
    // Aynı kişi sayfayı yenilediğinde sürekli bildirim gelmesin diye basit kontrol (Session Storage)
    if (sessionStorage.getItem('notified')) return;

    try {
        // 1. Ziyaretçinin IP ve Konumunu Bul
        const ipResponse = await fetch('https://ipapi.co/json/');
        const data = await ipResponse.json();

        // 2. Tarih ve Saat
        const now = new Date().toLocaleString('tr-TR');

        // 3. Mesajı Hazırla
        const message = `🚨 *YENİ ZİYARETÇİ TESPİT EDİLDİ!*\n\n` +
                        `📂 *Sayfa:* ${window.location.pathname}\n` +
                        `🕒 *Saat:* ${now}\n` +
                        `🌍 *Konum:* ${data.city}, ${data.country_name}\n` +
                        `🖥 *IP:* \`${data.ip}\`\n` +
                        `📱 *Cihaz:* ${navigator.userAgent}`;

        // 4. Telegram'a Gönder
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
        await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            })
        });

        console.log("Ziyaretçi raporlandı. 🕵️‍♂️");
        
        // Bildirim gönderildi olarak işaretle (Tarayıcı kapanana kadar tekrar atmaz)
        sessionStorage.setItem('notified', 'true');

    } catch (error) {
        console.error("Takip hatası:", error);
    }
}

// Sayfa yüklenince çalıştır
window.onload = notifyTelegram;
