/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/

let dice1 
let randomNum = Math.floor(Math.random() * 6)

  switch (randomNum) {
    case 0: {dice1 = 1
        break;
    }
    case 1: {dice1 = 2
        break;
    }
    case 2: {dice1 = 3
        break;
    }
    case 3: {dice1 = 4
        break;
    }
    case 4: {dice1 = 5
        break;
    }
    case 5: {dice1 = 6
        break;
    }
  }
console.log('Первый бросок: ' + dice1);


let dice2 
randomNum = Math.floor(Math.random() * 6)
switch (randomNum) {
    case 0: {dice2 = 1
        break;
    }
    case 1: {dice2 = 2
        break;
    }
    case 2: {dice2 = 3
        break;
    }
    case 3: {dice2 = 4
        break;
    }
    case 4: {dice2 = 5
        break;
    }
    case 5: {dice2 = 6
        break;
    }
  }
console.log('Второй бросок: ' + dice2);

let isWinningDouble = dice1 === 4 && dice2 === 4 || 
                    dice1 === 5 && dice2 === 5 || 
                    dice1 === 6 && dice2 === 6;

if (isWinningDouble) {
  if (dice1 === 4 && dice2 === 4 || 
      dice1 === 5 && dice2 === 5 || 
      dice1 === 6 && dice2 === 6)
      isWinningDouble = true
  console.log('Выигрышный дубль!')
} else {
  console.log('Не выигрышный дубль.')
}
