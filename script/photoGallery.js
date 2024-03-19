//выбирает элемент с классом 'gallery' и сохраняет его в переменной 'gallery'
let gallery = document.querySelector('.gallery');

//выбирает все изображения внутри элемента 'gallery' и сохраняет их в массиве 'images'
let images = gallery.querySelectorAll('img');

//устанавливает текущее изображение в 0
let currentImage = 0;

//добавляет обработчик событий к кнопке с id 'next',
// который вызывает функцию showImage с индексом текущего изображения + 1
document.getElementById('next').addEventListener('click', function() {
    showImage(currentImage + 1);
});

//добавляет обработчик событий к кнопке с id 'prev',
// который вызывает функцию showImage с индексом текущего изображения - 1.
document.getElementById('prev').addEventListener('click', function() {
    showImage(currentImage - 1);
});

//функция, которая скрывает все изображения,
// устанавливает текущее изображение в index и делает его видимым.
function showImage(index) {
    //проверка, которая устанавливает index в 0, если он меньше 0,
    // чтобы предотвратить отображение пустой картинки при нажатии 'prev' на первой картинке.
    if (index < 0) {
        index = 0;
    }

    //цикл, который проходит по всем изображениям в массиве 'images'
    //и устанавливает их прозрачность и z-index в -1.
    images.forEach(function(img) {
        img.style.opacity = 0;
        img.style.zIndex = -1;
    });

    //устанавливает текущее изображение в index по модулю длины массива 'images',
    //чтобы обеспечить циклическое переключение изображений.
    currentImage = index % images.length;

    //делает текущее изображение видимым, устанавливая его прозрачность в 1.
    images[currentImage].style.opacity = 1;

    //устанавливает z-index текущего изображения в 1,
    //чтобы оно отображалось поверх других изображений.
    images[currentImage].style.zIndex = 1;
}

// устанавливает интервал для автоматического перелистывания изображений
let autoInterval = setInterval(function() {
    showImage(currentImage + 1);
}, 5000); // задержка в 5 сек.

// добавляет обработчик событий к элементу 'gallery',
// который останавливает автоматическое перелистывание при наведении курсора
gallery.addEventListener('mouseover', function() {
    clearInterval(autoInterval);
});

// добавляет обработчик событий к элементу 'gallery',
// который возобновляет автоматическое перелистывание при уходе курсора
gallery.addEventListener('mouseout', function() {
    autoInterval = setInterval(function() {
        showImage(currentImage + 1);
    }, 5000);
});




