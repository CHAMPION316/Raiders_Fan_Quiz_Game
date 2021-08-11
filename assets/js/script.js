/*...........................................Variables that target elements in the HTML file*/
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const scoreButton = document.getElementById('score-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreTracker = document.getElementById('score-tracker');
const scoreUpElement = document.getElementById('score-up');

/* changeable variables */
let randomQuestions, currentQuestionIndex;

/*..............................................button clicks for (start,next, and score) buttons*/
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
});
scoreButton.addEventListener('click', scoreList);


/*........................................Function for start of quiz with quiz questions included*/
function startGame() {
  startButton.classList.add('hide');
  randomQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  scoreTracker.classList.remove('hide');
  setNextQuestion();
  scoreUpElement.textContent = 0;
  scoreButton.classList.add('hide');
};

/*...........................................function that randomizes question order in quiz*/
function setNextQuestion() {
  resetState();
  showQuestion(randomQuestions[currentQuestionIndex]);
};

/*............................................................ Adds question to element */
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
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
};

/*.........................................Checks if selected button is part of the correct dataset*/
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  
  processResults(correct);
  setStatusClass(document.body, correct);

  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })

  if (randomQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
    scoreButton.innerText;
    scoreButton.classList.remove('hide');
  }
};

/*.........................................function that determines 'right' and 'wrong' answers*/
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
};

/*...............................function that clears the highlighted 'right' and 'wrong' answers*/
function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
};


/*................................Object variable with game questions with 4 total choices*/
let questions = [{
    question: 'What year did the Raiders win their last Super Bowl?',
    answers: [{
        text: '2003',
        correct: true
      },
      {
        text: '1993',
        correct: false
      },
      {
        text: '1983',
        correct: false
      },
      {
        text: '1972',
        correct: false
      },
    ]
  },
  {
    question: "What was Jack Tatum's nickname?",
    answers: [{
        text: 'Killer Croc',
        correct: false
      },
      {
        text: 'The Assassin',
        correct: true
      },
      {
        text: 'The Jackhammer',
        correct: false
      },
      {
        text: 'Killer Bee',
        correct: false
      },
    ]
  },
  {
    question: "Which 'Hall of Fame' Raider wore the number 00",
    answers: [{
        text: 'Charles Woodson',
        correct: false
      },
      {
        text: 'Kenny Stabler',
        correct: false
      },
      {
        text: 'Mike Haynes',
        correct: false
      },
      {
        text: 'Jim Otto',
        correct: true
      },

    ]
  },
  {
    question: 'Which Raider became a HollyWood star?',
    answers: [{
        text: 'Carl Weathers',
        correct: true
      },
      {
        text: 'Howie Long',
        correct: false
      },
      {
        text: 'Lyle Alzado',
        correct: false
      },
      {
        text: 'Bo Jackson',
        correct: false
      },
    ]
  },
  {
    question: 'Who is Al Davis?',
    answers: [{
        text: 'Current star Wie Receiver',
        correct: false
      },
      {
        text: 'Current Owner',
        correct: false
      },
      {
        text: "QB from the late 70's",
        correct: false
      },
      {
        text: 'Ex Owner',
        correct: true
      },
    ]
  },
];

/*...........................................Score incrementor for answering correctly and incorrect*/
function processResults(isCorrect) {
  if (!isCorrect) {
    return;
  }
  
  const scoreUp = parseInt(scoreUpElement.textContent, 10) || 0;

  scoreUpElement.textContent = scoreUp + 100;
};


/* Function that creates a pop-up showing your placement as a fan within the score system*/
function formSubmission() {
  firstName.innerText
  if (confirm('Do you want to submit')) {
    alert(`
    (This is where you rank as a fan ${firstName.value})\n 
    100 - 500 : You must be a Chiefs fan\n
    600 - 1000 : Are you sure you watch football?\n 
    1100 - 1500 : You lied about being a hardcore fan\n 
    1600 - 2000 : Alright you know something\n 
    2100 - 2500 : I see you're a veteran with this team\n 
    2600 - 3000 : Well look at you, you're a legendary fan`)
  } else {
    return false;
  };


};
