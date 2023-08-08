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
    if (pocket.id[0] === player.toString()[0]){

                //remove checking id for checking board index #

        let pocketIdx = 0
        if (player === -1) pocketIdx += 6
        pocketIdx += Number(pocket.id[pocket.id.length -1])
        console.log(pocketIdx)
        handleTurn(pocketIdx)


        if (board[pocketIdx] > 0) handleTurn(pocketIdx)
    }
}

function handleTurn(pocketIdx) {
    // check for end state, if all pockets in board array are equal to 0
    // check for winner and tie
    let i = 0
    const selectedPocket = pocketIdx
    while (board[selectedPocket] > 0) {
        i ++
        board[selectedPocket] --
        if (pocketIdx + i === 12) {pocketIdx = 0; i = 0}
        //deposit into player 2s mancala
        console.log(`pocketidx + i = ${pocketIdx + i}`)
        board[pocketIdx + i] ++
        console.log(board)
        //add mancala stopping for player
        //if stone selected was the same amount of stones it contained from the mancala, player *= 1 again to take another turn
        //if player selects an invalid piece, his turn is still used
    }
    player *= -1
    render()
}

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
        //button id 1/i == board[i]

        //two for loops one for starting with positive and one for starting with negative

        //update all pocket values with their data, index will have to be reversed back into element id
    })

    // if winner, update text accordingly
    // show scores
    // show play again button
}