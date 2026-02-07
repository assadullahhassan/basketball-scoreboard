let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homePrev = document.getElementById("homePrev")
let guestPrev = document.getElementById("guestPrev")
let homeCount = 0
let guestCount = 0

function homeBtn1() {
    homeCount +=1
    console.log(homeCount)
    homeScore.textContent = homeCount
}

function homeBtn2() {
    homeCount +=2
    console.log(homeCount)
    homeScore.textContent = homeCount
}

function homeBtn3() {
    homeCount +=3
    console.log(homeCount)
    homeScore.textContent = homeCount
}

function guestBtn1() {
    guestCount +=1
    console.log(guestCount)
    guestScore.textContent = guestCount
}

function guestBtn2() {
    guestCount +=2
    console.log(guestCount)
    guestScore.textContent = guestCount
}

function guestBtn3() {
    guestCount +=3
    console.log(guestCount)
    guestScore.textContent = guestCount
}

function start() {
    let homeMsg = "PREVIOUS SCORE: " + homeCount
    let guestMsg = "PREVIOUS SCORE: " + guestCount
    homePrev.textContent = homeMsg
    guestPrev.textContent = guestMsg
    
    homeScore.textContent = 0
    guestScore.textContent = 0
    guestCount = 0
    homeCount = 0
    
}