//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID:65130500068       Name:Ratikorn Damgurnglubpanavanit

import { quizQuestions, getRandomQuiz } from "./quizQuestions.js";

let randomQuiz;

function init() {
  const newBtn = document.createElement('button')
  newBtn.textContent = 'New Quiz'
  newBtn.addEventListener('click', generateQuiz)
  
  const clearBtn = document.createElement('button')
  clearBtn.textContent = 'Clear Quiz'
  clearBtn.addEventListener('click', clearQuiz)
  
  const divMenu = document.getElementById('menu')
  divMenu.appendChild(newBtn)
  divMenu.appendChild(clearBtn)
}

function generateQuiz() {
  const divQuizCtn = document.getElementById('quizContainer')
  divQuizCtn.addEventListener('click', getRandomQuiz)
  
  clearQuiz()
  
  randomQuiz = getRandomQuiz()
  
  const divQues = document.createElement('div')
  divQues.setAttribute('id', 'question')
  
  const p = document.createElement('p')
  p.textContent = randomQuiz.question
  divQues.appendChild(p)
  
  for (let i = 0; i < 4; i++) {
    const choiceBtn = document.createElement('button')
    choiceBtn.style.margin = '5px'
    choiceBtn.textContent = randomQuiz.options[i]
    choiceBtn.addEventListener('click', checkAnswer)
    
    divQues.appendChild(choiceBtn)
  }
  
  divQuizCtn.appendChild(divQues)
}

function clearQuiz() {
  const divQuizCtn = document.getElementById('quizContainer')
  divQuizCtn.textContent = ''
  const divAns = document.querySelector('.answer')
  // const divAns = document.getElementsByClassName('answer')[0]
  divAns.textContent = ''
}

function checkAnswer(e) {
  const p = document.createElement('p')
  if (e.target.textContent == randomQuiz.answer) {
    p.textContent = 'Correct Jaa <3'
  } else {
    p.textContent = 'Incorrect T^T'
  }
  const divAns = document.querySelector('.answer')
  divAns.textContent = ''
  divAns.appendChild(p)
}

init();