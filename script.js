let humanScore = 0;
let computerScore = 0;

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
                return 2;
            }
    }
}

function checkForWinner()
{
    if(humanScore >= 5 || computerScore >= 5)
    {
        if(humanScore > computerScore)
        {
            score.textContent = (`You win! The score was ${humanScore}-${computerScore}`);
        }
        else if (computerScore > humanScore)
        {
            score.textContent = (`You lose! The score was ${computerScore}-${humanScore}`);
        }
    }
    else
    {
        score.textContent = (`Player score: ${humanScore} | Computer Score: ${computerScore}`);
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanChoice = button.id;
        const result = playRound(humanChoice, getComputerChoice());
        if (result === 1)
        {
            humanScore++;
        }
        else if (result === 2)
        {
            computerScore++;
        }
        checkForWinner();
    })
})

const result = document.querySelector("#results");
const score = document.querySelector("#score");