/*----- constants -----*/
const COLORS = {
    "0": "black",
    "1": "red",
    "1": "blue",
}
//is this necessary?

/*----- state variables -----*/
let winner, player, board, mancalas, p1Pockets, p2Pockets

/*----- cached elements  -----*/
const pocketsEl = document.getElementById("pockets")
const p1MancalaEl = document.getElementById("p1Mancala")
const p2MancalaEl = document.getElementById("p2Mancala")
const headerEl = document.querySelector("h1")
const restartButtonEl = document.getElementById("restart")

/*----- event listeners -----*/
pocketsEl.addEventListener("click", (evt) => checkPocket(evt.target))
restartButtonEl.addEventListener("click", init)

/*----- functions -----*/
init()

function init() {
    winner = 0
    board = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,]
    mancalas = [0, 0]
    player = 1
    turn = 1
    restartButtonEl.style.visibility = "hidden"
    headerEl.innerText = "RED'S TURN"
    render()
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
    let i = 0
    const selectedPocket = pocketIdx
    while (board[selectedPocket] > 0) {
        i++
        if (pocketIdx + i === 12) {
            if (player === -1) {
                board[selectedPocket] --
                mancalas[1] ++
                if (board[selectedPocket] === 0) {
                    player *= -1
                }
            }
            i = 0
            pocketIdx = 0
        }
        if (pocketIdx + i === 6 && player === 1) {
                board[selectedPocket] --
                mancalas[0] ++
                if (board[selectedPocket] === 0) {
                    player *= -1
                    // add feedback displaying extra turn, maybe highlight your mancala and fade 
                }
        }
        if (board[selectedPocket] > 0) {
            board[selectedPocket] --
            board[pocketIdx + i] ++
        }

        if (board[selectedPocket] === 0 && board[pocketIdx + i] === 1) {
            // if the current pocket index is above 5, and you're player 2, subtract five and take from the first array
            // else if the current pocket index is below five, and you're player 1 take from the second array
            // check the math on whether you can simply take your current index from the reversed array, then translate that to the board?
            console.log(`current pocket is idx # ${pocketIdx + i}`)
            if (player === 1 && pocketIdx + i <= 5) {
                mancalas[0] += board[11 - (pocketIdx + i)]
                board[11 - (pocketIdx + i)] = 0
            } else if (player === -1 && pocketIdx + i >= 6) {
                mancalas[1] += board[11 - (pocketIdx + i)]
                board[11 - (pocketIdx + i)] = 0
            }
            
        }
    
    }
    p1Pockets = board.slice(0, 6)
    p2Pockets = board.slice(6)
    if (p1Pockets.every((pocket) => pocket === 0) || p2Pockets.every((pocket) => pocket === 0)) {
        endGame()
    }

    player *= -1
    render()
    //maybe move render to while loop when it's time for delay animations
}


    
    

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
        if (winner === 1) {
            headerEl.innerText =  "RED WINS"
        } else if (winner === -1) {
            headerEl.innerText = "BLUE WINS"
        } else if (winner === 2) {
            headerEl.innerText = "TIE"
        }
        //display both scores in some neat fashion, maybe replace the pockets with it and include the replay button at the bottom of it
        restartButtonEl.style.visibility = "visible"
    }
}

function endGame() {
    mancalas[0] += p1Pockets.reduce((a, b) => a+b)
    mancalas[1] += p2Pockets.reduce((a, b) => a+b)
    if (mancalas[0] > mancalas[1]) {
        winner = 1
    } else if (mancalas[1] > mancalas [0]) {
        winner = -1
    } else if (mancalas[0] === mancalas[1]) {
        winner = 2
    }
}

//figure out why score can still be changed in weird ways when continuting to press buttons after the game ends
// disable all html buttons starting w - if player 1, and vice versa