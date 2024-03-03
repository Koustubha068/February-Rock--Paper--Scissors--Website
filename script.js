function myFunction() {
    let userInput = document.querySelector("#userInput")
    let message = document.querySelector("#message")
    message.innerHTML ="Welcome to the game, " + userInput.value +"!"


}

//const Paper = 'paper.png'
//const Rock = 'rock.png'
//const Scissors = 'scissors.png'


var playerScore = 0
var computerScore = 0
var roundsPlayed = 0



function playGame (userChoice){
  if(roundsPlayed<5){
    document.getElementById('Player').src = userChoice + ".png"
   

    var imageElement =document.getElementById('Player')
    var newHeight =15
    var newWidth =25
    imageElement.style.height = newHeight + 'rem';
    imageElement.style.width = newWidth + 'rem';
    //the above lines of code changes the image and properties of it such as width and height
    var choices = ['rock','paper','scissors']
    var computerChoice = choices[Math.floor(Math.random()*choices.length)]
    var computerChoiceImage = document.getElementById('Computer'); // created a variable which changes the images that appear for computer. Did this using document.get element by id
    computerChoiceImage.src = computerChoice + ".png"
    computerChoiceImage.style.height =newHeight +'rem'
    computerChoiceImage.style.width =newWidth +'rem'


    var resultMessage = "You chose " + userChoice + ". Computer chose " + computerChoice + ". ";
    
    if (userChoice === computerChoice) {
        resultMessage += "It's a tie!";
      } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
      ) {
        resultMessage += "You win this round!";
        playerScore++;
      } else {
        resultMessage += "Computer wins this round!";
        computerScore++;
      }

      roundsPlayed++


      document.getElementById('result').textContent = resultMessage;
      document.getElementById('score').textContent = "Score: Player: " + playerScore + " /  Computer: " + computerScore;

      if (roundsPlayed === 5) {
        announceWinner();
      }
    } else {
      alert("The game is over. Please restart to play again.");
    }
  }

  function announceWinner() {
    var winnerMessage = "Game over! ";

    if (playerScore > computerScore) {
      let winningMessage = ["You are the overall winner!","Congratulations on winning the game, player!","Great job on beating the computer!","You won!" ];
      let randomNumber = winningMessage[Math.floor(Math.random() * winningMessage.length)]
      winnerMessage += document.getElementById('result').textContent = randomNumber
    } else if (computerScore > playerScore) {
      let computerMessage = ["Computer is the final winner. Congratulations computer!","The computer has beaten you!","The computer won and you lost!"]
      let randomMessage =computerMessage[Math.floor(Math.random() * computerMessage.length)]
      winnerMessage += document.getElementById('result').textContent = randomMessage
    } else {
      winnerMessage += "It's a tie! Sadly, there is no overall winner";
    }

    document.getElementById('result').textContent = winnerMessage
  }

  function reset(){
    playerScore = 0
   computerScore = 0
   roundsPlayed = 0

   document.getElementById('result').textContent = "The Result will be here"
   document.getElementById('score').textContent = "Score: Player: 0  / Computer: 0"
   document.getElementById('Player').src = "Player Choice" +".png"
    var imageElement =document.getElementById('Player')
    var newHeight =23
    var newWidth =18
    imageElement.style.height = newHeight + 'rem';
    imageElement.style.width = newWidth + 'rem';

   document.getElementById('Computer').src = "Computer Choice" +".png"
   var imageElement =document.getElementById('Computer')
   var newHeight =23
   var newWidth =18
   imageElement.style.height = newHeight + 'rem';
   imageElement.style.width = newWidth + 'rem';

  }
  


