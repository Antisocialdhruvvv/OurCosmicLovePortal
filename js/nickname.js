document.addEventListener("DOMContentLoaded", function () {
    const nicknameDisplay = document.getElementById("nickname");
    const meaningDisplay = document.getElementById("meaning");
    const generateBtn = document.getElementById("generate-btn");
    const searchBox = document.getElementById("search-box");
    const nicknameList = document.getElementById("nickname-list");

    let nicknames = [];

    // Load nicknames from JSON
    fetch("../data/nicknames.json")
        .then(response => response.json())
        .then(data => {
            nicknames = data;
            displayNicknames(nicknames);
        })
        .catch(error => console.error("Error loading nicknames:", error));

    // Generate random nickname
    generateBtn.addEventListener("click", function () {
        if (nicknames.length > 0) {
            const randomIndex = Math.floor(Math.random() * nicknames.length);
            const selectedNickname = nicknames[randomIndex];

            nicknameDisplay.style.opacity = "0";
            meaningDisplay.style.opacity = "0";

            setTimeout(() => {
                nicknameDisplay.textContent = selectedNickname.name;
                meaningDisplay.textContent = selectedNickname.meaning;
                nicknameDisplay.style.opacity = "1";
                meaningDisplay.style.opacity = "1";
            }, 400);
        }
    });

    // Search feature
    searchBox.addEventListener("input", function () {
        const query = searchBox.value.toLowerCase();
        const filtered = nicknames.filter(n => 
            n.name.toLowerCase().includes(query) || 
            n.meaning.toLowerCase().includes(query)
        );
        displayNicknames(filtered);
    });

    // Display all nicknames in list
    function displayNicknames(nicknameArray) {
        nicknameList.innerHTML = "";
        nicknameArray.forEach(nickname => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${nickname.name}</strong>: ${nickname.meaning}`;
            nicknameList.appendChild(li);
        });
    }
});
