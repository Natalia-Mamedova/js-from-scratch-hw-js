// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(number) {
    if (number) {
        return number % 2 === 0;
        let Even = true
    } else {
        let Even = false
    }
}
let Even = isEven(5)
console.log(Even);
