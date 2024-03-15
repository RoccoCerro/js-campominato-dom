const gridDomEl = document.querySelector(".grid");
const buttonDomEl = document.querySelector("button");
const selectDomEl = document.getElementById("select-difficulty");
const pDomElement = document.getElementById("iter");
let clickedCells = [];
let size;
let numOfCell;
let finish = false;

startGame();

buttonDomEl.addEventListener("click", startGame);

function startGame() {
    size = getSize();
    numOfCell = size ** 2;
    const selectDomElValue = selectDomEl.value;

    let bombs = [];
    bombs = bombRandom(bombs);
    console.log("Bombe: ",bombs)
    gridDomEl.innerHTML = "";
    clickedCells = [];
    gridDomEl.style.pointerEvents = "auto";
    pDomElement.innerText = "";

    // console.log(bombRandom(bombs));
    // console.log(numOfCell)

    for (let i = 0; i < numOfCell; i++) {
        const num = i + 1;

        const cellEl = document.createElement("div");
        cellEl.classList.add("cell");
        cellEl.innerHTML = num;
        cellEl.style.width = `calc(100% / ${size})`;

        gridDomEl.append(cellEl);

        cellEl.addEventListener("click", function () {
            console.log("numero ",num);

            if (clickedCells.includes(num)) {
                alert("non puoi cliccare due volte la stessa casella")
            }
            else {
                clickedCells.push(num);
            }

            console.log("celle cliccate ",clickedCells)

            if (bombs.includes(num)) {
                cellEl.style.backgroundColor = "red";
                pDomElement.innerText = `
                HAI PERSO!
                Punteggio: ${thisIsScore() - 1}
                `;
                gridDomEl.style.pointerEvents = "none";
                finish = true;

                let divCell = document.querySelectorAll(".cell");
                
                for (let x = 0; x < numOfCell; x++) {
                    if (bombs.includes(x+1)) {
                        divCell[x].style.backgroundColor = "red";
                    }
                }              
            }                                                           
            else if (numOfCell - bombs.length === clickedCells.length) {
                gridDomEl.style.pointerEvents = "none";
                cellEl.classList.add("bg-sky-blue");
                pDomElement.innerText = `
                HAI VINTO!
                Punteggio: ${thisIsScore()}
                `;
                finish = true;
            }
            else {
                cellEl.classList.add("bg-sky-blue");
            }

            // showTheBombs(cellEl)
        })
    }
}

// let divCell = document.querySelectorAll(".cell");
// if (finish === true) {
//     for (let x = 0; x < bombs.length; x++) {
//         if (bombs.includes(x)) {
//             divCell[x].style.backgroundColor = "red";
//         }
//     }
// }
// console.log(divCell[1]);



function getSize() {
    let size = 7;
    const selectDomElValue = selectDomEl.value

    if (selectDomElValue === "medium") {
        size = 9;
        // numOfCell = size ** 2;
    }
    else if (selectDomElValue === "easy") {
        size = 10;
        // numOfCell = size ** 2;
    }

    return size;
}

function thisIsScore() {
    const score = clickedCells.length;

    return score;
}

function bombRandom(array) {
    while (array.length < 16) {
        const numOfBomb = Math.floor(Math.random() * numOfCell) + 1;
        if (array.includes(numOfBomb) === false) {
            array.push(numOfBomb);
        }
    }

    return array
}

// function showTheBombs(cell){

//     if(finish === true){
//         for(let w = 0; w < bombs.length; w++ ){
//             if (cell.innerText === bombs[w]){
//                 alert("finish")
//             }
//         }
//     }
// }

// function youWon(){
//     if(numOfCell - bombs.length === clickedCells.length){
//         return true
//     }else{
//         return false
//     }
// }


// function thisIsABomb(number){
//     if(bombs.includes(number)){
//         cellEl.style.backgroundColor = "red";
//     }
//     else{
//         cellEl.classList.toggle("bg-sky-blue");
//     }
// }

