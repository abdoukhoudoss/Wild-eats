import { data } from './data.js'

const filterButton = document.querySelector(".filter-button");
const modalFilter = document.querySelector(".modal-filter");
const sortButton = document.querySelectorAll(".sort-button");
const modalSort = document.querySelectorAll(".modal-sort");

filterButton.addEventListener('click', (event) => {
    event.preventDefault();
    modalFilter.classList.toggle("active");
    modalSort[0].classList.remove('active2');
})

console.log('filterButton', filterButton)
console.log('sortButton', sortButton)
console.log('modalFilter', modalFilter)
console.log('modalSort', modalSort)

sortButton[0].addEventListener('click', (event) => {
    event.preventDefault();
    console.log('test')
    modalSort[0].classList.toggle("active2");
    modalFilter.classList.remove('active');
})

function createRestaurantsArticles (restaurant) {
    const restaurantsSection = document.querySelector(".restaurants-section");
    const article = document.createElement("article");
    const imageElement = document.createElement('img');
    const nameElement = document.createElement("h2");
    const containerName = document.createElement('div')

    article.classList.add("restaurants-article");
    imageElement.classList.add("image-restaurants-article");
    nameElement.classList.add("name-restaurants-article");
    containerName.classList.add("container-name-restaurants-article");

    imageElement.src = restaurant.image;
    nameElement.innerHTML = restaurant.name;

    containerName.appendChild(nameElement);
    article.appendChild(imageElement);
    article.appendChild(containerName);
    restaurantsSection.appendChild(article);
}

data.forEach(restaurant => createRestaurantsArticles(restaurant));
