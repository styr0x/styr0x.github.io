export class GuitarNeck {
    constructor() {
        this.parentDiv = document.getElementById("parent");
        this.neck = document.createElement("div");
        this.nut = document.createElement("div");
        this.firstFretDiv = document.createElement("div");
        this.neckDiv;
        this.fret;
        this.fretMarker;
        this.fretNumber;
        this.twelfthFretOne;
        this.twelfthFretTwo;
        this.string;
        this.note;
        this.getNut;
        this.getFirstFret;
        
        //Variabler
        this.neckScale = 90 * 2;
        this.ratio = 17.817;
        this.increment = 0;
        this.firstFret = this.neckScale / this.ratio;
        this.oldFret;
        this.newFret;
        this.oldScale;
        this.newScale;
        this.result;        
    }
    makeNeck() {
        this.oldFret = this.firstFret;
        // Skapar halsen
    
        this.neck.id = `neck`;
        this.neck.className = `neck`;
        this.parentDiv.appendChild(this.neck);
        //Skapar stallet
    
        this.nut.id="nut";
        this.nut.className = "nut";
        this.neck.appendChild(this.nut);
        //Första bandet
    
        this.firstFretDiv.id = "firstFret";
        this.firstFretDiv.className = "fret";
        this.firstFretDiv.style.transform=`translate(${this.firstFret}vw,0)`;
        this.neck.appendChild(this.firstFretDiv);
        //Skapar resten av banden
    for (let i = 0; i < 11; i++) {
        this.newFret = this.oldFret;
        this.oldScale = this.neckScale;
        this.newScale= this.oldScale - this.newFret;
        this.result = (this.newScale / this.ratio) + this.newFret;
        this.neckDiv = document.getElementById("neck");
        this.fret = document.createElement("div");
    
        this.fret.id = `fret${i}`;
    
        this.fret.className = "fret";
    
        this.fret.style.transform =`translate(${this.result}vw,0)`;
    
    
        this.oldFret = this.result;
        this.oldScale = this.newScale;
        this.neckDiv.appendChild(this.fret);
    
    
        //Skapar Markeringar
        if (i === 1) {
            this.fretMarker = document.createElement("div");
            this.fretMarker.id = `fretMarker${i}`;
            this.fretMarker.className = "fretMarker";
            this.fretMarker.style.marginLeft = `${(this.newFret + this.result - 1.5) / 2}vw`;
            this.neckDiv.appendChild(this.fretMarker);
        }
        if (i === 3) {
            this.fretMarker = document.createElement("div");
            this.fretMarker.id = `fretMarker${i}`;
            this.fretMarker.className = "fretMarker";
            this.fretMarker.style.marginLeft = `${(this.newFret + this.result - 1.4) / 2}vw`;
            this.neckDiv.appendChild(this.fretMarker);
        }
        if (i === 5) {
            this.fretMarker = document.createElement("div");
            this.fretMarker.id = `fretMarker${i}`;
            this.fretMarker.className = "fretMarker";
            this.fretMarker.style.marginLeft = `${(this.newFret + this.result - 1.3) / 2}vw`;
            this.neckDiv.appendChild(this.fretMarker);
        }
        if (i === 7) {
            this.fretMarker = document.createElement("div");
            this.fretMarker.id = `fretMarker${i}`;
            this.fretMarker.className = "fretMarker";
            this.fretMarker.style.marginLeft = `${(this.newFret + this.result - 1.) / 2}vw`;
            this.neckDiv.appendChild(this.fretMarker);
        }
        //Skapar tolfte bandets dubbla markeringar
        if (i === 10) {
            this.twelfthFretOne = document.createElement("div");
            this.twelfthFretTwo = document.createElement("div");
            this.twelfthFretOne.id = `fretMarker${i}`;
            this.twelfthFretTwo.id = `fretMarker${i}`;
            this.twelfthFretOne.className = "fretMarker";
            this.twelfthFretTwo.className = "fretMarker";
            this.twelfthFretOne.style.marginLeft = `${(this.newFret + this.result -0.5) / 2}vw`;
            this.twelfthFretTwo.style.marginLeft = `${(this.newFret + this.result -0.5) / 2}vw`;
            this.twelfthFretOne.style.marginTop = `2.1vh`;
            this.twelfthFretTwo.style.marginTop = `26.5vh`;
            this.neckDiv.appendChild(this.twelfthFretOne);
            this.neckDiv.appendChild(this.twelfthFretTwo);
        }
    }
    //Skapar strängar
    for (let i = 0; i < 6; i++) {
        this.string = document.createElement("div");
        this.string.style.width = "90vw";
        this.string.style.backgroundColor = "black";
        this.string.style.marginTop = `5.65vh`;
        this.string.style.transform = "translate(0,-0vh)"
        this.string.style.height = "0.3vh";
        this.string.id = `string${i}`;
        this.string.className = 'string';
        this.neckDiv.appendChild(this.string);
    
        }   
    };
    drawOpenFretNotes() {
        this.getNut = document.getElementById("nut");
        for (let i = 0; i < 6; i++) {
    
            this.note = document.createElement("div");
            this.note.className = "note";
            this.note.id = `firstNote${i}`;
            this.note.style.transform = "translate(-1vw,-4.2vh)"
            this.note.style.marginTop = '2.87vh'
            this.note.style.opacity = 0;
            //Hover Effects
            this.note.onmouseover = function() {
                if (this.style.opacity == 0) {
                    this.style.opacity = 0.5;
                }
                else if (this.style.opacity == 1) {
    
                }
            };
            this.note.onmouseout = function() {
                if (this.style.opacity == 0.5) {
                    this.style.opacity = 0;
                }
                else if (this.style.opacity == 1) {
    
                }
            };
            //Tonknappens funktion
            this.note.addEventListener('click', function() {
                if (this.style.opacity == 0.5) {
                    this.style.opacity = 1;
                }
                else {
                    this.style.opacity = 0;
                }
            });
            this.getNut.appendChild(this.note);
        }
    };
    drawFirstFretNotes() {
        this.getFirstFret = document.getElementById("firstFret");
        for (let i = 0; i < 6; i++) {
    
            this.note = document.createElement("div");
            this.note.className = "note";
            this.note.id = `firstNote${i}`;
            this.note.style.transform = "translate(-5.5vw,-4.2vh)"
            this.note.style.marginTop = '2.87vh'
            this.note.style.opacity = 0;
            //Hover Effects
            this.note.onmouseover = function() {
                if (this.style.opacity == 0) {
                    this.style.opacity = 0.5;
                }
                else if (this.style.opacity == 1) {
    
                }
            };
            this.note.onmouseout = function() {
                if (this.style.opacity == 0.5) {
                    this.style.opacity = 0;
                }
                else if (this.style.opacity == 1) {
    
                }
            };
            //Tonknappens funktion
            this.note.addEventListener('click', function() {
                if (this.style.opacity == 0.5) {
                    this.style.opacity = 1
                }
                else {
                    this.style.opacity = 0;
                }
            });
            this.getFirstFret.appendChild(this.note);
        }
    };
    drawNotes() {
        for (let i = 0; i < 11; i++) {
            this.fretNumber = document.getElementById(`fret${i}`)

            for (let i = 0; i < 6; i++) {
                this.note = document.createElement("div");
                this.note.className = "note";
                this.note.id = `note${i}`;
                this.note.style.marginLeft = `${1 + this.increment}vw`
                this.note.style.transform = "translate(-7vw,-4.2vh)"
                this.note.style.marginTop = '2.87vh'
                this.note.style.opacity = 0;
                //Hover Effects
                this.note.onmouseover = function() {
                    if (this.style.opacity == 0) {
                        this.style.opacity = 0.5;
                    }
                    else {

                    }
                };
                this.note.onmouseout = function() {
                    if (this.style.opacity == 0.5) {
                        this.style.opacity = 0;
                    }
                    else {

                    }
                };
                //Tonknappens funktion
                this.note.addEventListener('click', function() {
                if (this.style.opacity == 0.5) {
                    this.style.opacity = 1;
                }
                else {
                    this.style.opacity = 0;
                }
            });
            this.fretNumber.appendChild(this.note);
            }
            this.increment += 0.26
        }
};

    
    
}









