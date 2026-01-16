function play(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("user").innerText =
        "You chose: " + userChoice;

    document.getElementById("computer").innerText =
        "Computer chose: " + computerChoice;

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Draw!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "🎉 You Win!";
    } else {
        result = "😢 You Lose!";
    }

    document.getElementById("winner").innerText = result;
}
