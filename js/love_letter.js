document.addEventListener("DOMContentLoaded", function () {
  const letterInput = document.getElementById("letterInput");
  const encryptButton = document.getElementById("encryptButton");
  const decryptButton = document.getElementById("decryptButton");
  const displayLetter = document.getElementById("displayLetter");
  const secretKey = "cosmiclove"; // Basic encryption key (you can make this dynamic)

  function encrypt(text) {
    return btoa(unescape(encodeURIComponent(text))); // Base64 Encoding
  }

  function decrypt(text) {
    return decodeURIComponent(escape(atob(text))); // Base64 Decoding
  }

  encryptButton.addEventListener("click", () => {
    if (letterInput.value.trim() !== "") {
      const encryptedText = encrypt(letterInput.value);
      localStorage.setItem("secretLoveLetter", encryptedText);
      displayLetter.innerHTML = "🔒 Letter Encrypted! Only your lover can unlock it!";
      letterInput.value = "";
    }
  });

  decryptButton.addEventListener("click", () => {
    const encryptedText = localStorage.getItem("secretLoveLetter");
    if (encryptedText) {
      const decryptedText = decrypt(encryptedText);
      displayLetter.innerHTML = "";
      typeWriterEffect(decryptedText, displayLetter);
    } else {
      displayLetter.innerHTML = "❌ No secret letter found!";
    }
  });

  function typeWriterEffect(text, element, speed = 50) {
    let i = 0;
    element.innerHTML = "";
    function typing() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      }
    }
    typing();
  }
});
