/*----- constants -----*/
const COLORS = {
    "0": "black",
    "1": "red",
    "1": "blue",
}

/*----- state variables -----*/
let winner, player, board

/*----- cached elements  -----*/
const pocketsEl = document.getElementById("pockets")

/*----- event listeners -----*/
pocketsEl.addEventListener("click", (evt) => checkPocket(evt.target))

/*----- functions -----*/
init()

function init() {
    board = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,]
    player = 1
    turn = 1
}

function checkPocket(pocket) {
    // console.log(pocket.id[pocket.id.length - 1]) this will check which pocket
    if (pocket.id[0] === player.toString()[0]) {
        console.log("valid")
    }
}

function render() {
    return
}