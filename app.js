document.addEventListener("DOMContentLoaded", () => {

    //card options
    const cardArray = [
        {
            name: "blueberry",
            img: "images/blueberry-icon.svg"
        },
        {
            name: "blueberry",
            img: "images/blueberry-icon.svg"
        },
        {
            name: "apple",
            img: "images/apple-icon.svg"
        },
        {
            name: "apple",
            img: "images/apple-icon.svg"
        },
        {
            name: "grapes",
            img: "images/grapes-icon.svg"
        },
        {
            name: "grapes",
            img: "images/grapes-icon.svg"
        },
        {
            name: "lemon",
            img: "images/lemon-icon.svg"
        },
        {
            name: "lemon",
            img: "images/lemon-icon.svg"
        },
        {
            name: "pineapple",
            img: "images/pineapple-icon.svg"
        },
        {
            name: "pineapple",
            img: "images/pineapple-icon.svg"
        },
        {
            name: "peach",
            img: "images/peach-icon.svg"
        },
        {
            name: "peach",
            img: "images/peach-icon.svg"
        }
    ]

    const grid = document.querySelector(".grid");

    //create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement("img");
            card.setAttribute("src", "images/circle.svg");
            card.setAttribute("data-id", i);
            // card.addEventListener("click", flipcard);
            grid.appendChild(card);
        }
    }
    createBoard();
})