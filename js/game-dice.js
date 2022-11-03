
const btnGenerator = document.querySelector(".btn-warning");

const myNumber = document.querySelector(".mynumber");

const aiNumber = document.querySelector(".ainumber");

const result = document.querySelector(".result");


btnGenerator.addEventListener("click", function () {
    let myDice = Math.floor(Math.random() * 6 + 1);
    let aiDice = Math.floor(Math.random() * 6 + 1);

    myNumber.innerHTML = myDice;

    aiNumber.innerHTML = aiDice;

    if (myDice < aiDice) {
        console.log("You Loose!. Try again!");
        result.innerHTML = "You Loose! Try Again!"

    }
    else if (myDice > aiDice) {
        console.log("You win!. Congrats!");
        result.innerHTML = "You win! Congrats!"
    }
    else {
        console.log("That's pair!. Unlucky!")
        result.innerHTML = "That's pair! Unlucky!"
    }



})

