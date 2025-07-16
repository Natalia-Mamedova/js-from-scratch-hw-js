/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

const string = 'happy'

function doubleEachCharacter(anyString) {
let doubleString = ''

for (let i = 0; i < anyString.length; i++) {
    doubleString += anyString[i] + anyString[i];
}
return doubleString;
}

const resultString = doubleEachCharacter(string);
console.log(resultString);
