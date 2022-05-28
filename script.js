const boxWrapper = document.querySelector('.box-wrapper');
const boxBtn = document.querySelector('#box-btn');
const drawBtn = document.querySelector('#draw-button');

boxBtn.addEventListener("click", addDivs);
drawBtn.addEventListener("click", draw);


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