/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

let someArray = [9, 4, 3, 7, 7, 3];

function findUniqueElements(anyArray) {
    let ourResult = []

    for (let i = 0; i < anyArray.length; i++) {
        if (!ourResult.includes(anyArray[i])) {
            ourResult.push(anyArray[i]); 
        } 
    }
    return ourResult
}

let newArray = findUniqueElements(someArray);
console.log(newArray);
