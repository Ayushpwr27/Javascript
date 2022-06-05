let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
let messageEl = document.querySelector("#message-el")

// display player details
let player = {
    name : "Ayush",
    chips : 150
}
let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips


// function for drawing random cards
function getRandomeCard(){
    let randomNum = Math.floor(Math.random()*13) +1 // since there are 13 different cards in a deck including ace, king, queen ,and jack and others cards which have value accordingly  
    if (randomNum > 10 ) { // in blackjack king, queen ,and jack is treated as 10
        return 10  
    }
    else if (randomNum === 1){ //in blackjack ace is treated as 1 or 11 which is chosen by the player 
        return 11
    }
    else{
        return randomNum
    }
}

//Initiates the game on clicking start game button 
function startGame(){
    isAlive = true
    let firstCard = getRandomeCard()
    let secondCard = getRandomeCard()
    sum = firstCard + secondCard
    cards = [firstCard,secondCard]
    renderGame()
}

// renders card on the screen
function renderGame(){
    cardEl.textContent = "Cards: "
    for(let i=0; i<cards.length ; i++){
        cardEl.textContent += cards[i] + " "
    }
    // rules
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

// draw new card
function newCard(){
    
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomeCard()
        sum += card
        cards.push(card)
        renderGame() 
    }
}
