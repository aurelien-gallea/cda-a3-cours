const afficherMessage = () => alert('hello')

var intro = window.document.getElementById('intro')
console.log(intro);

var rouges = document.getElementsByClassName('rouge')

// for (const rouge of rouges) {
//     console.log(rouge.innerHTML);
// }

// var paragraphes = document.getElementsByTagName("p")
// for (const paragraphe of paragraphes) {
//     console.log(paragraphe.innerHTML);
// }

// var notFirstP = document.querySelectorAll("p:not(:first-child)")
// for (const para of notFirstP) {
//     console.log(para.innerHTML);
// }

var notFirstP = document.querySelector("p:not(:first-child)")

    // console.log(notFirstP.innerHTML);

var lien = document.querySelector('a')
console.log(lien.getAttribute("href"));

const switchLink = () => {
    lien.setAttribute("href", "http://franceinfo.fr")
    lien.textContent = "consulter l'actualité"
}

var premierP = document.querySelector('p')

// console.log(premierP.classList);
// console.log(premierP.className);
var classes = premierP.classList
// classes.remove("rouge")
classes.add("bleu")
classes.toggle("bleu")
console.log(classes.contains('rouge'));

const switchColor = () => {
    const paras = document.querySelectorAll('p')
    for (const para of paras) {
        // para.classList.toggle("bleu")
        // para.classList.toggle("rouge")
        if (para.classList.contains("rouge")) {
            para.classList.replace("rouge", "bleu")
        } else {
            para.classList.replace("bleu", "rouge")

        }
    }
}