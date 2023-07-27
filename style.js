 const questions = [
    {
        question: "What does CSS satnd for?",
        answers: [
            { text: "Cascading style sheets", correct: true },
            { text: "Color sheets and style", correct: false },
            { text: "Color style sheets", correct: false },
            { text: "Cascading sheets with style", correct: false },
        ]
    },
    {
        question: "What is considered the foundation of a webpage?",
        answers: [
            { text: "CSS", correct: false },
            { text: "HTML", correct: true },
            { text: "Java", correct: false },
            { text: "JavaScript", correct: false }, 
    },
    {
        question: "What does JavaScript do?",
        answers: [
            { text: "It styles the webpage.", correct: false },
            { text: "Its the foundation of a webpage.", correct: false },
            { text: "Its a type of coffee.", correct: false },
            { text: "It builds an interactive website.", correct: true },
    },
    {
        question: "What is the most important thing to remember while takng a coding bootcamp?",
        answers: [
            { text: "There are no stupid questins!", correct: false },
            { text: "Debugg!", correct: false },
            { text: "Dont be afraid to beark things!", correct: false },
            { text: "All of the above", correct: true },
    }

 ];

 const questionElement = document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function,startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionElementNo = currentQuestionIndex + 1;
    questionElement.innerHTML =questionNo + "."+ currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const incorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = 'You scored ${score} out of ${questions.length}!';
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
    }
});

startQuiz();