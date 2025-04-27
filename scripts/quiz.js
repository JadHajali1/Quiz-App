
const nextBtn = document.querySelector('.next-btn');

let questionCount = 0;

nextBtn.onclick = () => {
    questionCount++;
    displayQuestion(questionCount)
}

function displayQuestion(index){
    const questionText = document.querySelector('.question');
    questionText.textContent = `${quizzes[index].num}. ${quizzes[index].quizzes}`;
}