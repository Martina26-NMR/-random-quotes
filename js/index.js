const quotes =[
        { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
        { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
        { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
        { text: "Act as if what you do makes a difference. It does.", author: "William James" }
    ];


function generateQuote(){
     
    var randomQuotes = Math.floor(Math.random() * quotes.length);
            document.getElementById('quote').innerHTML = `"${quotes[randomQuotes].text}"`;
            document.getElementById('author').innerHTML = `- ${quotes[randomQuotes].author}`;
}
    