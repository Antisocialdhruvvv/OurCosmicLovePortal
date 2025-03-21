document.addEventListener("DOMContentLoaded", () => {
    const questions = [
        { question: "Do you both share the same hobbies?", options: ["Yes", "No"] },
        { question: "How often do you talk to each other?", options: ["Daily", "Weekly", "Rarely"] },
        { question: "Do you trust each other?", options: ["Yes", "Sometimes", "No"] },
        { question: "How do you solve conflicts?", options: ["By talking", "Ignoring", "Fighting"] }
    ];

    const quizContainer = document.getElementById("quiz-questions");
    const quizForm = document.getElementById("quiz-form");
    const quizResult = document.getElementById("quiz-result");

    questions.forEach((q, index) => {
        const div = document.createElement("div");
        div.innerHTML = `<p>${q.question}</p>`;
        q.options.forEach(option => {
            div.innerHTML += `<label>
                <input type="radio" name="q${index}" value="${option}" required> ${option}
            </label><br>`;
        });
        quizContainer.appendChild(div);
    });

    quizForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let score = 0;
        const answers = quizForm.elements;
        
        for (let i = 0; i < questions.length; i++) {
            if (answers[`q${i}`].value === "Yes" || answers[`q${i}`].value === "Daily" || answers[`q${i}`].value === "By talking") {
                score += 25;
            }
        }
        document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("love-meter-quiz");
    const resultContainer = document.getElementById("love-result");
    const loveScoreDisplay = document.getElementById("love-score");

    quizForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        let score = 0;
        const formData = new FormData(quizForm);
        formData.forEach((value) => {
            score += parseInt(value);
        });

        const loveScore = Math.min(100, Math.max(30, score));  
        loveScoreDisplay.textContent = `${loveScore}%`;
        resultContainer.style.display = "block";
    });
});

        
        quizResult.innerText = `Your Love Compatibility Score: ${score}% 💖`;
    });
});
