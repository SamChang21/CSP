

//planting
const gotPlantData = localStorage.getItem('plantArray')
const convertedPlantData = JSON.parse(gotPlantData)
let robotsplant = []
if (robotsplant === null){
    robotsplant = []
}
class Robotplan {
    constructor(num, functions, number, imgURL){
        this.num = num,
        this.functions = functions,
        this.number = number,
        this.imgURL = imgURL
    }
}

function plantClick(){
    // get form values
    const num = document.querySelector(`#name`).value
    const functions = document.querySelector(`#functions`).value
    const number = document.querySelector(`#name`).value
    const imgURL = document.querySelector(`#img`).value
    // create object from class
    const robot = new Robotplan(num, functions, number, imgURL)
    console.log(robot)
    // add to array
    robotsplant.push(robot)
    // show on screen (forEach)
    robotsplant.forEach(function(element){
        document.querySelector("#workingPlant").innerHTML += `
        <img src='${element.imgURL}' />
        <p>The robot No. ${element.num} is planting ${element.number} ${element.functions}</p>
        `
    });
    const plantData = JSON.stringify(robotsplant)
    localStorage.setItem('plantArray',plantData)
    const gotPlantData = localStorage.getItem('plantArray')
    const convertedPlantData = JSON.parse(gotPlantData)
    }
    convertedPlantData.forEach(function(element){
        document.querySelector("#workingPlant").innerHTML += `
        <img src='${element.imgURL}' />
        <p>The robot No. ${element.num} is planting ${element.number} ${element.functions}</p>
        `
    });



