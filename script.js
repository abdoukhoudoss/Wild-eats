import data from './data.json' with {type: "json"};

const bountonfiltre = document.querySelector(".boutonfiltre")
const depliant = document.querySelector(".filtre")

bountonfiltre.addEventListener('click', (a) => {
    a.preventDefault();
    depliant.classList.toggle("avec")
})

