export function playPop() {
    let pop1 = new Audio('Sound/pop1.wav');
    let pop2 = new Audio('Sound/pop2.wav');
    let pop3 = new Audio('Sound/pop3.wav');
    let pop4 = new Audio('Sound/pop4.wav');
    let popArr = [pop1, pop2, pop3, pop4];
    let random = Math.floor(Math.random() * 3)
    popArr[random].play();
}

export function playScorePlayer() {
    let scorePlayerSound = new Audio('Sound/scorePlayer.mp3')
    scorePlayerSound.play();
}

export function playScoreAi() {
    let scoreAiSound = new Audio('Sound/scoreAi.mp3')
    scoreAiSound.play();
}