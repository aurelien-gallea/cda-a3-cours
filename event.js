const texte = document.querySelector('#texte');

texte.addEventListener('keypress', (event) => {
    const value = event.key;
    if (value < "a" || value >"z") {

        event.preventDefault()
        alert("Valeur ne respecte pas les conditions")
    }
})