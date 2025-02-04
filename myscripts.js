const HTML = document.getElementById('HTML');
const generateBtn = document.getElementById('generate-button');
const quote = document.getElementById('quote'); 

const quotesArray = [
    "Today will be a good day",
    "Make those small habits",
    "1% better than yesterday",
    "Not everyday is a perfect day", 
    "You will make it", 
    "Keep working hard"
];

const colorsArray = [
    "#fcba03",
    "#0352fc",
    "#f403fc",
    "#fc0356",
    "#562b63",
    "#562b63" 

]

function generateQuote(){
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    quote.textContent = `${quotesArray[randomIndex]}`;
   
    const randomColorIndex = Math.floor(Math.random() * colorsArray.length)
    HTML.style.backgroundColor = `${colorsArray[randomColorIndex]}`

    
}
