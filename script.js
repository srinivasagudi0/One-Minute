const challenges = [
    "Find 3 things that start with the letter",
    "Do 10 push-ups",
    "Draw a cat without lifting your pen",
    "Find something older than you",
    "Write your name with your opposite hand",
    "Find 5 blue objects",
    "Balance on one foot for 30 seconds",
    "Name 10 countries",
    "Draw a house with your eyes closed",
    "Find something you haven't used in a month",
    "Do 15 jumping jacks",
    "Make a paper airplane",
    "Name 10 animals without stopping",
    "Find the smallest object in the room",
    "Draw yourself in 60 seconds",
    "Build the tallest tower you can using nearby objects",
    "Find 3 objects that can fit in your hand",
    "Write the alphabet backward as far as you can",
    "Find something that makes a weird sound",
    "Try to make someone laugh in under 60 seconds"
];


function RandomChallenge() {
    let randomIndex = Math.floor(Math.random() * challenges.length);
    let challenge = challenges[randomIndex];

    a = document.getElementById("challenge");
    a.textContent = challenge;
    Countdown();
}

function Countdown() {
    let timeLeft = 3;
    time = document.getElementById("timer");
    time = time.textContent= timeLeft;
    console.log(timeLeft)
    timer = setInterval(() => {
        timeLeft--;
        console.log(timeLeft);
        
        time = document.getElementById("timer");
        time.textContent = timeLeft;
        if (timeLeft == 0) {
            clearInterval(timer);
            console.log("done"); 
            new Audio("beep.mp3").play();
        }
    }, 1000)
    
}
