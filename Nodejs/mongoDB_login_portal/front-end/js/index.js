const signupButton = document.getElementById('signupBtn');
const loginButton = document.getElementById('loginBtn')
const parentDiv = document.getElementById('parentDiv');
const emailAddress = document.getElementById('email');
const passwordField = document.getElementById('password');
const message = document.getElementById('message');
let span;

message.style.color = "black";

signupButton.addEventListener('click', e => {
    let info = {
        email: emailAddress.value,
        password: passwordField.value
    }
    fetch('http://localhost:3000/signup', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(info)
    })
        .then(res => res.text())    
        .then(data => {
            message.innerText = data;
        })
        .catch(error => {
            console.log(error);
        });
});

loginButton.addEventListener('click', e => {
    let info = {
        email: emailAddress.value,
        password: passwordField.value
    }
    fetch('http://localhost:3000/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(info)
    })
        .then(res => res.text())    
        .then(data => {
            message.innerText = data;
        })
        .catch(error => {
            console.log(error);
        });
});
