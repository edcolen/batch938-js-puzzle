// function to check if square can move
const check = (square) => {
    // get x and y position of current square on the grid
    const squareColumn = square.cellIndex;
    const squareRow = square.parentElement.rowIndex;
    // get empty square
    const emptySquare = document.querySelector(".empty");
    // get x and y position of empty square on the grid
    const emptySquareColumn = emptySquare.cellIndex;
    const emptySquareRow = emptySquare.parentElement.rowIndex;

    // return rather current square is empty swuare's neighbor
    return (
        (squareColumn === emptySquareColumn && squareRow === emptySquareRow + 1) ||
        (squareColumn === emptySquareColumn && squareRow === emptySquareRow - 1) ||
        (squareRow === emptySquareRow && squareColumn === emptySquareColumn + 1) ||
        (squareRow === emptySquareRow && squareColumn === emptySquareColumn - 1)
    );
};

// function to move square
const move = (square) => {
    // select empty square
    const emptySquare = document.querySelector(".empty");
    // change empty square text with current square
    emptySquare.innerText = square.innerText;
    // remove empty class from empty
    emptySquare.classList.remove("empty");
    // remove squares text
    square.innerText = "";
    // add empty class to square
    square.classList.add("empty");
};

// check if player wins
const checkWin = () => {
    // get an array with the content from all squares in current order
    let result = Array.from(document.querySelectorAll("td")).map((td) => {
        return td.innerText;
    });
    // check if squares are in the right order
    if (result.join() == "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,") {
        // show victory message
        alert("You win!!");
    }
};

// select all squares from table
const squares = document.querySelectorAll("td");

// add event listeners to all squares
squares.forEach((square) => {
    square.addEventListener("click", (event) => {
        // check if square can move
        if (check(event.currentTarget)) {
            // make current square move
            move(event.currentTarget);
            checkWin();
        }
    });
});

// function to shuffle all squares
document.getElementById("shuffle").addEventListener("click", () => {
    // get an array of numbers from 0 to 15
    const numbers = [...Array(16).keys()];
    // remove the 0
    numbers.shift();
    // sort the array in random order
    numbers.sort(() => {
        return Math.random() - 0.5;
    });

    // set each number as content for squares
    numbers.forEach((number, index) => {
        squares[index].innerText = number;
        squares[index].classList.remove("empty");
    });

    // set last square as empty
    const lastSquare = squares[-1];
    lastSquare.innerText = "";
    lastSquare.classList.add("empty");
});