const firstQuestion = document.querySelector('.box');
let currentQuestionIndex = 0;
let score = 0; // Variable to keep track of the score

let ques = [
    {
        question: 'what is your name?',
        answer: ['ali', 'sara', 'sohail', 'shahid'],
        correctAns: 'ali'
    },
    {
        question: 'what is your age?',
        answer: [21, 12, 20, 18],
        correctAns: 12
    }
];

function updateQuestion() {
    firstQuestion.innerHTML = `
    <div class="question">
        <h2>Q${currentQuestionIndex + 1}: ${ques[currentQuestionIndex].question}</h2>
    </div>
    <div class="ans">
        ${ques[currentQuestionIndex].answer.map(btn => `<h1>${btn}</h1>`).join('')}
    </div>
    `;

    const newBtns = document.querySelectorAll('.box h1');
    newBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            // Check if the selected answer is correct
            if (btn.textContent === `${ques[currentQuestionIndex].correctAns}`) {
                score++; // Increment the score if the answer is correct
            }

            currentQuestionIndex++;
            if (currentQuestionIndex < ques.length) {
                updateQuestion();
            } else {
                // Display the final score
                firstQuestion.innerHTML = `<div class="question"><h2>All questions answered. Your score is ${score}/${ques.length}.</h2></div>`;
            }
        });
    });
}

// Initial question
updateQuestion();
