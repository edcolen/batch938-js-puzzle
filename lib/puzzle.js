// cellIndex and rowIndex

// select all squares
const squares = document.querySelectorAll("td");

// check if square can move
const check = (square) => {
    const squareColumn = square.cellIndex;
    const squareRow = square.parentElement.rowIndex;
    const emptySquare = document.querySelector(".empty");
    const emptySquareColumn = emptySquare.cellIndex;
    const emptySquareRow = emptySquare.parentElement.rowIndex;
    return (
        (squareColumn === emptySquareColumn && squareRow === emptySquareRow + 1) ||
        (squareColumn === emptySquareColumn && squareRow === emptySquareRow - 1) ||
        (squareRow === emptySquareRow && squareColumn === emptySquareColumn + 1) ||
        (squareRow === emptySquareRow && squareColumn === emptySquareColumn - 1)
    );
};

// select the clicked square
// if can move, move to empty (swap squares)
const move = (square) => {
    // select empty square
    const emptySquare = document.querySelector(".empty");
    // change empty square text with square
    emptySquare.innerText = square.innerText;
    // remove empty class from empty
    emptySquare.classList.remove("empty");
    // remove squares text
    square.innerText = "";
    // add empty class to square
    square.classList.add("empty");
};
// check if player wins
const win = () => {
    let result = Array.from(document.querySelectorAll("td")).map((td) => {
        return td.innerText;
    });
    if (result.join() == "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,") {
        alert("You win!!");
    }
};
// show victory message

// add event listeners to squares
squares.forEach((square) => {
    square.addEventListener("click", (event) => {
        if (check(event.currentTarget)) {
            move(event.currentTarget);
            console.log(win());
        }
    });
});

document.getElementById("shuffle").addEventListener("click", () => {
    const numbers = [...Array(16).keys()];
    numbers.shift();
    numbers.sort(() => {
        return Math.random() - 0.5;
    });

    numbers.forEach((number, index) => {
        squares[index].innerText = number;
    });
});