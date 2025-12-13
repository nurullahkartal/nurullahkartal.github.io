/* script.js - v2.0 UI Logic */

// --- CHATBOT MANTIĞI ---
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    if (chatWindow.style.display === 'flex') {
        chatWindow.style.display = 'none';
    } else {
        chatWindow.style.display = 'flex';
        const body = document.getElementById('chat-body');
        // Eğer sohbet boşsa seçenekleri göster
        if(body.children.length < 2) {
            showOptions();
        }
    }
}

function showOptions() {
    const chatBody = document.getElementById('chat-body');
    const optionsDiv = document.createElement('div');
    optionsDiv.style.padding = '10px';
    
    optionsDiv.innerHTML = `
        <div style="color:#888; font-size:0.8rem; margin-bottom:5px;">Hızlı Menü:</div>
        <button onclick="botReply('projeler')" style="margin:5px; padding:5px 10px; border:1px solid #00ff88; background:none; color:#00ff88; border-radius:15px; cursor:pointer;">🚀 Projeler</button>
        <button onclick="botReply('fiyat')" style="margin:5px; padding:5px 10px; border:1px solid #00ff88; background:none; color:#00ff88; border-radius:15px; cursor:pointer;">💰 Fiyat</button>
        <button onclick="botReply('iletisim')" style="margin:5px; padding:5px 10px; border:1px solid #00ff88; background:none; color:#00ff88; border-radius:15px; cursor:pointer;">📞 İletişim</button>
    `;
    chatBody.appendChild(optionsDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function botReply(type) {
    const chatBody = document.getElementById('chat-body');
    let reply = "";

    if (type === 'projeler') reply = "Yapay Zeka, Lojistik ERP ve Finans Botları geliştiriyoruz. 'Çözümler' sayfasından detaylara bakabilirsin!";
    else if (type === 'fiyat') reply = "Projeye göre fiyat değişiyor. İletişim sayfasından bana yazarsan net konuşabiliriz.";
    else if (type === 'iletisim') reply = "Bana nurullahkartalai@gmail.com adresinden ulaşabilirsin.";

    const userMsg = document.createElement('div');
    userMsg.className = 'msg user';
    userMsg.innerText = type.toUpperCase();
    chatBody.appendChild(userMsg);

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

    const chatBody = document.getElementById('chat-body');
    const userMsg = document.createElement('div');
    userMsg.className = 'msg user';
    userMsg.innerText = text;
    chatBody.appendChild(userMsg);
    input.value = '';

    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'msg bot';
        botMsg.innerText = "Mesajını aldım! En kısa sürede döneceğim.";
        chatBody.appendChild(botMsg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
}

// --- PORTAL GİRİŞ (Simülasyon) ---
function checkLogin() {
    const code = document.getElementById('access-code').value;
    const feedback = document.getElementById('login-feedback');
    
    if (code === '1453' || code === 'admin') {
        feedback.style.color = '#00ff88';
        feedback.innerText = 'Giriş Başarılı! Yönlendiriliyorsunuz...';
        // Gerçekte dashboard.html olsaydı oraya giderdi
        setTimeout(() => alert("Hoş geldin Yönetici!"), 1000);
    } else {
        feedback.style.color = 'red';
        feedback.innerText = 'Hatalı Erişim Kodu!';
    }
}
