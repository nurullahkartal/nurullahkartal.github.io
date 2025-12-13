/* NKartal Akıllı Script v5.1 */

// --- CHATBOT MANTIĞI ---
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    if (chatWindow.style.display === 'flex') {
        chatWindow.style.display = 'none';
    } else {
        chatWindow.style.display = 'flex';
        // Eğer ilk kez açılıyorsa menüyü göster
        const body = document.getElementById('chat-body');
        if(body.children.length < 2) {
            showOptions();
        }
    }
}

function showOptions() {
    const chatBody = document.getElementById('chat-body');
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'chat-options';
    optionsDiv.style.padding = '10px';
    
    // Hazır Butonlar
    optionsDiv.innerHTML = `
        <div style="color:#888; font-size:0.8rem; margin-bottom:5px;">Size nasıl yardımcı olabilirim?</div>
        <button onclick="botReply('projeler')">🚀 Projeleriniz neler?</button>
        <button onclick="botReply('fiyat')">💰 Fiyat teklifi al</button>
        <button onclick="botReply('iletisim')">📞 İletişim bilgileri</button>
        <button onclick="botReply('portal')">🔐 Portala nasıl girerim?</button>
    `;
    chatBody.appendChild(optionsDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function botReply(type) {
    const chatBody = document.getElementById('chat-body');
    let reply = "";

    // Kullanıcı seçimi ekrana yaz
    // (Opsiyonel: Seçilen butonu göstermek yerine direkt cevap verebiliriz, 
    // ama akış görünsün diye kullanıcı mesajı ekleyelim)
    
    if (type === 'projeler') reply = "Şu an Lojistik ERP, Sosyal Medya Botları ve Veri Analizi üzerine çalışıyoruz. 'Çözümler' sayfasından detaylara bakabilirsin!";
    else if (type === 'fiyat') reply = "Projeye göre fiyat değişiyor. İletişim sayfasından veya nurullahkartalai@gmail.com adresinden bana yazarsan net konuşabiliriz.";
    else if (type === 'iletisim') reply = "Bana e-posta (nurullahkartalai@gmail.com) veya sosyal medya üzerinden ulaşabilirsin. İletişim sayfasında form var.";
    else if (type === 'portal') reply = "Portal sadece müşterilerim içindir. Eğer müşterim isen şifreni e-posta ile almış olmalısın.";

    // Bot Cevabını Ekle
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'msg bot';
        botMsg.innerText = reply;
        chatBody.appendChild(botMsg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 500);
}

function sendMessage() {
    const input = document.getElementById('chat-input-field');
    const text = input.value.trim();
    if (!text) return;

    // Kullanıcı Mesajı
    const chatBody = document.getElementById('chat-body');
    const userMsg = document.createElement('div');
    userMsg.className = 'msg user';
    userMsg.innerText = text;
    chatBody.appendChild(userMsg);
    input.value = '';

    // Basit Cevaplama
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'msg bot';
        
        if(text.toLowerCase().includes('merhaba')) botMsg.innerText = "Merhaba! Hoş geldin.";
        else if(text.toLowerCase().includes('fiyat')) botMsg.innerText = "Fiyat teklifi için lütfen iletişim sayfasını kullanın.";
        else botMsg.innerText = "Şu an bunu anlayamadım ama aşağıdaki butonlardan seçim yapabilirsin.";
        
        chatBody.appendChild(botMsg);
        chatBody.scrollTop = chatBody.scrollHeight;
        
        // Tekrar seçenekleri göster
        if(!text.toLowerCase().includes('merhaba')) showOptions();
        
    }, 1000);
}


// --- PORTAL GİRİŞ KONTROLÜ ---
function checkLogin() {
    const code = document.getElementById('access-code').value;
    const feedback = document.getElementById('login-feedback');
    
    // Basit şifre kontrolü (Gerçek backend olmadığı için)
    if (code === '1453' || code === 'admin' || code === 'nkartal') {
        feedback.style.color = 'var(--primary)';
        feedback.innerText = 'Giriş Başarılı! Yönlendiriliyorsunuz...';
        setTimeout(() => {
            window.location.href = "dashboard.html"; // Yönlendirme
        }, 1500);
    } else {
        feedback.style.color = 'red';
        feedback.innerText = 'Hatalı Erişim Kodu!';
        // Efekt: Kutuyu salla
        const box = document.querySelector('.login-box');
        box.style.transform = 'translateX(10px)';
        setTimeout(() => box.style.transform = 'translateX(0)', 100);
    }
}
