// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

const quotes = [
    {
      quote: "\"The only limit to our realization of tomorrow is our doubts of today.\"",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "\"In the end, we will remember not the words of our enemies, but the silence of our friends.\"",
      author: "Martin Luther King Jr"
    },
    {
      quote: "\"The greatest glory in living lies not in never falling, but in rising every time we fall.\"",
      author: "Nelson Mandela"
    },
    {
      quote: "\"The way to get started is to quit talking and begin doing.\"",
      author: "Walt Disney"
    },
    {
      quote: "\"Your time is limited, don't waste it living someone else's life.\"",
      author: "Steve Jobs"
    },
    {
      quote: "\"Life is what happens when you're busy making other plans.\"",
      author: "John Lennon"
    },
    {
      quote: "\"The future belongs to those who believe in the beauty of their dreams.\"",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "\"It is during our darkest moments that we must focus to see the light.\"",
      author: "Aristotle"
    },
    {
      quote: "\"Do not go where the path may lead, go instead where there is no path and leave a trail.\"",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "\"Be yourself; everyone else is already taken.\"",
      author: "Oscar Wilde"
    }
  ];


  btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
  })
