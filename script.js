// script.js - FİNAL SÜRÜM

// 1. NEURAL NETWORK ANIMATION
const canvas = document.getElementById("neural-canvas");
if(canvas){
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    let particlesArray;
    window.addEventListener('resize', function() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; init(); });
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1; this.speedX = (Math.random() * 1) - 0.5; this.speedY = (Math.random() * 1) - 0.5;
        }
        update() {
            this.x += this.speedX; this.y += this.speedY;
            if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
            if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
        }
        draw() { ctx.fillStyle = '#1f2a36'; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill(); }
    }
    function init() { particlesArray = []; for (let i = 0; i < 100; i++) { particlesArray.push(new Particle()); } }
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update(); particlesArray[i].draw();
            for (let j = i; j < particlesArray.length; j++) {
                let dx = particlesArray[i].x - particlesArray[j].x; let dy = particlesArray[i].y - particlesArray[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) { ctx.strokeStyle = 'rgba(30, 40, 50, 0.5)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(particlesArray[i].x, particlesArray[i].y); ctx.lineTo(particlesArray[j].x, particlesArray[j].y); ctx.stroke(); }
            }
        }
        requestAnimationFrame(animate);
    }
    init(); animate();
}

// 2. CHAT WIDGET LOGIC
function toggleChat() {
    const chatWindow = document.getElementById("chat-window");
    chatWindow.classList.toggle("active");
}

function sendMessage() {
    const input = document.getElementById("chat-input-field");
    const chatBody = document.getElementById("chat-body");
    const text = input.value.trim();
    if(!text) return;

    // User Message
    const userDiv = document.createElement("div"); userDiv.className = "msg user"; userDiv.innerText = text;
    chatBody.appendChild(userDiv); input.value = ""; chatBody.scrollTop = chatBody.scrollHeight;

    // Bot Response (Simulated)
    setTimeout(() => {
        const botDiv = document.createElement("div"); botDiv.className = "msg bot";
        if(text.toLowerCase().includes("fiyat") || text.toLowerCase().includes("mail")) {
            botDiv.innerHTML = "Detaylı bilgi için: <a href='mailto:nurullahkartalai@gmail.com' style='color:#4da6ff'>nurullahkartalai@gmail.com</a>";
        } else {
            botDiv.innerText = "Projelerimiz ve API erişimi hakkında size yardımcı olabilirim. Lütfen menüden 'Projeler' kısmına göz atın.";
        }
        chatBody.appendChild(botDiv); chatBody.scrollTop = chatBody.scrollHeight;
    }, 800);
}