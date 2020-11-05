//Element
export const playerOneScore = document.getElementById('playerOneScoreId');
export const playerTwoScore = document.getElementById('playerTwoScoreId');
export const gameWindow = document.getElementById('gameWindowId');
export function clearGameWindow() {const ctx = gameWindow.getContext("2d"); ctx.clearRect(0,0,gameWindow.width,gameWindow.height);}