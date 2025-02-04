const HTML = document.getElementById('HTML');
const generateBtn = document.getElementById('generate-button');
const quote = document.getElementById('quote'); 

const quotesArray = [
    "to be or not to be",
    "2",
    "3",
    "4"
];

function generateQuote(){
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    quote.textContent = `"${quotesArray[randomIndex]}"`;
    console.log(randomIndex);

}
