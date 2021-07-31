const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');

const randomQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);

function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    randomQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
};

function setNextQuestion() {

};

function selectAnswer() {

};

/* Game questions with 4 total choices */
let questions = [
    {
        question: 'What year did the Raiders win their last Super Bowl?',
        choice1: '2002', 
        choice2: '1993',
        choice3: '1983',
        choice4: '1972',
    },
    {
        question: "What was Jack Tatum's nickname?",
        choice1: 'Killer Croc',
        choice2: 'The Assassin',
        choice3: 'The Jackhammer',
        choice4: 'Killer Bee',
    },
    {
        question: "Which 'Hall of Fame' Raider wore the number 00",
        choice1: 'Charles Woodson', 
        choice2: 'Kenny Stabler',
        choice3: 'Mike Haynes',
        choice4: 'Jim Otto',
    },
    {
        question: 'Which Raider became a HollyWood star?',
        choice1: 'Carl Weathers', 
        choice2: 'Howie Long',
        choice3: 'Lyle Alzado',
        choice4: 'Bo Jackson',
    },
    {
        question: 'Who is Al Davis?',
        choice1: 'Ex owner', 
        choice2: 'Current owner',
        choice3: "QB from the late 70's",
        choice4: 'Current star Wide Receiver',
    }
];