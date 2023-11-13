//1
let num = 0
while (num<=4) {
    document.write(`I love web dev class!`)
    num++
    document.write(`<br>`)

}

//2
for (let i = 0; i <= 4;) {
    document.write(`${i}`)
    i++
    document.write(`<br>`)

}

//3
for (let i = 15; i <= 27;) {
    document.write(`${i}`)
    i = i + 3
    document.write(`<br>`)
}
//4
for (let i = 0; i <= 3;) {
    for (let j = 0; j <= 3;) {
        document.write(`⬜`)
        j++
    }
    document.write(`<br>`)
    i++
}

//5
for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= i;) {
        document.write(`🦴`)
        j++
    }
    document.write(`<br>`)
}

//6
for (let i = 1; i <= 7; i++) {
    for (let k = 7-i; k>0;) {
        document.write(`~`)
        k--
    }
    for (let j = 1; j <= i;) {
        document.write(`🦴`)
        j++
    }
    document.write(`<br>`)
}
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i;) {
        for (let k = 1; k<=j; k++) {
            document.write(`🦴`)            
        }
        document.write(`<br>`)
        j++
    }
    document.write(`<br>`)
}