'use strict';

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const fs = require('fs');


let person, stringifiedPerson, parsedJSON, rawData;

askQuestions();

function askQuestions() {
    readline.question("Vad heter du? ", namn => {
        readline.question("Hur gammal är du? ", ålder => {
            readline.question("Är du programmerare? ", programmerare => {
                person = {
                    namn : namn,
                    ålder : Number(ålder),
                    programmerare, programmerare
                }
                stringifiedPerson = JSON.stringify(person);
                fs.writeFileSync('info.json', stringifiedPerson);
                rawData = fs.readFileSync('info.json');
                parsedJSON = JSON.parse(rawData);
                console.log("Namn: " + person.namn);
                console.log("Ålder: " + person.ålder);
                console.log("Programmerare: " + person.programmerare);
                readline.close();
            });
        });     
    });
}









 


