/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = false
const isVerifiedUser = true
const hasSpecialPermission = true
const hasTemporaryPass = false

let isAccess

// your code
    if (isAdmin && hasSpecialPermission) {
    isAccess = true
} else if (isVerifiedUser && hasSpecialPermission) {
    isAccess = false
} else if (isVerifiedUser && hasTemporaryPass) {
    isAccess = true 
}
else if (isAdmin && hasTemporaryPass) {
    isAccess = false 
}
console.log(isAccess)
