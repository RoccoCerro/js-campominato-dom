const gridDomEl = document.querySelector(".grid");
const buttonDomEl = document.querySelector("button");
const selectDomEl = document.getElementById("select-difficulty");

startGame();

buttonDomEl.addEventListener("click", startGame);

function startGame(){
    let size = getSize();
    let numOfCell = size ** 2;
    const selectDomElValue = selectDomEl.value;
    
    gridDomEl.innerHTML = "";

    // if(selectDomElValue === "medium"){
    //     size = 9;
    //     numOfCell = size ** 2;
    // }
    // else if(selectDomElValue === "easy"){
    //     size = 10;
    //     numOfCell = size ** 2;
    // }
    
    for(let i = 0; i < numOfCell; i++){
        const num = i + 1;
    
        const cellEl = document.createElement("div");
        cellEl.classList.add("cell");
        cellEl.innerHTML = num;
        cellEl.style.width = `calc(100% / ${size})`;
    
        gridDomEl.append(cellEl);

        // if(selectDomElValue === "medium"){
        //     cellEl.classList.add("size-medium");
        // }
        // else if(selectDomElValue === "easy"){
        //     cellEl.classList.add("size-hard");
        // }
    
        cellEl.addEventListener("click", function(){
            console.log(num);
            cellEl.classList.toggle("bg-sky-blue");
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