import data from './data.json' with {type: "json"};

const filterButton = document.querySelector(".filter-button")
const modalFilter = document.querySelector(".modal-filter")

filterButton.addEventListener('click', (a) => {
    a.preventDefault();
    modalFilter.classList.toggle("active")
})

