//Задача 3.1: Скопируй в файл remove-elements.js следующий массив:

let characters = ["Тирион Ланнистер", "Станис Баратеон", "Теон Грейджой", "Эддард Старк", "Дайенерис Таргариен", "Джон Сноу"];

//A) создай переменную с именем firstElement. В качестве значения задай ей первый элемент массива characters. Выведи эту переменную в консоль.

let firstElement = characters[0];

console.log (firstElement);

//B) создай переменную с именем lastElement. В качестве значения задай ей последний элемент массива characters. Выведи эту переменную в консоль.

let lastElement = characters[5];

console.log (lastElement);

//C) удали из массива characters первый элемент.

characters.shift();

//D) добавь значение переменной firstElement в конец массива characters

characters.push(`${firstElement}`);

//E) добавь в начало массива characters значение "Король Ночи"

characters.unshift("Король ночи");

//F) удали с помощью delete элемент массива characters с индексом 5

delete characters[5];

//G) добавь в начало массива characters значение переменной lastElement

characters.unshift(`${lastElement}`);