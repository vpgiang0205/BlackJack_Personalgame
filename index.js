let blackjack = false

let card1 = getrandomcard()
let card2 = getrandomcard()
let cards = [card1, card2]
isalive = true

let message= ""
let messageel = document.getElementById("message")
let sumel = document.getElementById("sumel")
let cardel = document.getElementById("cardel")
let sum = card1 + card2 

function rendergame(){
    start()
    
}

function getrandomcard(){
    
    let randomcard = Math.floor(Math.random()*13) +1
    if (randomcard === 1){
        return 11
    }
    if (randomcard > 10){
        return 10
    }else{
        return getrandomcard()
        
    }
   
}



function start(){
    cardel.textContent = "Card: "
    for (let i = 0; i < cards.length; i++){
        cardel.textContent = cards[i]
    }


    cardel.textContent ="Card: " + cards[0] + " and " + cards[1]
    if (sum <= 16){
        message = "not minimum can hold, you should draw more card"
    }
    else if (sum  <= 20){
        message ="Do your want to draw a new card?"
    }
    
    else if (sum === 21 ){
        message = "you've got blackjack" 
        blackjack = true
    }
    
    else {
        message = "you lose"
        isalive = false
    }
    messageel.textContent = message
    sumel.textContent = "Sum: " + sum
}

function draw(){
    messageel.textContent = "you draw a new card"
    let card = Math.floor(Math.random()*13) +1
    cards.push(card)
    sum += card;
    rendergame()
    
}