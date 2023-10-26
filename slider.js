var images = [
    "bowser.png",
    "luigi.png",
    "mario.png",
    "peach.png",
    "toad.png",
    "toadette.png",
    "yoshi.png"
]
console.log(images.length);
const img = document.querySelector("img")

// let i=0;
// const switchImage = () => {
//     if (i < images.length-1) {
//       i++;
//     } else {
//         i = 0;
//     }
//     img.src = `./images/${images[i]}`
//     img.alt = `${images[i].replace(".png", "")}`
// }
var interval;
function start() {
  interval =  setInterval(
        switchImage, 
        1000
        )
}

function stop() {
    clearInterval(interval)
}
function switchImage() {
    var image = document.querySelector('img');
    var src = image.getAttribute('src')
    var position = images.indexOf(src.substring(src.lastIndexOf('/') + 1))
    position++
    if (position == images.length) {
        position = 0
    }
    image.setAttribute('src', `images/${images[position]}`)
    // image.alt = images[position].replace(".png", "")
    image.alt = images[position].substring(0, images[position].indexOf("."))
}