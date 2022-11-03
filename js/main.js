const mailInput = document.querySelector("[name = mail-inserted]");
let mailInserted;
const btnSend = document.querySelector(".btn-primary");

const mails = ["my-mail@gmail.com", "my-mail@yahoo.it", "my-mail@hotmail.it", "my-mail@outlook.it"]

const accountFound = document.querySelector(".container")

let color = "text-danger"

let affermative = false;

btnSend.addEventListener("click", function () {
    mailInserted = mailInput.value;

    for (let i = 0; i < mails.length; i++) {
        if (mailInserted === mails[i]) {
            affermative = true;
            color = "text-success"
        }
    }
    if (affermative === true) {
        accountFound.innerHTML += `<h1 class="${color} display-5">Your Account is in our database. Congrats!</h1>`
        console.log("Your Account is in our database. Congrats!");
    }
    else {
        accountFound.innerHTML += `<h1 class="${color} display-5">Your Account isn't in our database. Try again!</h1>`
        console.log("Your Account isn't in our database. Try again!");
    }
})



