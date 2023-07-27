 const questions = [
    {
        question: "What does a cow say?",
        answers: [
            { text: "moo", correct: true },
            { text: "baa", correct: false },
            { text: "haha", correct: false },
            { text: "roar", correct: false },
        ]
    },
    {
        question: "What does a sheep say?",
        answers: [
            { text: "moo", correct: false },
            { text: "baa", correct: true },
            { text: "haha", correct: false },
            { text: "roar", correct: false }, 
    },
    {
        question: "What does a lion say?",
        answers: [
            { text: "moo", correct: false },
            { text: "baa", correct: false },
            { text: "haha", correct: false },
            { text: "roar", correct: true },
    },
    {
        question: "what does a horse say?",
        answers: [
            { text: "moo", correct: true },
            { text: "baa", correct: false },
            { text: "roar", correct: false },
            { text: "none of the above", correct: true },
    }

 ];

 const questionElement = document.getElementById("question");
 const answerButton = document.getElementById("answer-buttons");
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
    let currentQuestion = questions[currentQuestionIndex];
    let questionElementNo = currentQuestionIndex + 1;
    questionElement.innerHTML =questionNo + "."+ currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

