// C'est un tableau
let squares = document.querySelectorAll('.container .square'); 

let index = 0;

squares[index].classList.add('active');

window.addEventListener('wheel', () => {
    squares[index].classList.remove('active');
    index++

    if (index >= squares.length) {
        index = 0;
    }
    squares[index].classList.add('active');
})