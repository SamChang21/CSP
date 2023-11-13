const students = ["1","11","21"]
const Fstudents = students.filter(function (element) {
    console.log("num:",element)
    return element!=="11"
})
