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

sortButton[0].addEventListener('click', (event) => {
    event.preventDefault();
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

function createPromo (restaurant) {
    const backCarousel = document.createElement("img")
    const H2carousel = document.createElement("h2")
    const promoSection = document.querySelector(".promo-section")
    const promoItems = document.createElement("div")

    promoItems.classList.add("promo-items")
    H2carousel.classList.add("h2-carousel")
    backCarousel.classList.add("img-carousel")

    backCarousel.src = restaurant.image
    H2carousel.innerHTML = restaurant.name

    promoItems.appendChild(backCarousel)
    promoItems.appendChild(H2carousel)
    promoSection.appendChild(promoItems)
    

}
data.forEach(restaurant => {
    if (restaurant.discount) {
        createPromo(restaurant)
    }
});