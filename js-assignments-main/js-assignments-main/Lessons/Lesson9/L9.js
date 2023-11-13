class Student{
    constructor(gender, name){
        this.gender = gender
        this.name = name
    }
    pass(){
        console.log(`${this.name} pass the test`)
    }

}

const sam = new Student('male','sam')

class Movie {
    constructor(name, type, time){
        this.name = name
        this.type = type
        this.time = time
    }
    intro(){
        console.log(`${this.name} is a ${this.type} movie, and it is ${this.time} long.`)
    }
}


const m1 = new Movie('No1,', 'action', '60')
const m2 = new Movie('No2,', 'love', '60')
const m3 = new Movie('No3,', 'scary', '60')

class Song {
    constructor(name, theme, artist){
        this.name = name
        this.theme = theme
        this.artist = artist
    }
    intro(){
        console.log(`${this.name} is a ${this.theme} song, and it is made by ${this.artist} .`)
    }
}

const s1 = new Song('No1,', 'lonely', 'sam')
const s2 = new Song('No2,', 'love', 'sam')
const s3 = new Song('No3,', 'brave', 'sam')