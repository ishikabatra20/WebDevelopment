const jokes = [
    "Why don't programmers like nature? It has too many bugs.",
    "Why do Java developers wear glasses? Because they don't C#.",
    "Why was the JavaScript developer sad? Because he didn't Node how to Express himself.",
    "I told my computer I needed a break, and it said 'No problem, I'll go to sleep.'",
    "Why did the programmer quit his job? Because he didn't get arrays.",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "Why did the computer catch a cold? It left its Windows open.",
    "Why was the computer late? It had a hard drive.",
    "What is a computer's favorite snack? Microchips.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",

    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why can't bicycles stand on their own? Because they're two-tired.",
    "Why did the math book look sad? Because it had too many problems.",
    "What do you call fake spaghetti? An impasta.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "Why couldn't the leopard play hide and seek? Because he was always spotted.",
    "Why did the coffee file a police report? It got mugged.",
    "Why are elevator jokes so good? They work on many levels.",
    "What do you call a bear with no teeth? A gummy bear.",

    "Why did the student eat his homework? Because the teacher said it was a piece of cake.",
    "What kind of tree fits in your hand? A palm tree.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "Why don't eggs tell jokes? They'd crack each other up.",
    "What do you call a sleeping bull? A bulldozer.",
    "Why was six afraid of seven? Because seven eight nine.",
    "Why did the tomato blush? Because it saw the salad dressing.",
    "What do you call an alligator in a vest? An investigator.",
    "Why did the cookie go to the doctor? Because it felt crumbly.",
    "What did one wall say to the other wall? I'll meet you at the corner.",

    "Why did the computer go to therapy? It had too many unresolved issues.",
    "Why was the keyboard always tired? Because it worked around the clock.",
    "What do computers eat for lunch? Byte-sized meals.",
    "Why was the smartphone so smart? It had lots of apps.",
    "Why did the Wi-Fi break up with the router? There was no connection.",
    "Why did the developer go broke? Because he used up all his cache.",
    "Why do Python programmers wear glasses? Because they can't C.",
    "Why did the function return early? It had somewhere to be.",
    "Why was the server always calm? It knew how to handle requests.",
    "Why don't programmers tell secrets? Because the code might leak.",

    "Why did the chicken join a band? Because it had the drumsticks.",
    "What do you call a fish wearing a bowtie? Sofishticated.",
    "Why did the duck get promoted? Because he was always quacking good ideas.",
    "Why do cows have hooves instead of feet? Because they lactose.",
    "What did the ocean say to the beach? Nothing, it just waved.",
    "Why don't scientists trust atoms? Because they make up everything.",
    "Why did the banana go to the doctor? It wasn't peeling well.",
    "What do you call a snowman in summer? A puddle.",
    "Why was the broom late? It swept in.",
    "What do you call a boomerang that doesn't come back? A stick."
];

const button = document.querySelector('button');
const h2 = document.querySelector('h2');

button.addEventListener('click', ()=>{
     const index = Math.floor(Math.random() * jokes.length);
      h2.textContent = jokes[index];

});

