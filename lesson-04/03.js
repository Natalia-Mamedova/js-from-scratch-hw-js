/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

let array1 = [2, 4, 6, 8, 5, 7];
let array2 = [1, 3, 4, 9, 10];

function findCommonElements(someArray1, someArray2) {
    let commonArray = []

    for (let i = 0; i < someArray1.length; i++) {
        if (someArray2.includes(someArray1[i])) {
            commonArray.push(someArray1[i])
        }
        }
        return commonArray
    }

const commonElements = findCommonElements(array1, array2);
console.log(commonElements);
