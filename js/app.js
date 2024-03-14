const gridDomEl = document.querySelector(".grid");
const buttonDomEl = document.querySelector("button");
const selectDomEl = document.getElementById("select-difficulty");
const bombs = [1,5,11,23,44,49,23,35]

startGame();

buttonDomEl.addEventListener("click", startGame);

function startGame(){
    let size = getSize();
    let numOfCell = size ** 2;
    const selectDomElValue = selectDomEl.value;
    
    gridDomEl.innerHTML = "";
    
    for(let i = 0; i < numOfCell; i++){
        const num = i + 1;
    
        const cellEl = document.createElement("div");
        cellEl.classList.add("cell");
        cellEl.innerHTML = num;
        cellEl.style.width = `calc(100% / ${size})`;
    
        gridDomEl.append(cellEl);
    
        cellEl.addEventListener("click", function(){
            console.log(num);
            
            if(bombs.includes(num)){
                cellEl.style.backgroundColor = "red";
            }
            else{
                cellEl.classList.toggle("bg-sky-blue");
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