const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let randomQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);

function startGame() {
    startButton.classList.add('hide');
    randomQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
};

function setNextQuestion() {
    resetState()
    showQuestion(randomQuestions[currentQuestionIndex]);
};

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button)
    })
};

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
};

/* Checks if selected button is part of the correct dataset */
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
};

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
};

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
};

/* Game questions with 4 total choices */
let questions = [
    {
        question: 'What year did the Raiders win their last Super Bowl?',
        answers: [
            { text: '2002', correct: true },
            { text: '1993', correct: false },
            { text: '1983', correct: false },
            { text: '1972', correct: false },
        ]
    },
    {
        question: "What was Jack Tatum's nickname?",
        answers: [
            { text: 'Killer Croc', correct: false },
            { text: 'The Assassin', correct: true },
            { text: 'The Jackhammer', correct: false },
            { text: 'Killer Bee', correct: false },
        ]
    },
    {
        question: "Which 'Hall of Fame' Raider wore the number 00",
        answers: [
            { text: 'Charles Woodson', correct: false },
            { text: 'Kenny Stabler', correct: false },
            { text: 'Mike Haynes' , correct: false },
            { text: 'Jim Otto', correct: true },

        ]
    },
    {
        question: 'Which Raider became a HollyWood star?',
        answers: [
            { text: 'Carl Weathers', correct: true },
            { text: 'Howie Long', correct: false },
            { text: 'Lyle Alzado', correct: false },
            { text: 'Bo Jackson', correct: false },
        ]
    },
    {
        question: 'Who is Al Davis?',
        answers: [
            { text: 'Current star Wie Receiver', correct: false},
            { text: 'Current Owner', correct: false },
            { text: "QB from the late 70's", correct: false },
            { text: 'Ex Owner', correct: true },
        ]
    },
];