const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
    {
        id: 4,
        question: "3 + 6 = ?",
        answers: [3, 4, 9, 6],
    },
    {
        id: 5,
        question: "3 + 1 = ?",
        answers: [3, 4, 5, 6],
    },
    {
        id: 6,
        question: "3 + 9 = ?",
        answers: [3, 12, 5, 6],
    },
    {
        id: 7,
        question: "3 + 19 = ?",
        answers: [22, 4, 5, 6],
    },
];
function randomizeAnswers() {
    const questions = document.querySelectorAll('.quiz-item');

    questions.forEach(function(question) {
        const options = question.querySelectorAll('input[type="radio"]');
        const randomIndex = Math.floor(Math.random() * options.length);

        options.forEach(function(option){
            option.checked = false;
        });

  
        options[randomIndex].checked = true;
    });
}


const btn = document.getElementById('btn');
btn.addEventListener('click', randomizeAnswers);
