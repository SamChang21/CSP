//cleaning
const gotCarrotsData = localStorage.getItem('carrotsArray')
const convertedCarrotsData = JSON.parse(gotCarrotsData)
// if there is no local storage data, make empty array
// else add the converted data as robotsclean
let theCarrots = []
if (theCarrots === null){
    theCarrots = []
}
class Carrots {
    constructor(numP, averageH, workDone){
        this.numP = numP,
        this.averageH = averageH,
        this.workDone = workDone
    }
}

function carrotUpdate(){
    // get form values
    const numP = document.querySelector(`#numP`).value
    const averageH = document.querySelector(`#averageH`).value
    const workDone = document.querySelector(`#workDone`).value
    // create object from class
    const carrot = new Carrots(numP, averageH, workDone)
    console.log(carrot)
    // add to array
    theCarrots.push(carrot)
    // clear the screen
    document.querySelector("#yourCarrots").innerHTML = ``
    // show on screen (forEach)
    theCarrots.forEach(function(element){
        document.querySelector("#yourCarrots").innerHTML += `
        <img src='${element.imgURL}' />
        <p>You have ${element.numP} carrots that has ${element.averageH}</p>
        `
    });
    const carrotsData = JSON.stringify(theCarrots)
    localStorage.setItem('carrotsArray',carrotsData)
    const gotCarrotsData = localStorage.getItem('carrotsArray')
    const convertedCarrotsData = JSON.parse(gotCarrotsData)
}

convertedCarrotsData.forEach(function(element){
    if(averageH >= 20){
    document.querySelector("#yourCarrots").innerHTML +=
    `
    <img src="img/carrot1.jpg">
    <p>There are ${element.numP} carrots (around ${element.averageH}), and they got ${element.workDone}</p>
    <br>
   `
    }
});

function cleanDelete(){
    const filteredtheCarrots = theCarrots.filter(function (element) {
        
    })
}