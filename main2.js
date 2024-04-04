const box = document.querySelector('.box');
let currentQuestionIndex = 0;
let score = 0;

let ques = [
    {
        question: 'What is the result of 2 + 2?',
        answer: ['3', '4', '5', '6'],
        correctAns: '4'
    },
    {
        question: 'What keyword is used to declare variables in JavaScript?',
        answer: ['let', 'var', 'const', 'int'],
        correctAns: 'var'
    },
    {
        question: 'Which function is used to output data in JavaScript?',
        answer: ['console.log()', 'print()', 'echo()', 'document.write()'],
        correctAns: 'console.log()'
    },
    {
        question: 'Which operator is used to compare two values for equality in JavaScript?',
        answer: ['=', '==', '===', '!='],
        correctAns: '==='
    },
    {
        question: 'What is the data type of NaN in JavaScript?',
        answer: ['Number', 'String', 'Undefined', 'NaN is not a data type'],
        correctAns: 'Number'
    },
    {
        question: 'What will the following code output: console.log(typeof undefined)?',
        answer: ['Undefined', 'Null', 'Object', 'Number'],
        correctAns: 'Undefined'
    },
    {
        question: 'Which built-in method adds one or more elements to the end of an array and returns the new length of the array?',
        answer: ['push()', 'pop()', 'join()', 'concat()'],
        correctAns: 'push()'
    },
    {
        question: 'What is the result of "10" + 5 in JavaScript?',
        answer: ['15', '105', '10', 'Error'],
        correctAns: '105'
    },
    {
        question: 'What will the following code output: console.log(2 + "2")?',
        answer: ['4', '22', 'Error', 'undefined'],
        correctAns: '22'
    },
    {
        question: 'Which of the following is not a looping structure in JavaScript?',
        answer: ['for', 'while', 'do-while', 'repeat'],
        correctAns: 'repeat'
    },
    {
        question: 'What is the purpose of the `break` statement in JavaScript?',
        answer: ['To exit a loop or switch statement', 'To continue to the next iteration of a loop', 'To define a function', 'To stop the execution of the script'],
        correctAns: 'To exit a loop or switch statement'
    },
    {
        question: 'Which of the following is not a valid JavaScript variable name?',
        answer: ['myVariable', '_myVariable', '2myVariable', '$myVariable'],
        correctAns: '2myVariable'
    },
    {
        question: 'What is the result of 5 == "5" in JavaScript?',
        answer: ['true', 'false', 'undefined', 'Error'],
        correctAns: 'true'
    },
    {
        question: 'Which method is used to remove the last element from an array and return that element?',
        answer: ['pop()', 'shift()', 'splice()', 'unshift()'],
        correctAns: 'pop()'
    },
    {
        question: 'What will the following code output: console.log(Boolean("false"))?',
        answer: ['true', 'false', 'Error', 'undefined'],
        correctAns: 'true'
    },
    {
        question: 'Which built-in method removes the first element from an array and returns that removed element?',
        answer: ['pop()', 'shift()', 'splice()', 'unshift()'],
        correctAns: 'shift()'
    },
    {
        question: 'What does the JavaScript `typeof` operator return for the data type `null`?',
        answer: ['Null', 'Undefined', 'Object', 'Number'],
        correctAns: 'Object'
    },
    {
        question: 'Which of the following is not a valid way to declare a JavaScript function?',
        answer: ['function myFunction() {}', 'let myFunction = function() {};', 'const myFunction = () => {}', 'myFunction() = function() {}'],
        correctAns: 'myFunction() = function() {}'
    },
    {
        question: 'What will the following code output: console.log(5 + null)?',
        answer: ['5', 'null', 'undefined', 'Error'],
        correctAns: '5'
    },
    {
        question: 'What is the output of the following code: console.log(3 + 2 + "7")?',
        answer: ['12', '327', '57', 'Error'],
        correctAns: '57'
    }
];

function updateQuestion(){
    box.innerHTML =     `
    <div class="question">
        <h2>Q${currentQuestionIndex + 1}: ${ques[currentQuestionIndex].question}</h2>
    </div>
    <div class="ans">
        ${ques[currentQuestionIndex].answer.map((ans) => `<h1>${ans}</h1>`).join('')}
    </div>
`;
    const newBtns = document.querySelectorAll('.box h1');
    newBtns.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.textContent === `${ques[currentQuestionIndex].correctAns}`){
                score++;
            }

            currentQuestionIndex++;

            if (currentQuestionIndex < ques.length){
                updateQuestion();
            } else {
                scoreCalc();
            }
        })
    })
}

function scoreCalc(){
    const q = document.querySelector('.question');
    const a = document.querySelector('.ans');
    const loader = document.querySelector('.scores');
    const tellScore = document.querySelector('.show-score h6');

    box.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(() => {
        loader.style.opacity = '0';
    }, 2000);


    if ((score / ques.length) * 100 < 50){
        setTimeout(() => {
            tellScore.innerHTML = `You scored ${(score / ques.length) * 100}% <br> <span>You Failed</span>`
        }, 2000);
    } else {
        setTimeout(() => {
            tellScore.innerHTML = `You scored ${(score / ques.length) * 100}% <br> <span id="pass">You Passed, Congratulations!</span>`
        }, 2000);
    }
}


updateQuestion();