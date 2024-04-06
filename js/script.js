function handleEventKeyupEvent(e) {
    const playerPressed = (e.key);
    if (playerPressed === 'Escape') {
        gameOver();
    }
    const currentAlphabetbyId = document.getElementById('current-alphabet');
    const artBoardInnerText = (currentAlphabetbyId.innerText);
    const expectedPress=artBoardInnerText.toLowerCase()
    console.log(expectedPress, playerPressed);
    if (playerPressed === expectedPress) {
        // console.log('you got point');
        setArtBoardElement(playerPressed);
        removeBackgroundElement(playerPressed)
        const currentScore = (getAPoint('score'));
        // console.log(currentScore);
        const score = currentScore + 1;
        setAPoint('score',score);
        // console.log(score);
        continueGame();
    } else {
        // console.log('you get lost life');
        const currentLife = getAPoint('life');
        const life = currentLife - 1;
        setAPoint('life', life)
        if (life === 0) {
            gameOver();
        }
    }
}

document.addEventListener('keyup',handleEventKeyupEvent)

function continueGame() {
    const alphabet = randomAlphabetByElement();  
    
    const currentAlphabet = document.getElementById("current-alphabet");
   currentAlphabet.innerText= alphabet;
    
    setBackgroundElement (alphabet);
}


function play() {
    hideElementById("home-screen");
    hideElementById("final-result")
    showElementById("play-ground");


    setAPoint("life", 5);
    setAPoint("score", 0);
    continueGame();
}


function gameOver() {
    hideElementById('play-ground');
    showElementById("final-result");

    const gameResult = getAPoint("score");
    setAPoint("game-result", gameResult);

    const element = getElementId('current-alphabet');
    const item = (element.innerText);
    removeBackgroundElement(item)
}
