//cooking 
const gotCookData = localStorage.getItem('cookArray')
const convertedCookData = JSON.parse(gotCookData)
let robotscook = []
if (robotscook === null){
    robotscook = []
}

class Robotcook{
    constructor(num, functions, times, imgURL){
        this.num = num,
        this.functions = functions,
        this.times = times,
        this.imgURL = imgURL
    }
}
function cookClick(){
    // get form values
    const num = document.querySelector(`#name`).value
    const functions = document.querySelector(`#functions`).value
    const times = document.querySelector(`#times`).value
    const imgURL = document.querySelector(`#img`).value

    // create object from class
    const robot = new Robotcook(num, functions, times, imgURL)
    console.log(robot)
    // add to array
    robotscook.push(robot)
    // show on screen (forEach)
    robotscook.forEach(function(element){
        document.querySelector("#workingCook").innerHTML += `
        <img src='${element.imgURL}' />
        <p>The robot No. ${element.num} is ${element.functions} for ${element.times}</p>
        `
    });
    const cookData = JSON.stringify(robotscook)
    localStorage.setItem('cookArray',cookData)
    const gotCookData = localStorage.getItem('cookArray')
    const convertedCookData = JSON.parse(gotCookData)
}

convertedCookData.forEach(function(element){
    document.querySelector("#workingCook").innerHTML += `
    <img src='${element.imgURL}' />
    <p>The robot No. ${element.num} is ${element.functions} for ${element.times}</p>
    `
});
