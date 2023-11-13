const desserts =["desserts1","desserts2","desserts3","desserts4"]
//console.log(desserts.length)
desserts.splice(1,1)
desserts.unshift("desserts0")

const Rnum =[1,3,5,7,9]
let sum = 0 
Rnum.forEach(function (element) {
    sum = sum+element
    console.log (sum) 
})

const twoDArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]


const jerry = {
    age:18,
    body: "thin",
    playGame(){
        console.log('play AOV')
    },
    biking(){
        console.log('he rode his bike')
    }
}
 
const ethan = {
    age:17,
    body: "thin",
    playGame(){
        console.log('play AOV')
    },
    biking(){
        console.log('he rode his bike')
    }
}
const thomas = {
    age:18,
    body: "medium",
    playBadminton(){
        console.log('play Badminton')
    },
    biking(){
        console.log('he ride his bike')
    }
}
