// объявляем переменные
let persona;
let surname;
let patronymic;
let phone;
let email;
let section;
let presentationTopic;
let presentation;
let birthdate;

// очистка формы
document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('persona').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('patronymic').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('section').value = '';
    document.getElementById('presentation').checked = false;
    document.getElementById('presentationTopic').value = '';
    document.getElementById('birthdate').value = '';
});

// переключатель
document.getElementById('presentation').addEventListener('change', function() {
    presentationTopic = document.getElementById('presentationTopic');
    presentationTopic.disabled = !this.checked;
});
document.getElementById('clearButton').addEventListener('click', function(){
    presentationTopic = document.getElementById('presentationTopic');
    presentationTopic.disabled = !this.checked;
});
// преключатель и очистку формы можно реализовать и через if else,   
// но с помощью слушателя событий по мне так это удобнее и проще 

// валидация формы

// создаем функцию проверки полей при нажатии на кнопку регистрации
document.getElementById('submit').addEventListener('click', function(){

// берем данные с формы и заносим в переменные
persona = document.getElementById('persona').value;
surname = document.getElementById('surname').value;
patronymic = document.getElementById('patronymic').value;
phone = document.getElementById('phone').value;
email = document.getElementById('email').value;
section = document.getElementById('section').value;
presentationTopic = document.getElementById('presentationTopic').value;
presentation = document.getElementById('presentation').checked;
birthdate = document.getElementById('birthdate').value;

// создаем массив для подсчета и сохранения ошибок
let errors = [];

// проверяем заполнение полей
if (persona.trim() === '') {
    errors.push('Имя не может быть пустым');
  } else if (!/^[а-яё]+$/i.test(persona)) {
    errors.push('Имя может содержать только буквы русского алфавита');
}

if (surname.trim() === '') {
    errors.push('Фамилия не может быть пустой');
  } else if (!/^[а-яё]+$/i.test(surname)) {
    errors.push('Фамилия может содержать только буквы русского алфавита');
}

if (patronymic.trim() === '') {
    errors.push('Отчество не может быть пустым');
  } else if (!/^[а-яё]+$/i.test(patronymic)) {
    errors.push('Отчество может содержать только буквы русского алфавита');
}

if (phone.trim() === '') {
    errors.push('Контактный телефон не может быть пустым');
  } else if (!/^\+7\d{10}$/.test(phone)) {
    errors.push('Контактный телефон должен начинаться с +7 и содержать 11 символов');
}

if (email.trim() === '') {
    errors.push('Адрес электронной почты не может быть пустым');
  } else if (!/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
    errors.push('Адрес электронной почты должен быть корректным');
}

if (section.trim() === '') {
    errors.push('Выберите секцию конференции');
}

if (presentation) {
    if (presentationTopic.trim() === '') {
      errors.push('Тема доклада не может быть пустой');
    }
}
else {
    errors.push('Выберите поле "доклад" для введения темы');
}

if (errors.length > 0) {
    alert(errors.join('\n'));
  } else {
    alert("спасибо за регистрацию, ваши ответы можете посмотреть на новой странице");

    // открытие новой страницы с данными при событии submint
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

      // переменная для вывода пустая строка          
      let output = '';
      
      // заполнение строки
      output += '<h2>Регистрационные данные</h2>';
      output += '<ul>';
      output += '<li>Имя: ' + persona + '</li>';
      output += '<li>Фамилия: ' + surname + '</li>';
      output += '<li>Отчество: ' + patronymic + '</li>';
      // тернарный оператор для необязательного поля
      birthdate ? output += '<li>Дата рождения: ' + birthdate + '</li>' : output +"";
      output += '<li>Контактный телефон: ' + phone + '</li>';
      output += '<li>Адрес электронной почты: ' + email + '</li>';
      output += '<li>Секция конференции: ' + section + '</li>';
      output += '<li>Доклад: ' + presentationTopic.value + '</li>';
      output += '</ul>';         

      // вывод новой страницы с данными переменной
      let newWindow = window.open('', '_blank');
      // добавим немного стиля в открываемую страницу
      newWindow.document.write('<style> body {text-align: center; font-style: oblique; background-color:antiquewhite;} ul { list-style: none; } li { margin-bottom: 1rem; } </style>');
      // заполним страницу данными
      newWindow.document.write(output);
    });
}

// ставим преключатель в позицию не выбран, и отключаем поле
document.getElementById('presentation').checked = false;
presentationTopic = document.getElementById('presentationTopic');
presentationTopic.disabled = !this.checked;

});




