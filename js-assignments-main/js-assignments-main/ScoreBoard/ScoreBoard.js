let score1 = 0;
let score2 = 0;
function s1add1() {
    score1 += 1;
    document.querySelector(".score1").innerHTML = score1
}
function s1add2() {
    score1 += 2;
    document.querySelector(".score1").innerHTML = score1
}
function s1add3() {
    score1 += 3;
    document.querySelector(".score1").innerHTML = score1
}
function s1sub1() {
    if(score1 != 0) {
        score1 -= 1;
    }
    document.querySelector(".score1").innerHTML = score1
}
function s2add1() {
    score2 += 1;
    document.querySelector(".score2").innerHTML = score2
}
function s2add2() {
    score2 += 2;
    document.querySelector(".score2").innerHTML = score2
}
function s2add3() {
    score2 += 3;
    document.querySelector(".score2").innerHTML = score2
}
function s2sub1() {
    if(score2 != 0) {
        score2 -= 1;
    }
    document.querySelector(".score2").innerHTML = score2
}
var team1 = prompt("What is the team1 name?")
    document.querySelector(".name1").innerHTML = team1
var team2 = prompt("What is the team2 name?")
    document.querySelector(".name2").innerHTML = team2

function reset1() {
    score1 = 0
    document.querySelector(".score1").innerHTML = score1
}
function reset2() {
    score2 = 0
    document.querySelector(".score2").innerHTML = score2

}
let minute = 15;
let second = 0;
let RepeatTTime
let period = 1;
function start() {
    RepeatTTime = setInterval(time, 1000)
}
function pause() {
    clearInterval(RepeatTTime)
}
function reset() {
    minute = 15;
    second = 0;
    document.querySelector(".time").innerHTML = minute + ":" + second;
    if(second < 10) {
        document.querySelector(".time").innerHTML = minute + ":0" + second;
    }
}
function time() {
    if(second == 0) {
        if(minute == 0) {
            minute = 15;
            second = 1;
            if(period < 4) {
                period += 1;
            }
        }else {
            second = 60;
            minute -= 1;
        }
    }
    second -= 1;
    document.querySelector(".time").innerHTML = minute + ":" + second;
    if(second < 10) {
        document.querySelector(".time").innerHTML = minute + ":0" + second;
    }
    document.querySelector(".period").innerHTML = period;
}
let shotpoint = 24
let RepeatShotp
function times() {
    if(shotpoint != 0) {
        shotpoint -= 1
        document.querySelector(".shotp").innerHTML = shotpoint;
    }else {
        shotpoint = 24
    }
}
function starts() {
    RepeatShotp = setInterval(times, 1000)
}
function pauses() {
    clearInterval(RepeatShotp)
}
function resets() {
    shotpoint = 24
    clearInterval(RepeatShotp)
}
function resetall() {
    minute = 15
    second = 0
    shotpoint = 24
    score1 = 0
    score2 = 0
    period = 1
    clearInterval(RepeatShotp)
    clearInterval(RepeatTTime)
    name1 = "none"
    name2 = "none"
    document.querySelector(".shotp").innerHTML = shotpoint;
    document.querySelector(".time").innerHTML = minute + ":" + second;
    if(second < 10) {
        document.querySelector(".time").innerHTML = minute + ":0" + second;
    }    
    document.querySelector(".score1").innerHTML = score1
    document.querySelector(".score2").innerHTML = score2
    document.querySelector(".period").innerHTML = period;
    document.querySelector(".name1").innerHTML = name1
    document.querySelector(".name2").innerHTML = name2

}
function startall() {
    starts()
    start()
    score1 = 0
    score2 = 0
    document.querySelector(".score1").innerHTML = score1
    document.querySelector(".score2").innerHTML = score2
}