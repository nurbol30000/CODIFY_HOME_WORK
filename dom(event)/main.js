// //! По нажатию клавиш меняйте цвет заднего фон - body
// //! R - red
// //! G - green;
// //! B - blue;
// //! W - white;
// //! SHIFT + B - black
// //! SHIFT + G - gray;



// let key2 = '';
// document.addEventListener('keydown', (event) => {
//     const key = event.key.toLowerCase()


//      let colors =  document.body.style;
//      console.log(event.key );
//     if (key === 'r'){
//        colors.background = 'red';
//         console.log(key)
//     } else if (key === "b") {
//         colors.background = 'blue';
//     } else if(key === "g") {
//         colors.background = 'green';
//     } else if (key === 'w') {
//         colors.background = 'white';
//     } 

//     document.body.style.backgroundColor = key2 === 'Shift' && key === 'b' ? 'black' : key2 === 'Shift' && key === 'g' ? 'gray' :

//      key2 = event.key
        
      
//   })

// //!   Создайте переменную let i=0, по нажатию на кнопку выводите в консоль переменную 
// //! i и увеличивайте её в 2 раза;

// let i = 0;
// document.addEventListener('keydown', (event) => {
//     console.log(i = i + 2);
// })




// //!Вставьте картинку и кнопку в html. При 
// //!нажатии на кнопку скройте картинку путем затухания до прозрачного состояния.

// butt.onclick = function () {
//     let elem = document.getElementById('main');
//     elem.style.opacity = 0
  
// } 




// //! Создайте h1 с классом "output-text". Создайте input type="text" с 
// //!классом "input-text". При каждом изменении ".input-text" меняйте содержимое ".output-text
// //!" на значение из ".input-text".






// //!Создайте div размером 500px * 500px, по нажатию на неё выводите 
// //!в консоль позицию места куда вы нажали относительно div- а;


// let elemDiv = document.getElementById('elemDiv');


// elemDiv.addEventListener('click', function(event) {
//     let x = event.clientX - elemDiv.getBoundingClientRect().left;
//     let y = event.clientY - elemDiv.getBoundingClientRect().top;
//     console.log("sdich div: x=" + x + ", y=" + y);
// });



