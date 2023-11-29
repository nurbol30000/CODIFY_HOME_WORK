//Создайте функцию concatStrings, которая принимает две строки и использует метод concat для объединения этих строк.
// Функция должна вернуть новую строку, представляющую собой результат объединения.

// function concatStrings(str1, str2) {
//     return str1.concat(str2);
// }
// let str1 = '123';
// let str2 = '456';
// console.log(concatStrings(str1, str2));


// let obj = 'ko';
// let obj1 = 'mp'
// console.log(concatStrings(obj, obj1));

//Напишите выражение функции, которое использует метод replaceAll для замены всех вхождений подстроки в строке.
// Подстрока и заменитель должны быть переданы в аргументах функции.

// function replace(string, item, replase) {
//     return console.log((string).replaceAll(item,replase));
// }
// let number = '1,2,3,4,5'
// replace(number,  3,  9);\

//Создайте функцию stringToLowerCase, которая принимает строку и использует метод toLowerCase для преобразования всех символов в нижний регистр.
// Функция должна вернуть полученную строку.

// function stringToLowerCase(str) {
//     return str.toLowerCase();
// }

// let string = 'HELLO WORLD';
// console.log(stringToLowerCase(string));

// Среднее задание (expression function):
// Напишите выражение функции, которое принимает строку и подстроку, а затем использует метод includes для определения,
// содержит ли строка данную подстроку. Функция должна вернуть логическое значение (true или false).





const includStrFn = function(textForInclud, textForRetrieval) {
    if (textForInclud.includes(textForRetrieval)) {
        return true
    } else return false 
}

console.log(includStrFn('lolol', 'p'));

console.log('arr_5');




// Легкое задание (arrow function):
// Создайте стрелочную функцию getIndexOf, которая принимает строку и подстроку,
// а затем использует метод indexOf для определения индекса первого вхождения подстроки в строку. Функция должна вернуть этот индекс.

const getIndexOf = (textForIdexOf, textForIndexOfMetods) => {
    return textForIdexOf.indexOf(textForIndexOfMetods)
}

console.log(getIndexOf('lolol', 'l'));

console.log('arr_6');



// Легкое задание (declaration function):
// Создайте функцию splitString, которая принимает строку и использует метод split
// для разделения строки на массив слов (предполагая, что слова разделены пробелами). Функция должна вернуть полученный массив.



function splitString(textForSplit) {
    return textForSplit.split(' ')
}

console.log(splitString('lolo loshka'));

console.log('arr_7');




// Среднее задание (expression function):
// Напишите выражение функции, которое принимает строку и использует метод slice для извлечения подстроки,
// начиная с определенного индекса и заканчивая другим индексом. Индексы должны быть переданы в аргументах функции.


const sliceString = function(textForSlice, index1, index2) {
    return textForSlice.slice(+index1, +index2)
}

console.log(sliceString('textForSlice', 4, 7));

console.log('arr_8');




// Среднее задание (declaration function):
// Напишите функцию convertToString, которая принимает число и использует метод toString
// для преобразования числа в строку. Функция должна вернуть полученную строку.

function converToString(number) {
    return number.toString()
}

console.log(converToString(99));

console.log('arr_9');



// Легкое задание (expression function):
// Создайте выражение функции, которое принимает строку, содержащую число с десятичными знаками,
// и использует метод parseFloat для преобразования строки в число с плавающей запятой.


const converTofloat = function(itemForConverTofloat) {
    return parseFloat(itemForConverTofloat)
}

console.log(converTofloat('123.123'));

console.log('arr_10');

// Среднее задание (arrow function):
// Напишите стрелочную функцию sumNumbers, которая принимает два числа и 
//использует оператор + для их сложения. Функция должна вернуть результат в виде числа.



let fruits = ['apple', 'painapple', 'orange']
fruits.push('dragonFruits')
console.log(fruits);
fruits.pop()
console.log(fruits);

console.log('arr_11');



let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let newNum = numbers.slice()
let evenNumbers = []


for (let i of newNum) {
    if (i % 2 == 0) {
        evenNumbers = evenNumbers.concat(i)
    }
}
console.log(evenNumbers.join(''))

console.log('arr_12')




let colors = ['red', 'purpul', 'orange']
colors.unshift('yellow')
console.log(colors)
colors.shift()
console.log(colors)

console.log('arr_13')


// Легкое задание (declaration function):
// Создайте функцию addNumbers, которая принимает два числа и использует оператор + для их сложения.
// Функция должна вернуть результат в виде числа.


let firstArray = ['Hello']
let secondArray = ['World']
let mergedArray = firstArray.concat(secondArray)
console.log(mergedArray.includes('World'))

console.log('arr_14')


// Легкое задание:
// Создайте массив fruits с несколькими разными фруктами. Используйте метод push, чтобы добавить новый 
//фрукт в конец массива. Затем используйте метод pop, чтобы удалить последний фрукт из массива. Выведите получившийся массив в консоль.
 

let animals = ['whiteMishka', 'pasha', 'dasha']
animals.push('neWhiteMishka')
console.log(animals)
console.log(animals.indexOf('neWhiteMishka'))

console.log('arr_15')


// Среднее задание:
// Создайте массив numbers с числами. Используйте методы slice и concat для создания нового массива, который 
//содержит только четные числа из исходного массива. Затем используйте метод join для объединения этих чисел в строку
//, разделенную запятыми. Выведите получившуюся строку в консоль.



let numbersOne = [1,2,3,4,5]
let newNumbers = numbersOne.slice(0, 2)
newNumbers.reverse()
newNumbers = newNumbers.toString()
console.log(typeof newNumbers, newNumbers);

console.log('arr_16')


// Легкое задание:
// Создайте массив colors с несколькими цветами. Используйте метод unshift, чтобы добавить новый цвет в начало массива.
// Затем используйте метод shift, чтобы удалить первый цвет из массива. Выведите получившийся массив в консоль.



let fruitsOne = ['dragonFruits', 'apple', 'grusha']
fruitsOne.unshift('painApple')
fruitsOne.shift()
console.log(fruitsOne)

console.log('arr_17')

// Среднее задание:
// Создайте два массива: firstArray и secondArray. Используйте метод concat для объединения их в один массив mergedArray.
// Затем используйте метод includes для проверки, содержит ли mergedArray определенное значение. Выведите результат в консоль.



let firstArrayOne = [1,2,3,[4,5,6]]
firstArray= firstArrayOne.flat(1)
console.log(firstArray.join(','))



