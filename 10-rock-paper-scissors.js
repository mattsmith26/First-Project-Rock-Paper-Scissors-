result = localStorage.getItem('result');
playerMove = localStorage.getItem('playerMove');
computerMove = localStorage.getItem('computerMove');

document.querySelector('.js-result')
    .innerHTML = result;
document.querySelector('.js-moves')
    .innerHTML = `You
      <img src="images/${playerMove}-emoji.png" class="move-icon">
      <img src="images/${computerMove}-emoji.png" class="move-icon">
      Computer`;

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

displayScore();

function playGame(playerMove){
  const computerMove = pickComputerMove();
  let result = ''

  if( playerMove === 'scissors'){
      if (computerMove === 'rock') {
      result = 'You lose';

    } else if(computerMove === 'paper'){
      result = 'You win';

    } else if (computerMove === 'scissors') {
      result = 'Tie';
    }
  } else if(playerMove === 'paper'){
      if (computerMove === 'rock') {
      result = 'You win';

    } else if(computerMove === 'paper'){
      result = 'Tie';

    } else if (computerMove === 'scissors') {
      result = 'You lose';
    }
  } else if(playerMove === 'rock'){
      if (computerMove === 'rock') {
      result = 'Tie';

    } else if(computerMove === 'paper'){
      result = 'You lose';

    } else if (computerMove === 'scissors') {
      result = 'You win';
    }

  }

  if (result === 'You win'){
    score.wins += 1;
  } else if (result === 'You lose') {
    score.losses += 1;
  } else {
    score.ties += 1;
  }

  localStorage.setItem('result', result);
  localStorage.setItem('playerMove', playerMove);
  localStorage.setItem('computerMove', computerMove);
  localStorage.setItem('score', JSON.stringify(score));
  displayScore();

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves')
    .innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;


}

function pickComputerMove () {
  const randomNumber = Math.random();
  let computerMove = '';
  
  if (randomNumber < 1/3 ){
    computerMove = 'rock';
    
  }
  else if (randomNumber >= 1/3 && randomNumber < 2/3 ){
    computerMove = 'paper';

  }

  else if (randomNumber ) {
    computerMove = 'scissors';

  }
  return computerMove;
}

function displayScore () {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`;
}