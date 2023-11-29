//Создайте переменную age и присвойте ей свой возраст. Если age больше или равно , выведите "Совершеннолетний",
// иначе выведите "Несовершеннолетний".

let age = 16;
if (age >= 18) {
    console.log('Совершеннолетний')
} else {
    console.log('Несовершеннолетний')
}


let isStudent = true;
if(isStudent === true) {
    console.log('Студент')
} else {
    console.log('Не студент')

}
//Создайте переменные num1 и num2 и присвойте им числовые значения. Выведите их сумму
let num1 = 12;
let num2 = 16;

console.log(num1 + num2)

//Создайте переменную day и присвойте ей номер дня недели (от 1 до 7). Используя оператор switch, выведите название дня недели.


let day = 5
switch (day) {
    case 1: {
        console.log("mandey")
    }
    break;
    case 2: {
        console.log('Thusday')
    }
    break;
    case 3: {
        console.log('Wensday')
    }
    break;
    case 4: {
        console.log('Thersday')
    }
    break;
    case 5: {
        console.log('Frayday')
    }
    break;
    case 6: {
        console.log('Satuday')
    }
    break;
    case 7: {
        console.log('Sanday')
    }
    break;
    default: {
        console.log('DEFAULT')
    }
}
//Создайте переменную temperature и присвойте ей числовое значение в градусах Цельсия. Используя условный оператор,
//выведите "Горячо", "Горячо" или "Холодно" в зависимости от значения temperature.

let temperature = -6
if (temperature <= 18  ) {
    console.log('Холодно')
} else if (temperature >= 18 && temperature <= 35   ) {
    console.log('Тепло')
} else if (temperature >= 36    ) {
    console.log('Горячо')
} else {
    console.log('Введите значение от 0 и больше')
}

//Создайте переменную score и присвойте ей число от 0 до 100. Используя тернарный оператор,
// выведите "Сдал" или "Не сдал" в зависимости от значения score (считаем, что 60 и выше - сдал).

let score = 200
if (score >= 60 && score <= 100) {
    console.log('сдал')
} else if (score >= 0 && score <= 59 ) {
    console.log('Не сдал')
} else  {
console.log('ошибка')
}
    

//Создайте переменную num и присвойте ей число. Если num четное, выведите "Четное", иначе "Нечетное".

// let num = 3
// if (num === 4) {
//     console.log('Четное')
// }else {
//     console.log('Нечетное')
// }

//Создайте переменную language и присвойте ей строку, представляющую язык программирования.
// Если language равно "JavaScript", выведите "Поддерживается", иначе "Не поддерживается".

let language = "JavaScript"
if ( language === "JavaScript" ) {
    console.log('Поддерживается')
}else {
    console.log('Не поддерживается')
}

//Создайте переменную userRole и присвойте ей строку "admin", "editor" или "viewer"
//. Используя оператор if, else if, и else, выведите "Доступ разрешен", "Доступ ограничен", или "Доступ запрещен" в зависимости от userRole.


let userRole = "admin"
if ( userRole == "admin" ) {
    console.log('Доступ разрешен')
} else if ( userRole == "editor" ) {
    console.log('Доступ ограничен ')
} else if ( userRole == "viewer" ) {
    console.log('Доступ запрещен')
} else {
    console.log('Не поддерживается')
}

//Создайте переменные a, b, и c и присвойте им числовые значения.
// Используя условный оператор, найдите и выведите наибольшее из них. 10

let a = "4"
let b = "7"
let c = "1"
if ( a > b && c ) {
    conole.log('4')
} else if ( b > a && c ) {
    console.log('7')
} else if ( c > a && b) {
    console.log('1')
} else {
    console.log('Не поддерживается')
}

//Создайте переменную fruit и присвойте ей строку, представляющую фрукт. Если fruit равно
// "яблоко", выведите "Красное", если "банан", выведите "Желтый", если "апельсин", выведите "Оранжевый", иначе выведите "Другой цвет".

