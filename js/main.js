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
    if (pocket.id[0] === player.toString()[0]){
        /* I hope this doesn't violate MVC principles by checking the html data rather than js. I figured this looks a lot cleaner than
        checking each player against each half of the board index, which is the only other method I can think of currently within my skillset.
        If this is serious bad practice, brace yourself, I'm about to do it again. */
        console.log(pocket.innerText)
        handleTurn(pocket)
    }
}

function handleTurn(pocket) {
    let pocketIdx = 0
    if (player === -1) pocketIdx += 6
    pocketIdx += Number(pocket.id[pocket.id.length -1])
    player *= -1
}

function render() {
    return
}