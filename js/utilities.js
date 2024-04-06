function hideElementById(elementId) {
    const element = document.getElementById(elementId);
     element.classList.add('hidden');
}
function showElementById(elementId) {
    const element = document.getElementById(elementId);
     element.classList.remove('hidden');
}

function setBackgroundElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}
function removeBackgroundElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}

function getAPoint(elementId) {
    const element = document.getElementById(elementId)
    const getInnerTextElement =parseInt (element.innerText);
    return getInnerTextElement;
}
function setAPoint(elementId,value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function getElementId(elementId) {
    const element = document.getElementById(elementId)
    return element;
}

function setArtBoardElement(elementId) {
    const element = document.getElementById(elementId)
    const elementText = element.innerText;
    return elementText;
    
}

function randomAlphabetByElement() {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz"
    const alphabets = alphabetString.split('');
    
    const randomMath = Math.random() * 25;
    const index = Math.round(randomMath);
    const alphabet = alphabets[index]
    return alphabet;
}