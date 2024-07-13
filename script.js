function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors"
        }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: ");
    while (choice.toLowerCase() !== "rock" && choice.toLowerCase() !== "paper" && choice.toLowerCase() !== "scissors")
    {
        choice = prompt("Invalid choice, please choose rock, paper, or scissors");
    }
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice)
{
    if(humanChoice === computerChoice)
    {
        console.log(`Tie! Both selected ${humanChoice}.`);
    }
    else if(humanChoice === "rock")
    {
        if(computerChoice === "paper")
        {
            console.log("You lose! Paper beats Rock!");
            computerScore++;
        }
        else
        {
            console.log("You win! Rock beats Scissors!");
            humanScore++;
        }
    }
    else if(humanChoice === "paper")
    {
        if(computerChoice === "rock")
        {
            console.log("You win! Paper beats Rock!");
            humanScore++;
        }
        else
        {
            console.log("You lose! Scissors beats Paper!");
            computerScore++;
        }
    }
    else
    {
        if(computerChoice === "paper")
            {
                console.log("You lose! Paper beats Rock!");
                computerScore++;
            }
            else
            {
                console.log("You win! Rock beats Scissors!");
                humanScore++;
            }
    }
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
