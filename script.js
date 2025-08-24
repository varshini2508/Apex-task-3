// Quiz Data
const quizData = {
    question: "Which language is used for styling web pages?",
    answers: ["HTML", "CSS", "JavaScript", "Python"],
    correct: "CSS"
};

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");

// Load Quiz
function loadQuiz() {
    questionEl.textContent = quizData.question;
    answersEl.innerHTML = "";
    quizData.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(answer);
        answersEl.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (selected === quizData.correct) {
        resultEl.textContent = "✅ Correct!";
        resultEl.style.color = "green";
    } else {
        resultEl.textContent = "❌ Wrong! Correct answer: " + quizData.correct;
        resultEl.style.color = "red";
    }
}

loadQuiz();

// Fetch Joke from API
document.getElementById("fetch-joke").addEventListener("click", async () => {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    document.getElementById("joke").textContent = `${data.setup} - ${data.punchline}`;
});
