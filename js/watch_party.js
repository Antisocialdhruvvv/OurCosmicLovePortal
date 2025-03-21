document.addEventListener("DOMContentLoaded", () => {
    const chatInput = document.getElementById("chat-input");
    const chatMessages = document.getElementById("chat-messages");

    function sendMessage() {
        if (chatInput.value.trim() !== "") {
            const message = document.createElement("p");
            message.textContent = chatInput.value;
            chatMessages.appendChild(message);
            chatInput.value = "";
        }
    }

    chatInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") sendMessage();
    });
});
