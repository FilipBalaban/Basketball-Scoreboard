// Home
let homeScoreEl = document.getElementById("home-score")
let homePoints = 0
homeScoreEl.textContent = homePoints

// Guest
let guestScoreEl = document.getElementById("guest-score")
let guestPoints = 0
guestScoreEl.textContent = guestPoints

// Home points

// +1 Pt
function ptHome1() {
    homePoints += 1
    homeScoreEl.textContent = homePoints
}

// +2 Pt
function ptHome2() {
    homePoints += 2
    homeScoreEl.textContent = homePoints
}

// +3 Pt
function ptHome3() {
    homePoints += 3
    homeScoreEl.textContent = homePoints
}


// guest points

// +1 Pt
function ptGuest1() {
    guestPoints += 1
    guestScoreEl.textContent = guestPoints
}

// +2 Pt
function ptGuest2() {
    guestPoints += 2
    guestScoreEl.textContent = guestPoints
}

// +3 Pt
function ptGuest3() {
    guestPoints += 3
    guestScoreEl.textContent = guestPoints
}

function newGame() {
    homePoints = 0
    homeScoreEl.textContent = homePoints

    guestPoints = 0
    guestScoreEl.textContent = guestPoints
}