const gridDomEl = document.querySelector(".grid");
const buttonDomEl = document.querySelector("button");
const selectDomEl = document.getElementById("select-difficulty");
const pDomElement = document.getElementById("iter");
const bombs = [1,5,11,23,44,49,23,35]
let clickedCells = [];

startGame();

buttonDomEl.addEventListener("click", startGame);

function startGame(){
    let size = getSize();
    let numOfCell = size ** 2;
    const selectDomElValue = selectDomEl.value;
    
    gridDomEl.innerHTML = "";
    clickedCells = [];
    gridDomEl.style.pointerEvents = "auto";
    pDomElement.innerText = "";
    
    for(let i = 0; i < numOfCell; i++){
        const num = i + 1;

        const cellEl = document.createElement("div");
        cellEl.classList.add("cell");
        cellEl.innerHTML = num;
        cellEl.style.width = `calc(100% / ${size})`;
    
        gridDomEl.append(cellEl);
    
        cellEl.addEventListener("click", function(){
            console.log(num);

            if(clickedCells.includes(num)){
                alert("non puoi cliccare due volte la stessa casella")
            }
            else{
                clickedCells.push(num);
            }

            console.log(clickedCells) 

            if(bombs.includes(num)){
                cellEl.style.backgroundColor = "red";
                pDomElement.innerText = `
                HAI PERSO!
                Punteggio: ${thisIsScore()}
                `;
                gridDomEl.style.pointerEvents = "none";
            }
            else{
                cellEl.classList.add("bg-sky-blue");
            }
        })
    }
}

function getSize(){
    let size = 7;
    const selectDomElValue = selectDomEl.value

    if(selectDomElValue === "medium"){
        size = 9;
        numOfCell = size ** 2;
    }
    else if(selectDomElValue === "easy"){
        size = 10;
        numOfCell = size ** 2;
    }

    return size;
}

// function thisIsABomb(number){
//     if(bombs.includes(number)){
//         cellEl.style.backgroundColor = "red";
//     }
//     else{
//         cellEl.classList.toggle("bg-sky-blue");
//     }
// }

function thisIsScore(){
    const score = clickedCells.length -1;
    
    return score;
}