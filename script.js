const boxWrapper = document.querySelector('.box-wrapper');
const boxBtn = document.querySelector('#box-btn');
const drawBtn = document.querySelector('#draw-button');
const eraserBtn = document.querySelector('#eraser-button');
const rgbBtn = document.querySelector('#rgb-button');
const eraseAllBtn = document.querySelector('#erase-all-button');
const grayBtn = document.querySelector('#gray-button');
let numberOfClicks = 10;
let div;

boxBtn.addEventListener("click", addDivs);
drawBtn.addEventListener("click", draw);
eraserBtn.addEventListener("click", erase);
rgbBtn.addEventListener("click", drawRGB);
eraseAllBtn.addEventListener("click", eraseAllGrid);
grayBtn.addEventListener("click", grayDraw);

function addDivs() {
    while (boxWrapper.firstChild) {
        boxWrapper.removeChild(boxWrapper.firstChild);
    }

    let size = document.querySelector("#number-textbox").value;
    if (size > 100) {
        document.querySelector("#error").innerHTML = "Error, you can choose a size between 1 and 100*";
    } else {
        document.querySelector("#error").innerHTML = "";
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                div = document.createElement("div");
                div.classList.add("boxes");
                div.style.width = 100 / size + "%";
                div.style.height = 100 / size + "%";
                boxWrapper.appendChild(div);
            }
        }
    }
}

function draw() {
    const boxes = document.getElementsByClassName("boxes");
    for (const box of boxes) {
        box.addEventListener('click', () => {
            box.style.backgroundColor = 'black';
        });
    }
}

function drawRGB() {
    const boxes = document.getElementsByClassName("boxes");
    for (const box of boxes) {
        box.addEventListener('click', () => {
            function randomColor() {
                return (`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`);
            }
            box.style.backgroundColor = randomColor();
        });
    }
}

function erase() {
    const boxes = document.getElementsByClassName("boxes");
    for (const box of boxes) {
        box.addEventListener('click', () => {
            box.style.backgroundColor = '#ffffff';
        });
    }
}

function eraseAllGrid() {
    const boxes = document.getElementsByClassName("boxes");
    for (const box of boxes) {
        box.style.backgroundColor = '#ffffff';
    }
}

function grayDraw() {
    numberOfClicks = 10;
    const boxes = document.getElementsByClassName("boxes");
    for (const box of boxes) {
        box.addEventListener('click', () => {
            function grayColor() {
                numberOfClicks--;
                return (`rgb(${numberOfClicks * 25},${numberOfClicks * 25},${numberOfClicks * 25})`);
            }
            box.style.backgroundColor = grayColor();
        });
    }
}