/*
Напишите функцию `includesElement`, которая принимает массив и элемент, а затем возвращает булево значение, указывающее, содержится ли данный элемент в массиве. Для перебора элементов используйте цикл `for`.

Входные данные:
- `array`: Массив, в котором нужно проверить наличие элемента. Массив может содержать любые типы данных.
- `element`: Элемент, наличие которого нужно проверить в массиве.

Выходные данные:
- `true`: Если элемент найден в массиве.
- `false`: Если элемент отсутствует в массиве.

Пример использования:
includesElement([1, 2, 3], 2)  // должен вернуть `true`.
*/
let someArray = [9, 4, 7, 3];
let someElement = 0;

function includesElement(anyArray, anyElement) {

for (let i = 0; i < anyArray.length; i++) {
    if (anyElement === anyArray[i]) {
        return true
    }
}
return false
}

let result = includesElement(someArray, 2)
console.log(result);
