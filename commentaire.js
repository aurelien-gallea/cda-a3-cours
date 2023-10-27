"use strict"
var btn = document.querySelector('button');
btn.addEventListener('click', () => 
{
    const com = document.querySelector('#com');
    const comments = document.querySelector('#comments');
    // comments.innerHTML += "<p>" + com.value + "</p>";
    const p = document.createElement('p');
    p.innerHTML = com.value;
    comments.appendChild(p);
    com.value = "";
});

const sommme = (a,b) => a+b;
console.log(sommme(2,3));