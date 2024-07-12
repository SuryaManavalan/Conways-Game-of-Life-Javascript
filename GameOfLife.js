let board = [];

function generateRandomBoard() {
    for (let i = 0; i < 25; i++) {
        board.push([]);
        for (let j = 0; j < 25; j++) {
            let value = false;
            if (Math.random() < 0.09) {
                value = true;
            }
            // if (i == 3 || j == 5){
            //     value = true;
            // }
            board[i].push(value);
        }
    }
}

function printBoard(){//(x, y) {
    for (let i = 0; i < board.length; i++) {
        let rowString = '';
        for (let j = 0; j < board[i].length; j++) {
            // if (j == x && i == y){
            //     rowString += ' x';
            // }
            // else 
            if (board[i][j]) {
                rowString += ' o';
            } else {
                rowString += '  ';
            }
        }
        console.log(rowString);
    }
}

function numNeighbors(x, y) {
    let count = 0;

    for (let i = 0; i < 2 * Math.PI; i += Math.PI / 4){
        const dX = Math.round(Math.cos(i));
        const dY = Math.round(Math.sin(i));

        // console.log( 'dx:' + dX + ' | dY: ' + dY);

        if((x + dX) >= 0 && (x + dX) < board[0].length && (y + dY) >= 0 && (y + dY) < board.length){
            if (board[y + dY][x + dX]){
                count++;
            }
        }
    }

    return count;
}

// If living:
//  If has < 2 or > 3 neighbors it dies
// Otherwise stays alive
// If Dead:
//  If has == 3 neighbors it comes to life
// Otherwise stays dead
function updateBoard() {
    let tempBoard = [];

    for (let i = 0; i < board.length; i++) {
        tempBoard.push([])
        for (let j = 0; j < board[i].length; j++) {
            const neighbors = numNeighbors(j,i);
            if (board[i][j]) {
                if (neighbors === 2 || neighbors === 3) {
                    tempBoard[i].push(true);
                } else {
                    tempBoard[i].push(false);
                }
            } else {
                if (neighbors === 3) {
                    tempBoard[i].push(true);
                } else {
                    tempBoard[i].push(false);
                }
            }
        }
    }
    
    board = tempBoard;
}

function compareBoards(b1, b2){
    for(let i = 0; i < b1.length; i++){
        for(let j = 0; j < b1[0].length; j++){
            if(b1[i][j] !== b2[i][j]){
                return false;
            }
        }
    }

    return true;
}

function loop() {
    // Print the Board:
    printBoard();

    let prevBoard = board.slice();
    // Update each cells new life state:
    updateBoard();

    if(compareBoards(prevBoard, board)){
        board = [];
        generateRandomBoard();
    }
}

generateRandomBoard();
// printBoard(24,2);
// console.log(numNeighbors(24,2));
setInterval(loop, 300);