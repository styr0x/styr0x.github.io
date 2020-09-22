const voltage = document.getElementById("voltage")
let voltageOld
const resistance = document.getElementById("resistance")
let resistanceOld
const current = document.getElementById("current")
let currentOld
const power = document.getElementById("power")
let powerOld
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");

btn.addEventListener("click", countOhmLaw);
btn2.addEventListener("click", clear);

clear();

console.log (voltageOld,resistanceOld,currentOld,powerOld)
function clear() {
    voltage.value = ""
    resistance.value = ""
    current.value = ""
    power.value = ""
    
    voltageOld = voltage.value
    resistanceOld = resistance.value
    currentOld = current.value
    powerOld = power.value
    voltage.style.outline = "none";
    current.style.outline = "none";
    resistance.style.outline = "none";
    power.style.outline = "none";
}


function countOhmLaw() {

    if (voltage.value != voltageOld && current.value != currentOld) {
        resistance.value = Number(voltage.value) / Number(current.value)
        power.value = Number(current.value) * Number(voltage.value)
        voltageOld = voltage.value
        currentOld = current.value
        resistanceOld = resistance.value
        powerOld = power.value
        resistance.style.outline = "thick solid #0000FF";
        power.style.outline = "thick solid #0000FF";
    }

    else if (voltage.value != voltageOld && resistance.value != resistanceOld) {
        current.value = Number(voltage.value) / Number(resistance.value)
        power.value = Number(Math.pow(voltage.value, 2)) / Number(resistance.value)
        voltageOld = voltage.value
        currentOld = current.value
        resistanceOld = resistance.value
        powerOld = power.value
        current.style.outline = "thick solid #0000FF";
        power.style.outline = "thick solid #0000FF";
    }

    else if (voltage.value != voltageOld && power.value != powerOld) {
        current.value = Number(power.value) / Number(voltage.value)
        resistance.value = Number(Math.pow(voltage.value, 2)) / Number(power.value)
        voltageOld = voltage.value
        currentOld = current.value
        resistanceOld = resistance.value
        powerOld = power.value
        current.style.outline = "thick solid #0000FF";
        resistance.style.outline = "thick solid #0000FF";
    }

    else if (current.value != currentOld && resistance.value != resistanceOld) {
        voltage.value = Number(resistance.value) * Number(current.value)
        power.value = Number(resistance.value) * Number(Math.pow(current.value, 2))
        voltageOld = voltage.value
        currentOld = current.value
        resistanceOld = resistance.value
        powerOld = power.value
        voltage.style.outline = "thick solid #0000FF";
        power.style.outline = "thick solid #0000FF";
    }

    else if (current.value != currentOld && power.value != powerOld) {
        voltage.value = Number(power.value) / Number(current.value)
        resistance.value = Number(power.value) / Number(Math.pow(current.value, 2))
        voltageOld = voltage.value
        currentOld = current.value
        resistanceOld = resistance.value
        powerOld = power.value
        voltage.style.outline = "thick solid #0000FF";
        resistance.style.outline = "thick solid #0000FF";
    }

    else if (resistance.value != resistanceOld && power.value != powerOld) {
        voltage.value = Math.sqrt(Number(power.value) * Number(resistance.value)) 
        current.value = Math.sqrt(Number(power.value) / Number(resistance.value)) 
        voltageOld = voltage.value
        currentOld = current.value
        resistanceOld = resistance.value
        powerOld = power.value
        voltage.style.outline = "thick solid #0000FF";
        current.style.outline = "thick solid #0000FF";
    }


    
}



