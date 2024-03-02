function myFunction() {
    let userInput = document.querySelector("#userInput")
    let message = document.querySelector("#message")
    message.innerHTML ="Welcome to the game, " + userInput.value +"!"


}

const image1 = 'papers-removebg-preview.png'
const image2 = 'Rock-removebg-preview (1).png'
const image3 = 'scissors-removebg-preview (1).png'

function button (image1){
    document.getElementById('player').src =image1

}


