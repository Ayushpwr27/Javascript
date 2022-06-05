let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
let messageEl = document.querySelector("#message-el")

let player = {
    name : "Ayush",
    chips : 150
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomeCard(){
    let randomNum = Math.floor(Math.random()*13) +1
    if (randomNum > 10 ) {
        return 10
    }
    else if (randomNum === 1){
        return 11
    }
    else{
        return randomNum
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomeCard()
    let secondCard = getRandomeCard()
    sum = firstCard + secondCard
    cards = [firstCard,secondCard]
    renderGame()
}



function renderGame(){
    cardEl.textContent = "Cards: "
    for(let i=0; i<cards.length ; i++){
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum 
    if (sum <= 20) {
        message = "do you want to draw a card"
    }
    else if (sum === 21) {
        message = "You've got Blackjack"
        hasBlackJack = true
    }
    else{
        message = "You are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomeCard()
        sum += card
        cards.push(card)
        renderGame() 
    }
}