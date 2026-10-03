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

let timer;


function RandomChallenge() {
    let randomIndex = Math.floor(Math.random() * challenges.length);
    let challenge = challenges[randomIndex];

    a = document.getElementById("challenge");
    a.textContent = challenge;
    Countdown();
}

function Countdown() {
    clearInterval(timer);

    let timeLeft = 60;
    let time = document.getElementById("timer");
    time.textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        time.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timer);
            new Audio("beep.mp3").play();
            console.log("done");
        }
    }, 1000);
}
function CompleteChallenge() {
    let completed = Number(localStorage.getItem("completed"));

    if (!localStorage.getItem("completed")) {
        completed = 0;
    }

    completed++;

    localStorage.setItem("completed", completed);
    document.getElementById("completed").textContent = completed;
}
