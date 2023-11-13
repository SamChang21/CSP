function updateMe(){
    const name = document.querySelector("#name").value
    const age = document.querySelector("#age").value
    const kind = document.querySelector("#kind").value

    localStorage.setItem('name', name)
    localStorage.setItem('age', age)
    localStorage.setItem('kind', kind)

    console.log(name)
    console.log(age)
    console.log(kind)

}
const data = [
    {
    name:"1",
    grade:10},
    {
    name:"2",
    grade:10},
    {
    name:"3",
    grade:10},
    ]

    const stringData = JSON.stringify(data)

    localStorage.setItem('studentArray',stringData)

    const gotData = localStorage.getItem('studentArray')
    const convertedData = JSON.parse(gotData)

    console.log(convertedData[0])

    console.log(convertedData[0].name)