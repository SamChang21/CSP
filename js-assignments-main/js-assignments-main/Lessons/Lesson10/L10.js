function handleClick() {
    const student = {
        name: document.querySelector(`#name`).value,
        cost: document.querySelector(`#grade`).value
    }
    console.log(student)
    students.push(student)
}

let students = [] 



