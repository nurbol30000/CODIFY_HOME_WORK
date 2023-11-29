// //! Всем <h3> поставьте текст '!!!'.


// var h3Elem = document.getElementsByTagName("h3");

// for (let i = 0; i < h3Elem.length; i++) {
//     h3Elem[i].textContent = "!!!";
// }

// //! Всем <h3> сделайте текст зеленого цвета.

// var h3Elem = document.getElementsByTagName("h3");

// for (let i = 0; i < h3Elem.length; i++) {
//     h3Elem[i].style.color = "green";
// }



// //! Создайте маркированный список. При помощи цикла добавьте в маркированный список 30 li - элементов с текстом:
// //! “1 - овечка”,
// //! “2 - овечка”,
// //! “3 - овечка”,
// //! и так до “30-овечка”;
// let ulElem = document.createElement('ul')

// for(let i = 1; i < 30; i++) {
//     let liElem = document.createElement('li')

//     liElem.textContent = i + " - овечка";


//     ulElem.appendChild(liElem)
// }

// document.body.appendChild(ulElem)

// //!В css создайте класс .active в котором пропишите цвет текста blue.
// //! Добавьте всем span элементам класс active через document.getElementsByTagName.

// let spanElem = document.getElementsByTagName("span");

// for (let i = 0; i < spanElem.length; i++) {
//     spanElem[i].classList.add("active");
// }

// //! Найдите все HTML-теги strong и окрасьте их в зеленый цвет.


// let strongElem = document.getElementsByTagName('strong')

// for (let i = 0; i < strongElem.length; i++) {
//      strongElem[i].style.color = 'green'
    
// }

// //!Найдите все HTML-теги em и добавьте им класс .selected .


// let emElem = document.getElementsByTagName('em')

// for (let i = 0; i < emElem.length; i++) {
//     emElem[i].classList.add("selected")
    
// }

// //!Найдите все HTML-теги mark, которые находятся
// //! в div с классом .row и задайте им класс .selected

// let rowElem = document.querySelector('.row')


// let markElem = rowElem.querySelectorAll('mark')

// for (let i = 0; i < markElem.length; i++) {
//     markElem[i].classList.add("selected")
// }


// //!Найдите все гиперссылки и удалите у них подчеркивания.

// var allLinks = document.querySelectorAll('a');


// for (let i = 0; i < allLinks.length; i++) {
//     allLinks[i].style.textDecoration = 'none';
// }

// //!Переключите HTML-теги strong с классом .some в состояние без этого класса
// //! а тем элементам (strong), у которых небыло этого класса — добавьте.


// var strongElements = document.querySelectorAll('strong');


// for (let i = 0; i < strongElements.length; i++) {
//     if (strongElements[i].classList.contains('some')) {
//         strongElements[i].classList.remove('some');
//     } else {
//         strongElements[i].classList.add('some');
//     }
// }

// //!Среди набора элементов с классом .row, удалите этот класс у второго элемента.


// let rowElemm = document.querySelectorAll('.row');

// if (rowElemm.length >= 2) {
//     rowElemm[1].classList.remove('row');
// }


// //!Выведите CSS-свойство color у второй гиперсылки в 
// //!тексте(при помощи метода getComputedStyle())



// const allLinks = document.querySelectorAll('a');

// if (allLinks.length >= 2) {
//     let computedStyle = getComputedStyle(allLinks[1]);
//     console.log('Цвет текста второй гиперссылки: ' + computedStyle.color);
// }





// //!Задайте третьему row дополнительный класс .third .


// const rowElements = document.querySelectorAll('.row');
// if (rowElements.length >= 3) {
//     rowElements[2].classList.add('third');
// }

// //!Обратитесь к элементу с классом .row-inner и задайте ему цвет текста розовый.




// var rowInnerElement = document.querySelector('.row-inner');

// rowInnerElement.style.color = 'pink';