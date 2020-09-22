const nameOfDay = ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"]

const nameOfMonth = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"]

const header = document.getElementById("header")
const header2 = document.getElementById("clockdescription")
const d = new Date();

const day = nameOfDay[d.getDay()]
const date = d.getDate()
const month = nameOfMonth[d.getMonth()]
const year = d.getFullYear()




header.innerText = "Idag är det " + day +"en" + " den " + date + "." + month + " " + year + "."
clockCount();
setInterval(clockCount, 1000);



function clockCount() {
    const clock = new Date();
    let hour = addZero(clock.getHours())
    let minute = addZero(clock.getMinutes())
    let second = addZero(clock.getSeconds())
    const header = document.getElementById("header")
    const header2 = document.getElementById("clockdescription")
    header2.innerText = "Klockan är nu: " + hour + ":" + minute + ":" + second

    function addZero(num) {
    if (num < 10) {
        return "0" + num;
    }
    return num.toString();
    }
       
}
