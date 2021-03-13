let emailInput = document.getElementById("email");
let passInput = document.getElementById("password");
let button = document.getElementById("btn");
let show = document.getElementById("show");
let email, password, emailOut, passOut;

button.addEventListener('click', getInfo);

function getInfo() {
    
    email = emailInput.value;
    password = passInput.value;
    console.log(email);
    
    emailOut = document.createElement('span');
    emailOut.id = 'info';
    emailOut.innerText = "Email: " + email + " ";
    show.appendChild(emailOut);

    passOut = document.createElement('span');
    passOut.id = 'info';
    passOut.innerText = "Password: " + password + " ";
    show.appendChild(passOut);
}