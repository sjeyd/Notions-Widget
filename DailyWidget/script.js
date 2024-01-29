let currentNumber = 0;
const numberElement = document.getElementById('currentNumber');

function increaseNumber() {
    currentNumber++;
    updateNumber();
}

function updateNumber() {
    numberElement.innerText = currentNumber;
}
