const button = document.getElementById("btn");
const nameinput = document.getElementById("namn");
const ageinput = document.getElementById("age");
const output = document.getElementById("output");

btn.addEventListener("click", hello)

function hello() {
    const name = nameinput.value
    const age = parseInt(ageinput.value);

    if (age < 13 || isNaN(age)) {
        output.textContent = getErrorMessage();
    }

    else {
        output.textContent = getAgeApproved();
    }

}

function getErrorMessage() {
    return "You shall not pass!"
}

function getAgeApproved(name) {
    return "Welcome to the secret club of secrets," + " " +name + "!"
}
