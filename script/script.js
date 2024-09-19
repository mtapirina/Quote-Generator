const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");


//Show New Quote
function newQuote(){
    //Pick a random Quote fron localQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    //

    //Check if author field is blank - and replace it with "Unknown"
     if(!quote.author){
        authorText.textContent = "Unknown";
     }else{
        authorText.textContent = quote.author;
     };
     //Check Quote length to determine styling

     if(quote.text.length > 120){
        quoteText.classList.add("long-quote");
     }else{
        quoteText.classList.remove("long-quote");
     }
      quoteText.textContent = quote.text;
};

//Twitt Quote
function tweettQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, "_blank");
};

//Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweettQuote);

//On Load
newQuote();
