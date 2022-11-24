let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

let homeScore = 0
let guestScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    scoreHome.textContent = homeScore
}

function increaseHomeScoreTwo() {
    homeScore += 2
    scoreHome.textContent = homeScore
}

function increaseHomeScoreThree() {
    homeScore += 3
    scoreHome.textContent = homeScore
}

function increaseGuestScoreOne(){
    guestScore += 1
    scoreGuest.textContent = guestScore
}

function increaseGuestScoreTwo() {
    guestScore += 2
    scoreGuest.textContent = guestScore
}

function increaseGuestScoreThree() {
    guestScore += 3
    scoreGuest.textContent = guestScore
}


function newGame() {
    homeScore = 0
    guestScore = 0
    scoreHome.textContent = homeScore
    scoreGuest.textContent = guestScore
}