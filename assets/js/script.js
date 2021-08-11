/*.............................................Variables that target elements in the DOM */
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const scoreButton = document.getElementById('score-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreTracker = document.getElementById('score-tracker');
const scoreUpElement = document.getElementById('score-up');
var firstName = document.getElementById('firstname');
var submitForm = document.getElementById('submit-form');

let randomQuestions, currentQuestionIndex;

/*............................Buttons that will be added to functions when needed*/
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
});

/*..........................................................Start game function with button*/
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

/*...........function that presents questions in a random order with no repeating current questions*/
function setNextQuestion() {
  resetState();
  showQuestion(randomQuestions[currentQuestionIndex]);
};

/*.......................function that allows the selection of questions within the DOM by clicking*/
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

/*.........................function that clears the selection of questions with a next button*/
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
};

/*...................................Checks if selected button is part of the correct dataset */
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  
  processResults(correct);
  setStatusClass(document.body, correct);

  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })

  /* When all questions are used 2 buttons will present the next options */
  if (randomQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
    scoreButton.innerText;
    scoreButton.classList.remove('hide');
  }
};

/* function that determines correct and incorrect answers with true and fales */
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
};

/*.........function that clears correct and incorrect options to present the next set of options*/
function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
};


/*...................................Game questions with 4 total choices, 30 questions total*/
let questions = [{
    question: 'What year did the Raiders win their last Super Bowl?',
    answers: [{
        text: '2003',
        correct: false
      },
      {
        text: '1993',
        correct: false
      },
      {
        text: '1983',
        correct: true
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
  {
    question: 'This Raider is still the last defensive player to win the heisman trophy in college',
    answers: [{
        text: 'Barry Bonds',
        correct: false
      },
      {
        text: 'Fabian Washington',
        correct: false
      },
      {
        text: 'Charles Woodson',
        correct: true
      },
      {
        text: 'Stuart Schweigert',
        correct: false
      },
    ]
  },
  {
    question: 'Who did the Raiders draft in the first round of the 2018 draft?',
    answers: [{
        text: 'Kolton Miller',
        correct: true
      },
      {
        text: 'Josh Jacobs',
        correct: false
      },
      {
        text: 'Michael Jordan',
        correct: false
      },
      {
        text: 'Darren McFadden',
        correct: false
      },
    ]
  },
  {
    question: 'How many Super Bowls do the Raiders have?',
    answers: [{
        text: '6',
        correct: false
      },
      {
        text: '3',
        correct: true
      },
      {
        text: '1',
        correct: false
      },
      {
        text: '4',
        correct: false
      },
    ]
  },
  {
    question: 'What year were the Raiders established?',
    answers: [{
        text: '1998',
        correct: false
      },
      {
        text: '1985',
        correct: false
      },
      {
        text: '1973',
        correct: false
      },
      {
        text: '1960',
        correct: true
      },
    ]
  },
  {
    question: 'Who is the current Raiders coach in 2021 that was also their coach between 98-01',
    answers: [{
        text: 'John Madden',
        correct: false
      },
      {
        text: 'Jon Gruden',
        correct: true
      },
      {
        text: 'Jeff Fisher',
        correct: false
      },
      {
        text: 'Mike Lombardi',
        correct: false
      },
    ]
  },
  {
    question: 'Last Quaterback to take the Raiders to the Super Bowl?',
    answers: [{
        text: 'Rich Gannon',
        correct: true
      },
      {
        text: 'Tom Brady',
        correct: false
      },
      {
        text: 'Derek Carr',
        correct: false
      },
      {
        text: 'John Elway',
        correct: false
      },
    ]
  },
  {
    question: 'This hall of fame Raider has an award named after him for best college WR',
    answers: [{
        text: 'Fred Biletnikoff',
        correct: true
      },
      {
        text: 'Vince Lombardi',
        correct: false
      },
      {
        text: 'Bill Belichick',
        correct: false
      },
      {
        text: 'Barry Sanders',
        correct: false
      },
    ]
  },
  {
    question: 'Considered the Raiders biggest draft bust ever',
    answers: [{
        text: 'Robert Gallery',
        correct: false
      },
      {
        text: 'Michael Huff',
        correct: false
      },
      {
        text: 'Jamarcus Russell',
        correct: true
      },
      {
        text: 'Ryan Leaf',
        correct: false
      },
    ]
  },
  {
    question: 'This Raider played both football and baseball and excelled at both',
    answers: [{
        text: 'Charlie Garner',
        correct: false
      },
      {
        text: 'Bo Jackson',
        correct: true
      },
      {
        text: 'Marcus Allen',
        correct: false
      },
      {
        text: 'Deion Sanders',
        correct: false
      },
    ]
  },
  {
    question: 'In 2020 the Raiders moved to a new city with a brand new stadium. What city?',
    answers: [{
        text: 'Oakland',
        correct: false
      },
      {
        text: 'Phoenix',
        correct: false
      },
      {
        text: 'Los Angeles',
        correct: false
      },
      {
        text: 'Las Vegas',
        correct: true
      },
    ]
  },
  {
    question: 'How many Super Bowls did Tom Flores win for the Raiders as Head Coach?',
    answers: [{
        text: '3',
        correct: false
      },
      {
        text: '1',
        correct: false
      },
      {
        text: '0',
        correct: false
      },
      {
        text: '2',
        correct: true
      },
    ]
  },
  {
    question: 'Raiders WR that has the record for most receiving yards',
    answers: [{
        text: 'Tim Brown',
        correct: true
      },
      {
        text: 'Jerry Rice',
        correct: false
      },
      {
        text: 'Fred Biletnikoff',
        correct: false
      },
      {
        text: 'Cliff Branch',
        correct: false
      },
    ]
  },
  {
    question: 'Which Raider leads the franchise in rushing yards',
    answers: [{
        text: 'Curtis Martin',
        correct: false
      },
      {
        text: 'Michael Bush',
        correct: false
      },
      {
        text: 'Marcus Allen',
        correct: true
      },
      {
        text: 'LaMont Jordan',
        correct: false
      },
    ]
  },
  {
    question: 'What year did the Raiders last make the playoffs?',
    answers: [{
        text: '2020',
        correct: false
      },
      {
        text: '2016',
        correct: true
      },
      {
        text: '2010',
        correct: false
      },
      {
        text: '2003',
        correct: false
      },
    ]
  },
  {
    question: 'What position did Gene Upshaw play?',
    answers: [{
        text: 'Left Guard',
        correct: true
      },
      {
        text: 'Right Guard',
        correct: false
      },
      {
        text: 'Right Tackle',
        correct: false
      },
      {
        text: 'Center',
        correct: false
      },
    ]
  },
  {
    question: 'How many seasons did Howie Long play in the NFL?',
    answers: [{
        text: '5',
        correct: false
      },
      {
        text: '8',
        correct: false
      },
      {
        text: '10',
        correct: false
      },
      {
        text: '13',
        correct: true
      },
    ]
  },
  {
    question: 'Ted Hendricks nickname was?',
    answers: [{
        text: 'Lightning',
        correct: false
      },
      {
        text: 'The Mad Stork',
        correct: true
      },
      {
        text: 'The Ghost',
        correct: false
      },
      {
        text: 'Big foot',
        correct: false
      },
    ]
  },
  {
    question: "Ken Stabler's nickname was?",
    answers: [{
        text: 'Houdini',
        correct: false
      },
      {
        text: 'Mr. Clutch',
        correct: false
      },
      {
        text: 'The Equalizer',
        correct: false
      },
      {
        text: 'The Snake',
        correct: true
      },
    ]
  },
  {
    question: "Which Raider was nick named 'The Ghost'",
    answers: [{
        text: 'Jim Otto',
        correct: false
      },
      {
        text: 'Art Shell',
        correct: false
      },
      {
        text: 'Phil Villapiano',
        correct: false
      },
      {
        text: 'Dave Casper',
        correct: true
      },
    ]
  },
  {
    question: 'Who has been the Raiders starting QB from 2014 - current',
    answers: [{
        text: 'Derek Carr',
        correct: true
      },
      {
        text: 'Steve McNair',
        correct: false
      },
      {
        text: 'Marcus Mariota',
        correct: false
      },
      {
        text: 'Chris Carr',
        correct: false
      },
    ]
  },
  {
    question: 'What ex Raider did the Raiders trade away for 3 first round picks in 2018',
    answers: [{
        text: 'Gabe Jackson',
        correct: false
      },
      {
        text: 'Rodney Hudson',
        correct: false
      },
      {
        text: 'Khalil Mack',
        correct: true
      },
      {
        text: 'Robert Gallery',
        correct: false
      },
    ]
  },
  {
    question: 'To what team was head coach Jon Gruden traded to in his first tenure?',
    answers: [{
        text: 'Packers',
        correct: false
      },
      {
        text: 'Buccaneers',
        correct: true
      },
      {
        text: 'Giants',
        correct: false
      },
      {
        text: 'Jaguars',
        correct: false
      },
    ]
  },
  {
    question: "How many Raiders are in the 'Hall of Fame'?",
    answers: [{
        text: '26',
        correct: true
      },
      {
        text: '10',
        correct: false
      },
      {
        text: '15',
        correct: false
      },
      {
        text: '20',
        correct: false
      },
    ]
  },
  {
    question: 'Which Raider has their birthday on the 4th of July?',
    answers: [{
        text: 'Al Davis',
        correct: true
      },
      {
        text: 'John Madden',
        correct: false
      },
      {
        text: 'Cliff Branch',
        correct: false
      },
      {
        text: 'George Atkinson',
        correct: false
      },
    ]
  },
  {
    question: 'Which Raider had a stutter problem?',
    answers: [{
        text: 'Lincoln Kennedy',
        correct: false
      },
      {
        text: 'Art Shell',
        correct: false
      },
      {
        text: 'Lester Hayes',
        correct: true
      },
      {
        text: 'Cliff Branch',
        correct: false
      },
    ]
  },
];

/*........function that increments the score for correct answers but does nothing for wrong answers*/
function processResults(isCorrect) {
  if (!isCorrect) {
    return;
  }
  
  const scoreUp = parseInt(scoreUpElement.textContent, 10) || 0;

  scoreUpElement.textContent = scoreUp + 100;
};

/*........function to submit user's name, and pop up window portrays text category of user's score*/
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