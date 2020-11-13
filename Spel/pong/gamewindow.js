//Element
export const playerOneScore = document.getElementById('playerOneScoreId');
export const playerTwoScore = document.getElementById('playerTwoScoreId');
export const gameWindow = document.getElementById('gameWindowId');
export function clearGameWindow() {const ctx = gameWindow.getContext("2d"); ctx.clearRect(0,0,gameWindow.width,gameWindow.height);}

//Rita ut spelplan
export function drawGameField() {
    // Mitten X
    const ctx = gameWindow.getContext('2d');
    ctx.beginPath();
    ctx.rect(0, gameWindow.height / 2, gameWindow.width, 1);
    ctx.fillStyle = "green";
    ctx.fill();
    //Mitten Y
    ctx.beginPath();
    ctx.rect(gameWindow.width / 2, 0, 1, gameWindow.height);
    ctx.fillStyle = "green";
    ctx.fill();
    //Cirkel
    ctx.beginPath();
    ctx.arc(gameWindow.width / 2, gameWindow.height / 2, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "green";
    ctx.stroke();

}