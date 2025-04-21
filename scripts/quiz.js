
document.addEventListener("DOMContentLoaded", () => {
    const user =JSON.parse(localStorage.getItem("loggedInUser"));
    const quiz = JSON.parse(localStorage.getItem("selectedQuiz"));

    document.getElementById("quizTitle").textContent = quiz.title;

    const questionText = document.getElementById("questionText");
    const optionDiv = document.getElementById("options");
    const nextBtn = document.getElementById("nextBtn");

    let current = 0;
    let score = 0;

    function showQuestion(){
        nextBtn.disabled = true;
        const question = quiz.questions[current];

        questionText.textContent = question.question;
        optionDiv.innerHTML = "";

        question.options.array.forEach((opt) => {
            const btn = document.createElement("button");
            btn.textContent = opt;
            btn.classList.add("option-btn");
            btn.onclick = () =>{
                Array.from(optionDiv.children).forEach(b => nextBtn.disabled = true);

                if(opt === question.answer){
                    btn.style.backgroundColor = "green";
                    score+= 5;
                }else{
                    btn.style.backgroundColor = "red";
                }
                nextBtn.disabled = false;
            };
            optionDiv.appendChild(btn);
        });
    }

    nextBtn.onclick = () => {
        current++;
        if(current < quiz.questions.length){
            showQuestion();
        }else{
            showResult();
        }
    };

    function showResult(){
        document.querySelector(".quiz-container").innerHTML = `
        <h2>Quiz Compeleted!</h2>
        <p>Your Score: ${score} / ${quiz.questions.length}</p>
        <button onclick="window.location.href='../pages/home.html'">Home</button>`;
    }
    showQuestion();
});