const params = new URLSearchParams(window.location.search)
let size = Number(params.get("size"));

//get elements

const game = document.getElementById("game");
const cells = document.getElementsByClassName("cell");
const messageField = document.querySelector(".message")
const gameOverField = document.getElementById("game-over")
const playAgain = document.getElementById("play-again")

let currentPlayer = "X";
const marked = new Array(size*size);
let chances = 0;

//diagonals
const d31 = [1,5,9]
const d32 = [3,5,7]
const d51 = [1,7,13,19,25]
const d52 = [5,9,13,17,21]
const d71 = [1,9,17,25,33,41,49]
const d72 = [7,13,19,25,31,37,43]

//choose the diagonals
if(size === 3) {dia1 = d31; dia2 = d32
} else if(size === 5){
  dia1 = d51; dia2 = d52;
} else { 
  dia1 = d71; dia2 = d72;
}


//generate cells
for(let i =0;i<size*size; i++){

let element = document.createElement("div");
element.setAttribute("id", i+1)
element.setAttribute("class", "cell")
game.appendChild(element)
game.style.gridTemplateColumns = `repeat(${size}, 50px)`;
game.style.gridTemplateRows = `repeat(${size}, 50px)`;


}


//add listeners to cells
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function (ev) {
    let id = Number(ev.target.id);
    mark(id);

  });
}

//run this on marking
function mark(id) {
  let currentCell = document.getElementById(id);
  if (currentCell.innerText === "") {
    currentCell.innerText = currentPlayer;
    marked[id - 1] = currentPlayer;
    checkIfWin(id);
    chances++
    if(chances === size *size) { 
      gameOver("It's a draw. Play again! :)")
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  } else {
    alert("Already Marked");
  }
}

//check if a player won every turn after marking
function checkIfWin(current) {
let currentId = current -1;

  checkRow(currentId) && gameOver(`Player ${currentPlayer} won.`)
  checkCols(currentId) && gameOver(`Player ${currentPlayer} won.`)
  if(dia1.includes(current) || dia2.includes(current)){
    let dia;
    if(dia1.includes(current)) {dia = dia1}
    else { dia = dia2}
    checkDia(current,dia) && gameOver(`Player ${currentPlayer} won.`)
 }
  
}


//check the current marked row
function checkRow(index) {
let row = Math.floor(index/size)

let count = 0
    for(let i = 0; i< size; i++){
        if(marked[(row * size) + i] === currentPlayer) count ++
    }
    if(count === size) return true
    return false

}

//check the current marked column
function checkCols(index) {
let col = index%size;
let count = 0
for(let i =0; i<size; i++){
    if(marked[col + (i*size)] === currentPlayer) count++
}
if(count === size) return true
return false
   
}
    
//check the diagonals
function checkDia(current, dia) {
 let count =0;
for(let i =0; i<dia.length; i++){
if(marked[dia[i]-1] === currentPlayer) count++
}
if(count === dia.length){ return true}
return false;

}

//game over
function gameOver(message, player = null){
playAgain.addEventListener("click", ()=> {window.location.href = "/pre-tic-tac-toe"})
messageField.innerText = message;
gameOverField.classList.add("visible")
game.style.pointerEvents = "none"

}
