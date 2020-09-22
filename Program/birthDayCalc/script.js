let dayInput = document.getElementById("day");
let monthInput = document.getElementById("month");
let yearInput = document.getElementById("year");
let button = document.getElementById("btn");
let output1 = document.getElementById("output1");
let output2 = document.getElementById("output2");

btn.addEventListener("click", getInfo);

function getInfo() {
    let inputDay = dayInput.value;
    let inputMonth = Number(monthInput.value) -1;
    let inputYear = yearInput.value;
    let inputDate = new Date(inputYear, inputMonth, inputDay);
    let currentDate = new Date();
    let nextBirthDay = new Date(currentDate.getFullYear(), inputMonth, inputDay)
    let nextBirthDay2 = new Date(currentDate.getFullYear()+1, inputMonth, inputDay)
    let age = currentDate.getFullYear() - inputDate.getFullYear();
    let diff = inputDate.getTime() - currentDate.getTime()
    let birthDay = inputDate.getTime()
    let today = currentDate.getTime()
    let dateDiff = nextBirthDay - today;
    let dateDiff2 = nextBirthDay2 - today;
    let daysUntilBirthday = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let daysUntilBirthday2 = Math.floor(dateDiff2 / (1000 * 60 * 60 * 24));
    let m = currentDate.getMonth() - inputDate.getMonth();
    
    if (m < 0 || (m === 0 && currentDate.getDate() < inputDate.getDate()))
    {
        age--;
    }
    console.log(daysUntilBirthday < 0)

    if (daysUntilBirthday < 0) {
        output2.innerText = "It is " + daysUntilBirthday2 + " days until your next birthday!"
    }
    else {
        output2.innerText = "It is " + daysUntilBirthday + " days until your next birthday!"
    }
    
    output1.innerText = "You are " + age + " years old!"
    
    

    
   
}

