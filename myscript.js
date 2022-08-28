const inputSize = document.querySelector('.number');
const black = document.querySelector('.black');
const grey = document.querySelector('.grey');
const red = document.querySelector('.red');
const random = document.querySelector('.random');
const erase = document.querySelector('.erase');
const submit = document.querySelector('.submit');
const gridSize = document.querySelector('.gridSize');

const container = document.querySelector('.container');
let color = "white";
submit.addEventListener('click',onSubmit);

function onSubmit(e){
    if(inputSize.value === '' || inputSize.value === NaN){
        alert('Please Enter a Valid Number');
    }
    else if(inputSize.value !== ''){
        gridSize.textContent = "Grid Size: " + inputSize.value + "x" + inputSize.value;
    }
}

submit.addEventListener('click', makeGrid);

function makeGrid(e){


    let divsize = inputSize.value;

    // container.style.gridTemplateColumns = `repeat(${divsize},1fr)`;

    // container.style.gridTemplateRows = `repeat(${divsize},1fr)`;

    for(let i = 0; i < (divsize * divsize); i++){
        const div = document.createElement('div');
        div.addEventListener('mouseover', colorSquare);
        div.classList.add('block');
        // div.style.border = '1px solid black';
        container.style.gridTemplateColumns = `repeat(${divsize},10px)`;
        container.style.gridTemplateRows = `repeat(${divsize},10px)`;
        container.appendChild(div);
    }
    
}

function colorSquare(){
    if(color === 'random'){
        this.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    this.style.background = color;
}

black.addEventListener('click', () => {
    color = 'black';
})
grey.addEventListener('click', () => {
    color = 'grey';
})
red.addEventListener('click', () => {
    color = 'red';
})
random.addEventListener('click', () => {
    color = 'random';
})

erase.addEventListener('click', () => {
    color = 'white';
})