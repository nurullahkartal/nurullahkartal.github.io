/* script.js - v2.3 (Final: Chatbot ve DB Kontrollü Portal Giriş Mantığı) */

// --- 1. NEURAL CANVAS SETUP (Arka Plan Efekti) ---
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('neural-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const maxParticles = 50;

    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.radius = Math.random() * 2 + 1;
            this.vx = Math.random() * 0.5 - 0.25;
            this.vy = Math.random() * 0.5 - 0.25;
        }

        draw() {
            ctx.fillStyle = '#00ff88';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx = -this.vx;
            if (this.y < 0 || this.y > height) this.vy = -this.vy;
        }
    }

    function createParticles() {
        for (let i = 0; i < maxParticles; i++) {
            particles.push(new Particle());
        }
    }

    function connectParticles() {
        let opacityValue = 1;
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                let distance = Math.hypot(particles[a].x - particles[b].x, particles[a].y - particles[b].y);
                
                if (distance < 100) {
                    opacityValue = 1 - (distance / 100);
                    ctx.strokeStyle = `rgba(0, 255, 136, ${opacityValue})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        
        connectParticles();
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    createParticles();
    animate();
});


// --- 2. CHATBOT MANTIĞI ---
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    if (!chatWindow) return; 
    
    if (chatWindow.style.display === 'flex') {
        chatWindow.style.display = 'none';
    } else {
        chatWindow.style.display = 'flex';
        const body = document.getElementById('chat-body');
        if(body.children.length < 2) {
            showOptions();
        }
    }
}

function showOptions() {
    const chatBody = document.getElementById('chat-body');
    if (!chatBody) return;
    
    const optionsDiv = document.createElement('div');
    optionsDiv.style.padding = '10px';
    optionsDiv.className = 'msg bot';

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
    if (!chatBody) return;
    
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
    const chatBody = document.getElementById('chat-body');
    if (!input || !chatBody) return;
    
    const text = input.value.trim();
    if (!text) return;

    const userMsg = document.createElement('div');
    userMsg.className = 'msg user';
    userMsg.innerText = text;
    chatBody.appendChild(userMsg);
    input.value = '';

    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'msg bot';
        botMsg.innerText = "Mesajını aldım! En kısa sürede döneceğim. (Bu bir demo bottur)";
        chatBody.appendChild(botMsg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
}


// --- 3. PORTAL GİRİŞ MANTIĞI (DB Kontrollü YÖNLENDİRME) ---
async function checkLogin() { // 🛑 ASYNC YAPILDI
    const codeInput = document.getElementById('access-code');
    const feedback = document.getElementById('login-feedback');
    
    if (!codeInput || !feedback) return; 
    
    const code = codeInput.value;
    
    // 🛑 VERİTABANI KONTROLÜ BAŞLANGICI
    let isAllowed = false;
    
    try {
        // Firebase.js'ten getDocument fonksiyonu ile şifreler çekilir
        const accessDoc = await getDocument('settings', 'access'); 

        if (accessDoc && accessDoc.allowed_passwords.includes(code)) {
            isAllowed = true;
        }
    } catch (error) {
        console.error("Veritabanı bağlantı hatası:", error);
        feedback.style.color = 'red';
        feedback.innerHTML = '<i class="fas fa-times-circle"></i> Sistem Erişilemez! (DB Hatası)';
        return; 
    }
    
    // GÜVENLİK KODU KONTROLÜ
    if (isAllowed) {
        feedback.style.color = '#00ff88';
        feedback.innerHTML = '<i class="fas fa-check-circle"></i> Erişim Başarılı! Veritabanı Onayı Alındı. Yönlendiriliyorsunuz...';
        
        // KRİTİK ADIM: Oturumu başlat
        sessionStorage.setItem('nk_access_granted', 'true');
        
        // BAŞARILI YÖNLENDİRME
        setTimeout(() => {
            window.location.href = 'dashboard.html'; 
        }, 1500); 
        
    } else {
        feedback.style.color = 'red';
        feedback.innerHTML = '<i class="fas fa-times-circle"></i> Hatalı Erişim Kodu! (DB Reddi)';
        
        setTimeout(() => {
             feedback.innerHTML = '';
             codeInput.value = ''; 
        }, 3000);
    }
}
