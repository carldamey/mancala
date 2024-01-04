
# MANCALA

This is my submission for the first of four end of unit projects at General Assembly, a browser game.

https://carldamey.github.io/mancala/


## SCREENSHOTS

![Screenshots](/screenshots/screenshots.png)


## TECHNOLOGIES USED

**Languages:** 
- JavaScript
- HTML
- CSS

**Software:** 
- VSCodium
- Figma

**External:** 
- Git
- GitHub

## RULES

The board is comprised of 2 rows of 6 "pockets" surrounded by two "mancalas", each have a value representing how many "stones" are contained inside, each pocket begins with 4 stones inside, totalling 48, and each mancala begins with 0 stones inside.

On a players turn, you must select any of your pockets with a stone value above 0. The selected pocket then subtracts one stone from itself, adding it to each subsequent pocket, until the selected pocket has a value of 0. The current player's mancala is included, the opponent's is skipped, and deposits continue counter-clockwise.

If a player's final stone deposit from their selected pocket is into their mancala, they take another turn, there is no limit to how many times this can be done consecutively.

If a player's final deposit from their selected pocket is into an empty pocket withinin their control, if there are any stones owned by the opponent opposite the current pocket, those stones are all subtracted from the opponent's pocket and deposited into the current player's mancala.

Play continues, with turns alternating, until either player's pockets each have 0 stones in them. Any remaining stones on the board are subtracted from their pockets and placed in the pockets' controlling player's mancala.

Both mancalas are then compared, whichever player's mancala contains more stones wins, in the event that both mancalas contain an equal number of stones, the game is considered a tie.

## UPCOMING FEATURES

**Features:**
* Scoreboard for Consecutive Games
* Accessible Rules Page In-Game

**Polish:**

* Sound
* Feedback for Extra Turn and Opponent Capturing
* Delay between Each Stone Deposited
* Exclusive Highlighting of Playable Pockets


**Code:**
* Refactoring of Branching Functions
