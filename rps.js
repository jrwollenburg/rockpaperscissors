function getComputerChoice(){
    const result = Math.floor(Math.random()*3)
    if (result === 0){
        return 'rock';
    }
    else if (result === 1){
        return 'paper';
    }
    else if (result === 2){
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection){
    let adjustedPlayer = playerSelection.toLowerCase();
    if (adjustedPlayer === 'rock'){
        if (computerSelection === 'paper'){
            return 'computer';
        }
        else if (computerSelection === 'scissors'){
            return 'player';
        }
    }
    else if (adjustedPlayer === 'paper'){
        if (computerSelection === 'rock'){
            return 'player';
        }
        else if (computerSelection === 'scissors'){
            return 'computer';
        }
    }
    else if (adjustedPlayer === 'scissors'){
        if (computerSelection === 'rock'){
            return 'computer';
        }
        else if (computerSelection === 'paper'){
            return 'player'
        }
    }
    return 'draw'
}

function game(){
    let playerWins = 0;
    let compWins = 0;
    for (let i = 0; i < 5; i ++){
        let playerChoice = prompt(`Round ${i+1}: Please enter rock, paper, or scissors`);
        let winner = playRound(playerChoice, getComputerChoice());
        console.log(playerChoice)
        console.log(winner)
        if (winner === 'computer'){
            compWins += 1;
        }
        else if (winner === 'player'){
            playerWins += 1;
        }
    }
    if (playerWins > compWins){
        return 'Player wins!'
    }
    else if (playerWins < compWins){
        return 'Computer wins!'
    }
    else {
        return 'DRAW!'
    }
}