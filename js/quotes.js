const quotes = [
    {
        quote: "Try not to become a man of success. Rather become a man of value.",
        author: "Albert Einstein",
    },
 
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison",
    },

    {
        quote: "A day without sunshine is like, you know, night.",
        author: "Steve Martin",
    },

    {
      quote: "We accept the love we think we deserve.",
      author: "Stephen Chbosky",
    },

    {
      quote: "Better to have loved and lost, than to have never loved at all.",
      author: "St. Augustine",
    },

    {
      quote: "A loving heart is the truest wisdom.",
      author: "Charles Dickens",
    },

    {
      quote: "The best thing to hold onto in life is each other.",
      author: "Audrey Hepburn",
    },

    {
      quote: "The chance to love and be loved exists no matter where you are.",
      author: "Oprah Winfrey",
    },

    {
      quote: "Life is the flower for which love is the honey.",
      author: "Victor Hugo",
    },
]

const quote = document.querySelector("#quote div:first-child span");
const author = document.querySelector("#quote div:last-child span");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;