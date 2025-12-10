function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const userMessage = input.value.trim();
    if (!userMessage) return;

    chatBox.innerHTML += `<div><b>Sen:</b> ${userMessage}</div>`;
    input.value = "";

    // Backend bağlanınca değişecek
    setTimeout(() => {
        chatBox.innerHTML += `<div><b>Bot:</b> Bu mesaj backend bağlandıktan sonra gerçek AI yanıtı olacak.</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
}
