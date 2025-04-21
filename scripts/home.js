
document.addEventListener("DOMContentLoaded", () => {
    const user =JSON.parse(localStorage.getItem("loggetInUser"));

    const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];

    const quizList = document.getElementById("quizList");

    if(quizzes.length !==0){
        quizzes.forEach((quiz) => {
            const btn = document.createElement("button");
            btn.textContent = quiz.title;
            btn.onclick = () => {
                localStorage.setItem("selectedQuiz", JSON.stringify(quiz));
                window.location.href = "../pages/quiz.html";
            };
            quizList.appendChild(btn);
        });
    }
});


