function next_quiz_question(question_div, answers_div, quiz_data, score, correctSelection, selection) {
    if (correctSelection == selection && correctSelection != undefined) score++;
    
    question_div.innerText = quiz_data[0].question;

    answers_div.innerHTML = "";

    for (let question_index = 0; question_index < quiz_data[0].answers.length; question_index++) {
        let question_button = document.createElement("button");
        question_button.innerText = quiz_data[0].answers[question_index];
        if (quiz_data.length > 1) {
            question_button.onclick = () => {next_quiz_question(question_div, answers_div, quiz_data.slice(1), score, quiz_data[0].correct_answer, question_index);};
        } else {
            question_button.onclick = () => {display_quiz_results(question_div, answers_div, score, quiz_data[0].correct_answer, question_index);};
        }
        answers_div.appendChild(question_button);
    }
}

function display_quiz_results(question_div, answers_div, score, correctSelection, selection) {
    if (correctSelection == selection) score++;
    question_div.innerText = "Your score: " + score;
    answers_div.innerHTML = "";
}
