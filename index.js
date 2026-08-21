const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")
const homePrev = document.getElementById("homePrev")
const guestPrev = document.getElementById("guestPrev")

let homeCount = 0
let guestCount = 0

function addPoints(team, points) {
    if (team === 'home') {
        homeCount += points
        homeScore.textContent = homeCount
    } else if (team === 'guest') {
        guestCount += points
        guestScore.textContent = guestCount
    }
}

function homeBtn1() {
    addPoints('home', 1)
}

function homeBtn2() {
    addPoints('home', 2)
}

function homeBtn3() {
    addPoints('home', 3)
}

function guestBtn1() {
    addPoints('guest', 1)
}

function guestBtn2() {
    addPoints('guest', 2)
}

function guestBtn3() {
    addPoints('guest', 3)
}

function reset() {
    const homeMsg = "PREVIOUS SCORE: " + homeCount
    const guestMsg = "PREVIOUS SCORE: " + guestCount
    homePrev.textContent = homeMsg
    guestPrev.textContent = guestMsg
    
    homeScore.textContent = 0
    guestScore.textContent = 0
    homeCount = 0
    guestCount = 0
}
