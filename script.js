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



function playGame (userChoice){
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



      document.getElementById('result').textContent = resultMessage;
      document.getElementById('score').textContent = "Score: Player " + playerScore + " - Computer " + computerScore;

}

