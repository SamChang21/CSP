arr = [
    [90, 90, 92, 94, 94, 94, 95, 95, 94, 95, 95, 96, 95],
    [12, 14, 15, 16, 18, 18, 19, 20, 21, 22, 25, 23, 22]
]
document.querySelector(".firstArray").innerText = "Accuracy: " + arr[0]
document.querySelector(".secondArray").innerText ="WPM: " + arr[1]
let fastest = 0
let slowest = 100
let mostAccurate = 0
let leastAccurate = 100
let averageA = 0
let averageWPM = 0
let sum0 = 0
let sum1 = 0
let latestA = 0
let latestWPM = 0
let differenceA = 0
let differenceWPM = 0
arr[1].forEach(element => {
    if (element > fastest) {
        fastest = element
    }
});
arr[1].forEach(element => {
    if (element < slowest) {
        slowest = element
    }
});
arr[0].forEach(element => {
    if (element > mostAccurate) {
        mostAccurate = element
    }
});
arr[0].forEach(element => {
    if (element < leastAccurate) {
        leastAccurate = element
    }
});
document.querySelector(".fastest").innerText = `fastest: ` + fastest
document.querySelector(".mostAccurate").innerText = `highest accuracy: ` + mostAccurate

arr[0].forEach(function (element) {
    sum0 = sum0 +element
})
arr[1].forEach(function (element) {
    sum1 = sum1 +element
})

averageA = sum0 / arr[0].length
averageWPM = sum1 / arr[1].length
document.querySelector(".averageA").innerText = `averag accuracy: ` + averageA
document.querySelector(".averageWPM").innerText = `averag WPM: ` + averageWPM
latestA = arr[0][arr[0].length-1]
latestWPM = arr[1][arr[1].length-1]
document.querySelector(".latestA").innerText = `latest accuracy: ` + latestA
document.querySelector(".latestWPM").innerText = `latest WPM: ` + latestWPM
differenceA = mostAccurate - leastAccurate
differenceWPM = fastest - slowest
document.querySelector(".differenceA").innerText = `the difference between your lowest and highest WPM score: ` + differenceA
document.querySelector(".differenceWPM").innerText = `difference between your lowest and highest Accuracy score ` + differenceWPM