let fruit = "aplle"
if (fruit == "aplle") {
    console.log('rad')
} else if (fruit == 'banana') {
    console.log('yellow')
} else if (fruit == orange) {
    console.log('orange')
}else {
    console.log('Не поддерживается')
}


//Создайте переменную income и присвойте ей числовое значение.
// Используя тернарный оператор, выведите "Высокий доход", "Средний доход" или "Низкий доход" в зависимости от значения income.
let income = 5000
if ( income <= 10000 ) {
    console.log('Низкий доход')
} else if ( income >= 20000 && score <=50000 ) {
    console.log('Средний доход')
} else if ( income >= 50000 ) {
    console.log('Высокий доход')
} else {
    console.log('Не поддерживается')
}


//Создайте переменную grade и присвойте ей буквенную 
// ("A", "B", "C", "D", или "F"). Используя оператор switch, выведите словесное описание оценки.

let grade = "A"
switch (grade) {
    case "A": {
        console.log("отлично")
    }
    break;
    case "b": {
        console.log('хорошо')
    }
    break;
    case "C": {
        console.log('норм')
    }
    break;
    case "D": {
        console.log('не очень')
    }
    break;
    case "F": {
        console.log('плохо')
    }
    break;
    default: {
        console.log('DEFAULT')
    }
}


//Создайте переменную password и присвойте ей строку. Если длина пароля больше или равна 8 символам,
// выведите "Пароль надежный", иначе "Пароль слишком короткий".

let password = "000000000"
if (password.length >= 8) {
    console.log('Пароль надежный')
}else {
    console.log('Не поддерживается')
}


//Создайте переменные x и y и присвойте им числовые значения. 
//Используя тернарный оператор, выведите "x больше y", "y больше x" или "x и y равны".

let x = 90
let y = 9

let resultt = x > y ? "x больше y" : x < y ? "y больше x" : "x и y равны"
console.log(resultt)


//Создайте переменную isRaining и присвойте ей булевое значение. 
//Если isRaining равно true, выведите "Идет дождь", иначе "Дождя нет".



let isRaining = "hdh"
if (isRaining == true) {
 console.log("Идет дождь")
} else if (isRaining == false) {
    console.log("Дождя нет")
} else {
    console.log("Ошибка")
}


//Создайте переменную isLeapYear и присвойте ей булевое значение.
// Если isLeapYear равно true, выведите "Год високосный", иначе "Год не високосный".

let isLeapYear = true
if (isLeapYear == true) {
 console.log("Год високосный")
} else if (isLeapYear == false) {
    console.log("Год не високосный")
} else {
    console.log("Ошибка")
}

//Создайте переменную userInput и присвойте ей строку.
// Если строка пуста, выведите "Пустая строка", иначе выведите "Строка не пуста".



let userInput = ""
if (userInput.length <= "") {
    console.log('Пустая строка')
}else {
    console.log('Строка не пуста')
}


//Создайте переменную num и присвойте ей число. Используя оператор if
//, выведите "Положительное", "Положительное" или "Ноль" в зависимости от значения num.

let num = 22
if (num >= 0) {
console.log("Положительное")
} else if(num <= 0) {
    console.log("Отрицательное")
} else {
    console.log("Ноль")
}

//Создайте переменную dayOfWeek и присвойте ей день недели ("пн", "вт", "ср", и так далее).
// Используя оператор switch, выведите "Рабочий день" или "Выходной" в зависимости от значения dayOfWeek.

let dayOfWeek = 'вторник'
switch (dayOfWeek){
    case "пониделник" : {
        console.log('Рабочий день')
    } 
    break;
    case "вторник" : {
        console.log('Рабочий день')
    }
    break;
    case "среда" : {
        console.log('Рабочий день')
    }
    break;
    case "четверг" : {
        console.log('Рабочий день')
    }
    break;
    case "пятница" : {
        console.log('Рабочий день')
    }
    break;
    case "субота" : {
        console.log('Выходной')
    }
    break;
    case "воскресение" : {
        console.log('Выходной')
    } default :
    console.log('ошибка')
}