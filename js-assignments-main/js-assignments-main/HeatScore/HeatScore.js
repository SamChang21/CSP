let hairy = 0
let personality = 0
let rich = 0
let Beauty = 0
let SugarMommies = 0
let attraciveness = 0
var gender = prompt("Are you boy or girl?")


if(gender==="boy"){
    hairy = parseInt(prompt("Out of 1 to 100, are you hairy?"))
    personality = parseInt (prompt("Out of 1 to 100, how will you grade your personality?"))
    rich = parseInt (prompt("Out of 1 to 100, how will you grade your richness?"))
    
    attraciveness = ((hairy+personality+rich)/3) 
    document.write(`<div class="text"> Your attraciveness is ${attraciveness}</div>`)
    
    if (attraciveness>=90) {
        document.write(`<img class="face" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/64953/heart-eyes-emoji-clipart-xl.png">`)
    } else if (attraciveness<90 && attraciveness>=60 ) {
        document.write(`<img class="face" src="https://www.pngfind.com/pngs/m/5-59769_emoticon-text-smiley-messaging-emoji-png-image-high.png">`)
    } else {
        document.write(`<img class="face" src="https://emojis.wiki/thumbs/emojis/expressionless-face.webp">`)
    }
}
if(gender==="girl"){
    hairy = parseInt(prompt("Out of 1 to 100, are you hairy?"))
    Beauty = parseInt (prompt("Out of 1 to 100, how will you grade your beauty?"))
    rich = parseInt (prompt("Out of 1 to 100, how will you grade your richness?"))

    attraciveness = ((hairy+Beauty+rich)/3) 
    document.write(`<div class="text"> Your attraciveness is ${attraciveness}</div>`)
    if (attraciveness>=90) {
        document.write(`<img class="face" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/64953/heart-eyes-emoji-clipart-xl.png">`)
    } else if (attraciveness<90 && attraciveness>=60 ) {
        document.write(`<img class="face" src="https://www.pngfind.com/pngs/m/5-59769_emoticon-text-smiley-messaging-emoji-png-image-high.png">`)
    } else {
        document.write(`<img class="face" src="https://emojis.wiki/thumbs/emojis/expressionless-face.webp">`)
    }
}