/* tracker.js - Ziyaretçi Takip Sistemi */
const BOT_TOKEN = "8581211195:AAHrd09lOZFr3_BKpuNyFcC2UP9Eq1PbGeo";
const CHAT_ID = "@acik_veri"; 

async function notifyTelegram() {
    // Session Storage ile spam önleme (Sayfa yenileyince tekrar atmaz)
    if (sessionStorage.getItem('notified_page_' + window.location.pathname)) return;

    try {
        const ipResponse = await fetch('https://ipapi.co/json/');
        const data = await ipResponse.json();
        const now = new Date().toLocaleString('tr-TR');

        const message = `🚨 *YENİ ZİYARETÇİ!*\n\n` +
                        `📂 *Sayfa:* ${window.location.pathname}\n` +
                        `🕒 *Saat:* ${now}\n` +
                        `🌍 *Konum:* ${data.city}, ${data.country_name}\n` +
                        `🖥 *IP:* \`${data.ip}\`\n` +
                        `📱 *Cihaz:* ${navigator.userAgent}`;

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

        console.log("Raporlandı. 🕵️‍♂️");
        sessionStorage.setItem('notified_page_' + window.location.pathname, 'true');

    } catch (error) {
        console.error("Tracker hatası:", error);
    }
}
window.onload = notifyTelegram;
