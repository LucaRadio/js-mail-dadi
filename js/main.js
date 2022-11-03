const mailInput = document.querySelector("[name = mail-inserted]");
let mailInserted;
const btnSend = document.querySelector(".btn-primary");

const mails = ["my-mail@gmail.com", "my-mail@yahoo.it", "my-mail@hotmail.it", "my-mail@outlook.it"]

const accountFound = document.querySelector(".message")


btnSend.addEventListener("click", function () {
    let affermative = false;
    mailInserted = mailInput.value;
    console.log("click");

    for (let i = 0; i < mails.length; i++) {
        if (mailInserted === mails[i]) {
            affermative = true;
        }
    }
    if (affermative === true) {
        accountFound.innerHTML = `Your Account is in our database. Congrats`;
        accountFound.classList.remove("text-danger");
        accountFound.classList.add("text-success");
        console.log("Your Account is in our database. Congrats!");
    }
    else {
        accountFound.innerHTML = `Your Account isn't in our database. Try again!`;
        console.log("Your Account isn't in our database. Try again!");
        accountFound.classList.remove("text-success");
        accountFound.classList.add("text-danger");
    }
})



