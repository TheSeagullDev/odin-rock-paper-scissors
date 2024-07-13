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
    while (choice === null || (choice.toLowerCase() !== "rock" && choice.toLowerCase() !== "paper" && choice.toLowerCase() !== "scissors"))
    {
        choice = prompt("Invalid choice, please choose rock, paper, or scissors");
    }
    return choice.toLowerCase();
}

// returns 0 for tie, 1 for human win, 2 for computer win
function playRound(humanChoice, computerChoice)
{
    if(humanChoice === computerChoice)
    {
        console.log(`Tie! Both selected ${humanChoice}.`);
        return 0;
    }
    else if(humanChoice === "rock")
    {
        if(computerChoice === "paper")
        {
            console.log("You lose! Paper beats Rock!");
            return 2;
        }
        else
        {
            console.log("You win! Rock beats Scissors!");
            return 1;
        }
    }
    else if(humanChoice === "paper")
    {
        if(computerChoice === "rock")
        {
            console.log("You win! Paper beats Rock!");
            return 1;
        }
        else
        {
            console.log("You lose! Scissors beats Paper!");
            return 2;
        }
    }
    else
    {
        if(computerChoice === "paper")
            {
                console.log("You lose! Paper beats Rock!");
                return 2;
            }
            else
            {
                console.log("You win! Rock beats Scissors!");
                return 1;
            }
    }
}

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;
    let result;
    let humanSelection;
    let computerSelection;
    for (let i = 0; i < 5; i++)
    {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        result = playRound(humanSelection, computerSelection);
        if (result === 1)
        {
            humanScore++;
        }
        else if (result === 2)
        {
            computerScore++;
        }
    }
    if(humanScore > computerScore)
    {
        console.log(`You win! The score was ${humanScore}-${computerScore}`)
    }
    else if (computerScore > humanScore)
    {
        console.log(`You lose! The score was ${computerScore}-${humanScore}`)
    }
    else
    {
        console.log(`Tie! The score was ${computerScore}-${humanScore}`)
    }
}

playGame()
