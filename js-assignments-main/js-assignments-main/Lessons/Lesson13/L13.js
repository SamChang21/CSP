const song1 = new Audio('audio/01.mp3')
const song2 = new Audio('audio/02.mp3')
const song3 = new Audio('audio/03.mp3')

function playSong(song){
    if (song === 1) {
    song1.play()
    song2.pause()
    song3.pause()
    }
    if (song === 2) {
    song2.play()
    song1.pause()
    song3.pause()
    }
    if (song === 3) {
    song3.play()
    song2.pause()
    song1.pause()
    }
}
function stopSong(song){
    if (song === 1) {
        song1.pause()
    }
    if (song === 2) {
        song2.pause()
    }
    if (song === 3) {
        song3.pause()
    }
}
function restartSong(song){
    if (song === 1) {
        song1.pause()
    }
    if (song === 2) {
        song2.pause()
    }
    if (song === 3) {
        song3.pause()
    }
}