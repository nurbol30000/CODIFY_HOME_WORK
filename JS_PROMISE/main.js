// Простое обещание (Promise): Создайте простой Promise, который выполняется успешно через 2 секунды и возвращает строку "Promise выполнено". 
// Затем обработайте успешное выполнение Promise и выведите результат в консоль.

// const promise = new Promise ((onResolve, onReject) => {
//         setTimeout (() => {
//             onResolve ("Promise выполнено")
//         }, 3000)
// })


// promise
// .then (response =>{
//     console.log(response)
//     console.log(promise)
// })






// Обработка ошибок: Создайте Promise, который завершается с ошибкой через 3 секунды. Затем обработайте ошибку с использованием метода 
// .catch() и выведите сообщение об ошибке в консоль.

// const promise = new Promise((onResolve, onReject) => {
//     setTimeout (() => {
//         onReject ('ERROR!')
//     }, 3000)
    
// })

// promise
// .catch (error => {
//     console.log(error)
//     console.log(promise);
// })

// Promise с условием: Создайте функцию, которая возвращает Promise. Promise должен выполниться успешно,
//  если переданное в функцию число четное, и завершиться с ошибкой, если число нечетное. Обработайте Promise и выведите результат в консоль.

// function getPromis (num) {
//     if (num % 2 === 0) {
//         promise = new Promise ((onResolve, onReject) => {
//             onResolve ('fullFilld')
//         })
//     } else {
//         promise = new Promise ((onResolve, onReject) => {
//             onReject ('ERROR')
//         })
//     }
    
// }
// getPromis(9)
// promise
//     .then((res) => {console.log(res)})

//     .catch((ERROR) => {console.error(ERROR)} )

// Асинхронный запрос к серверу: Используйте fetch для выполнения асинхронного GET-запроса к какому-либо публичному API (например, JSONPlaceholder).
//  Обработайте полученные данные в виде Promise и выведите их в консоль


// fetch('https://jsonplaceholder.typicode.com/todos/199')
// .then((ress) => ress.json())
// .then((data) => {for(i in data) 
//   console.log(i, ":", data [i]);
// })



