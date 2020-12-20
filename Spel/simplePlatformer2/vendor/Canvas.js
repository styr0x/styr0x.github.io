/* 
Skapa en Canvas class som exporteras
constructor(width, height)
create element canvas
classList.add("className")

this.ctx = this.element.getContext("2d");

this.width
this.height
this.dpi

this.setSize(width,height); // Alltså en funktion som körs!
end constructor

Funktioner:

setSize(width, height)
    this.dpi = window.devicePixelRatio || 1;
    this.width = width;
    this.height = height;

    // Set canvas size.
    this.element.width = width * this.dpi;
    this.element.height = height * this.dpi;

    // Scale canvas to the correct size for screens with high dpi.
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;

    // Scale the context to match dpi.
    this.context.setTransform(this.dpi, 0, 0, this.dpi, 0, 0);

clear()     
this.context.clearRect(0, 0, this.element.clientWidth, this.element.clientHeight);
Slut
*/