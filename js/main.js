/*----- constants -----*/
const COLORS = {
    "0": "black",
    "1": "red",
    "1": "blue",
}

/*----- state variables -----*/
let winner, player, board, mancalas, p1Pockets, p2Pockets

/*----- cached elements  -----*/
const pocketsEl = document.getElementById("pockets")
const p1MancalaEl = document.getElementById("p1Mancala")
const p2MancalaEl = document.getElementById("p2Mancala")
const headerEl = document.querySelector("h1")

/*----- event listeners -----*/
pocketsEl.addEventListener("click", (evt) => checkPocket(evt.target))

/*----- functions -----*/
init()

function init() {
    board = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,]
    mancalas = [0, 0]
    player = 1
    turn = 1
}

function checkPocket(pocket) {
    if (pocket.id[0] === player.toString()[0]){
        let pocketIdx = 0
        if (player === -1) pocketIdx += 6
        pocketIdx += Number(pocket.id[pocket.id.length -1])
        if (board[pocketIdx] > 0) handleTurn(pocketIdx)
    }
}

function handleTurn(pocketIdx) {
    // check for end state, if all pockets in either half of board array are equal to 0, maybe split list and then do an every iterator?
    // check for winner and tie
    let i = 0
    const selectedPocket = pocketIdx

    



    while (board[selectedPocket] > 0) {
        i++
        if (pocketIdx + i === 12) {
            if (player === -1) {
                board[selectedPocket] --
                mancalas[1] ++
            }      
            i = 0
            pocketIdx = 0
        }
        if (pocketIdx + i === 6 && player === 1) {
                board[selectedPocket] --
                mancalas[0] ++
        }
        if (board[selectedPocket] > 0) {
            board[selectedPocket] --
            board[pocketIdx + i] ++
        }
    }
    p1Pockets = board.slice(0, 6)
    p2Pockets = board.slice(6)

    if (p1Pockets.every((pocket) => pocket === 0) || p1Pockets.every((pocket) => pocket === 0)) {
        endGame()
    }

    player *= -1
    render()
    //maybe move render to while loop when it's time for delay animations
}

    //check distance from mancala first, if a match, change the sequence to always stop at the mancala, then alternate the player

    
    

function render() {
    p1MancalaEl.innerText = mancalas[0]
    p2MancalaEl.innerText = mancalas[1]
    if (!winner) {
        let i = 0
        board.forEach(pocket => {
            if (i < 6) {
                document.getElementById(`1/${i}`).innerText = pocket
            } else {
                document.getElementById(`-1/${i-6}`).innerText = pocket
            }
            i++
        })

        if (player === 1) {headerEl.innerText = "RED'S TURN"}
        else headerEl.innerText = "BLUE'S TURN"
    } else {
        console.log("render recognizes winner")
        if (winner === 1) {
            headerEl.innerText =  "RED WINS"
        } else if (winner === -1) {
            headerEl.innerText = "BLUE WINS"
        } else if (winner === 2) {
            headerEl.innerText = "TIE"
        }
        //display both scores in some neat fashion
    }


    // if winner, update text accordingly
    // show scores
    // show play again button
}

function endGame() {
    console.log("endgame function triggered")
    mancalas[0] += p1Pockets.reduce((a, b) => a+b)
    mancalas[1] += p2Pockets.reduce((a, b) => a+b)
    if (mancalas[0] > mancalas[1]) {
        winner = 1
        console.log("winner func player 1")
    } else if (mancalas[1] > mancalas [0]) {
        winner = -1
        console.log("winner func player 2")
    } else if (mancalas[0] === mancalas[1]) {
        winner = 2
        console.log("winner func tie")
    }
}