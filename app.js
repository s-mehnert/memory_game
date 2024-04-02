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
        },
        {
            name: "coconut",
            img: "images/coconut-icon.svg"
        },
        {
            name: "coconut",
            img: "images/coconut-icon.svg"
        },
        {
            name: "strawberry",
            img: "images/strawberry-icon.svg"
        },
        {
            name: "strawberry",
            img: "images/strawberry-icon.svg"
        }
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector(".grid");
    const resultDisplay = document.querySelector("#result");
    const attemptDisplay = document.querySelector("#attempts");
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    let attempts = 0;

    //create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement("img");
            card.setAttribute("src", "images/circle.svg");
            card.setAttribute("data-id", i);
            card.addEventListener("click", flipCard);
            grid.appendChild(card);
        }
    }

    // check for matches
    function checkForMatch() {
        let cards = document.querySelectorAll("img");
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            // alert("You found a match!");
            cards[optionOneId].setAttribute("src", "images/blank.svg");
            cards[optionTwoId].setAttribute("src", "images/blank.svg");
            cardsWon.push(cardsChosen);
        } else {
            setTimeout(() => {
                cards[optionOneId].setAttribute("src", "images/circle.svg");
                cards[optionTwoId].setAttribute("src", "images/circle.svg");
            }, "500");
            cards[optionOneId].addEventListener("click", flipCard);
            cards[optionTwoId]. addEventListener("click", flipCard);
            // alert("Sorry, try again.");
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        attemptDisplay.textContent = attempts;
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = "Congratulations! You found them all!";
            attemptDisplay.textContent = `It took you ${attempts} attempts to finish the game.`;
        }
    }

    // flip card
    function flipCard() {
        let cardId = this.getAttribute("data-id");
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute("src", cardArray[cardId].img);
        this.removeEventListener("click", flipCard);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
            attempts += 1;
        }
    }

    createBoard();
});