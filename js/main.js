/*----- constants -----*/
const COLORS = {
    "0": "black",
    "1": "red",
    "1": "blue",
}

/*----- state variables -----*/
let winner, player, board, mancalas

/*----- cached elements  -----*/
const pocketsEl = document.getElementById("pockets")
const p1MancalaEl = document.getElementById("p1Mancala")
const p2MancalaEl = document.getElementById("p2Mancala")

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
        console.log(pocketIdx)
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
    player *= -1
    render()
    //maybe move render to while loop when it's time for delay animations
}

    //check distance from mancala first, if a match, change the sequence to always stop at the mancala, then alternate the player

    
    

function render() {
    let i = 0
    board.forEach(pocket => {
        if (i < 6) {
            console.log(pocket)
            document.getElementById(`1/${i}`).innerText = pocket
        } else {
            document.getElementById(`-1/${i-6}`).innerText = pocket
        }
        i++
    })
    p1MancalaEl.innerText = mancalas[0]
    p2MancalaEl.innerText = mancalas[1]


    // if winner, update text accordingly
    // show scores
    // show play again button
}


// while (board[selectedPocket] > 0) {    //while the amount of stones in the pocket you selected is above zero
//     i ++                               //increase the dropping distance from your selected pocket by 1
//     if (pocketIdx + i === 12) {        //if you hit 12, 1 above the final array index
//         pocketIdx = 0                   //loop back to 0
//         i = 0                           //your distance from zero is now zero
//         if (player === -1) {            // if this is player 2
//             board[selectedPocket] --     //subtract one from your pocket
//             mancalas[1] ++              //and add it to player 2's mancala
//         }
//     } 
//     if (pocketIdx + i !== 12 && board[selectedPocket] > 0){                            //if you are not at 12,
//         board[selectedPocket] --        //subtract one from your selected pocket
//     } board[pocketIdx + i] ++           //increase the next pocket by 1

//     //add mancala stopping for player
//     //if stone selected was the same amount of stones it contained from the mancala, player *= 1 again to take another turn
// }
// player *= -1
// render()
// }