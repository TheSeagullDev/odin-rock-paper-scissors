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
        result.textContent = (`Tie! Both selected ${humanChoice}.`);
        return 0;
    }
    else if(humanChoice === "rock")
    {
        if(computerChoice === "paper")
        {
            result.textContent = ("You lose! Paper beats rock!");
            return 2;
        }
        else
        {
            result.textContent = ("You win! Rock beats scissors!");
            return 1;
        }
    }
    else if(humanChoice === "paper")
    {
        if(computerChoice === "rock")
        {
            result.textContent = ("You win! Paper beats rock!");
            return 1;
        }
        else
        {
            result.textContent = ("You lose! Scissors beats paper!");
            return 2;
        }
    }
    else
    {
        if(computerChoice === "paper")
            {
                result.textContent = ("You win! Scissors beats paper!");
                return 1;
            }
            else
            {
                result.textContent = ("You lose! Rock beats Scissors!");
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
        result.textContent = (`You win! The score was ${humanScore}-${computerScore}`)
    }
    else if (computerScore > humanScore)
    {
        result.textContent = (`You lose! The score was ${computerScore}-${humanScore}`)
    }
    else
    {
        result.textContent = (`Tie! The score was ${computerScore}-${humanScore}`)
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanChoice = button.id;
        playRound(humanChoice, getComputerChoice());
    })
})

const result = document.querySelector("#results");
