const quotes = [
    "Believe you can and you're halfway there.",
    "Dream big. Start small. Act now.",
    "Success is the sum of small efforts repeated daily.",
    "Stay hungry. Stay foolish.",
    "Your future is created by what you do today.",
    "Do something today that your future self will thank you for.",
    "Hard work beats talent when talent doesn't work hard.",
    "Discipline is choosing what you want most over what you want now.",
    "Progress, not perfection.",
    "Every day is a second chance.",

    "Great things never come from comfort zones.",
    "Don't stop until you're proud.",
    "The best time to start was yesterday. The next best time is now.",
    "Small steps every day lead to big results.",
    "Success begins with self-belief.",
    "Focus on the goal, not the obstacle.",
    "Action is the foundational key to success.",
    "Mistakes are proof that you are trying.",
    "Keep going. Everything you need will come to you.",
    "Difficult roads often lead to beautiful destinations.",

    "Be stronger than your excuses.",
    "Learn from yesterday. Live for today. Hope for tomorrow.",
    "Consistency creates confidence.",
    "Success is not final; failure is not fatal.",
    "Don't wait for opportunity. Create it.",
    "You are capable of amazing things.",
    "The secret of getting ahead is getting started.",
    "Growth begins at the end of your comfort zone.",
    "Believe in yourself and all that you are.",
    "A little progress each day adds up to big results.",

    "Stay positive. Work hard. Make it happen.",
    "The only limit is the one you set yourself.",
    "Never give up on a dream because of the time it will take.",
    "Success starts with self-discipline.",
    "Keep your face toward the sunshine.",
    "You miss 100% of the shots you don't take.",
    "Be the energy you want to attract.",
    "The harder you work, the luckier you get.",
    "Dream it. Wish it. Do it.",
    "Nothing worth having comes easy.",

    "Every accomplishment starts with the decision to try.",
    "Stay focused and never quit.",
    "Don't count the days. Make the days count.",
    "Success is a journey, not a destination.",
    "Be fearless in the pursuit of what sets your soul on fire.",
    "Start where you are. Use what you have. Do what you can.",
    "Push yourself because no one else will do it for you.",
    "Make today so awesome that yesterday gets jealous.",
    "Your only competition is who you were yesterday.",
    "Turn your dreams into plans."
];

const button = document.querySelector('button');
const h2 = document.querySelector('h2');

button.addEventListener('click',()=>{
    //0-49 idx
    const index = Math.floor(Math.random() * quotes.length);
    h2.textContent = quotes[index];
})