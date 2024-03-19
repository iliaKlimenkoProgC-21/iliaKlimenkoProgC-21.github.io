let correctAnswersCount = 0; //счетчик переменная для учета правильных ответов
let wrongAnswers = []; // массив для включения неправильных ответов
let showResultsOnce = false; // флаг для кнопок

// функция проверки ответа
function checkAnswer(question, answer) {
    if (answer.value == question.dataset.correct) { //проверяется соответвствие занчения ответа с атрибутом дата коррект
        correctAnswersCount++; // увеличение счетчика правильных ответов при верном ответе
        return;
    } else {
        wrongAnswers.push(answer.name); // добавление в массив неправильных ответов по атрубиту name
    }
}

// функция проверки ответов выбранных пользователем
function checkAnswers() {
    let questions = document.querySelectorAll(".question"); // берем все вопросы со старницы
    questions.forEach(function(question) { // для каждого вопроса
        let answers = question.querySelectorAll("input[type='radio']"); //получаем все ответы
        answers.forEach(function(answer) { // для каждого вопроса
            if (answer.checked) { // по выбраному ответу
                checkAnswer(question, answer); // применяется функция чекАнсвер для его проверки
            }
        });
    });
}

//функция для вывода результатов теста
function showResults() {
    let results = document.getElementById("results"); // объявляем переменную и помещаем в нее элемент результы
    if (wrongAnswers.length > 0){ //если ответы содержат ошибки и даны правильные ответы выводим количество баллов и неправильные ответы
        results.querySelector("#correctAnswers").textContent = "Набранные Вами баллы: " + correctAnswersCount;
        results.querySelector("#wrongAnswers").textContent = "Неправильные ответы: "+ wrongAnswers.join(";  \n");
    }
    else if (wrongAnswers.length == 0 && correctAnswersCount == 0){ //если не выбраны варианты уведомляем что нужно пройти тест
        results.querySelector("#correctAnswers").textContent = "Варианты ответов не выбраны. Нажмите кнопку обнулить результаты и пройдите тест заново";
    }
    else if(wrongAnswers.length > 0 && correctAnswersCount == 0){ //если нет правильных ответов, выводим что набрано 0 баллов и неправильные ответы
        results.querySelector("#correctAnswers").textContent = 0;
        results.querySelector("#wrongAnswers").textContent = "Неправильные ответы: "+ wrongAnswers.join(";  \n");
    }
    else{ //если нет неправльных ответов выводим баллы
        results.querySelector("#correctAnswers").textContent = "Набранные Вами баллы: " + correctAnswersCount;
        results.querySelector("#wrongAnswers").textContent ="";
    }   
}

//кнопка вывода результата
buttonResult.addEventListener("click", function() {
    if (!showResultsOnce) { //при нажатии на кнопку проверяем и выводим результы по ранее указанным функциям
        checkAnswers();
        showResults();
        showResultsOnce = true; //флаг нажатия кнопки
    }
});

// кнопка сброса
clearButtonResult.addEventListener("click", function() {
    let questions = document.querySelectorAll(".question"); //берем все вопросы
    questions.forEach(function(question) { //для каждого вопроса
        let answers = question.querySelectorAll("input[type='radio']"); //берем все ответы
        answers.forEach(function(answer) { //для каждого ответа
            answer.checked = false; //снимаем выделение
        });
        //обнуляем переменные и поля
        correctAnswersCount = "";
        wrongAnswers = [];               
        results.querySelector("#correctAnswers").textContent = "";
        results.querySelector("#wrongAnswers").textContent = "";
    });
    showResultsOnce = false; //флаг кнопки    
});