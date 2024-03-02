function myFunction() {
    let userInput = document.querySelector("#userInput")
    let message = document.querySelector("#message")
    message.innerHTML ="Welcome to the game, " + userInput.value +"!"


}

const Paper = 'papers-removebg-preview.png'
const Rock = 'Rock-removebg-preview (1).png'
const Scissors = 'scissors-removebg-preview (1).png'




function playGame (Paper,userChoice){
    document.getElementById('Player').src =Paper
  
    var imageElement =document.getElementById('Player')
    var newHeight =300
    var newWidth =300
    imageElement.style.height = newHeight + 'px';
    imageElement.style.width = newWidth + 'px';
    //the above lines of code changes the image and properties of it such as width and height
    var choices = ['rock','paper','scissors']
    var computerChoice = choices[Math.floor(Math.random()*choices.length)]

    document.getElementById('Computer').src= computerChoice


    
    var playerScore = 0
    var computerScore = 0

    var roundMessage = userInput + "chose" + userChoice + "." + "Computer chose" + computerChoice +"."
    if(userChoice === computerChoice){
        roundMessage += "It's a tie"
    } else if(
        (userChoice === 'rock' && computerChoice ==='scissors') ||
        (userChoice === 'paper' && computerChoice ==='rock') ||
        (userChoice === 'scissors' && computerChoice ==='paper') 
    ){
        roundMessage += userInput + "wins!"
        playerScore ++
    } else{
        roundMessage += "Coputer Wins!"
        computerScore ++
    }

    document.getElementById('result').textContent = roundMessage;
    document.getElementById('score').textContent = "Score: Player " + playerScore + " - Computer " + computerScore;

}