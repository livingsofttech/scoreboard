let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let score = 0
let guestscore = 0

function homeplus1(){
    score+=1
    homeScore.textContent = score
}

function homeplus2(){
    score+=2
    homeScore.textContent = score
}

function homeplus3(){
    score+=3
    homeScore.textContent = score
}


function guestplus1(){
    guestscore+=1
    guestScore.textContent = guestscore
}

function guestplus2(){
    guestscore+=2
    guestScore.textContent = guestscore
}

function guestplus3(){
    guestscore+=3
    guestScore.textContent = guestscore
}

function resetScore(){
    
    score = 0
    guestscore = 0
    
    guestScore.textContent = guestscore
    homeScore.textContent = score
}