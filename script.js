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
